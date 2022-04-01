import React from "react";

import API from "@aws-amplify/api";
import SignInModal from "@bit/wasedatime.core.ts.ui.sign-in-modal";
import { media, sizes } from "@bit/wasedatime.core.ts.utils.responsive-utils";
import { getIdToken, getUserAttr } from "@bit/wasedatime.core.ts.utils.user";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactGA from "react-ga";
import { WithTranslation, withTranslation } from "react-i18next";
import MediaQuery from "react-responsive";
import Alert from "react-s-alert";
import styled from "styled-components";

import AddReviewForm from "@app/components/courseInfo/AddReviewForm";
import ReviewLangSwitches from "@app/components/courseInfo/ReviewLangSwitches";
import ReviewScalesCount from "@app/components/courseInfo/ReviewScalesCount";
import ReviewsList from "@app/components/courseInfo/ReviewsList";
import { SyllabusKey } from "@app/constants/syllabus-data";
import {
  gaCreateCourseReview,
  gaDeleteCourseReview,
  gaEditCourseReview,
  gaSwitchReviewLanguage,
} from "@app/ga/eventActions";
import { gaCourseReviews } from "@app/ga/eventCategories";
import { Course } from "@app/types/course";
import { Review, Scales } from "@app/types/review";
import { getAvgScales } from "@app/utils/get-avg-scales";
import { ThemeContext } from "@app/utils/theme-context";

const StyledReviewsWrapper = styled("div")`
  ${media.phone`padding: 0 1em;`}
`;

const StyledSubHeading = styled("h4")`
  align-self: flex-start;
  margin: 1rem 0px;
  padding-left: 1rem;
  border-left: 5px solid rgb(148, 27, 47);
  font-weight: 300;
  font-size: 16px;
`;

const AddReviewButton = styled("button")`
  color: #fff;
  border: 0px;
  border-radius: 5px;
  float: right;
  font-size: 14px;
  padding: 0px 0.5em;
  margin-top: 0.3rem;

  @media (max-width: 1180px) {
    float: none;
    width: 100%;
    margin-top: 0.5em;
  }
  ${media.desktop`float: none; width: 100%; margin-top: 0.5em;`}
  ${media.phone`font-size: 1.5em`}
`;

const Announcement = styled("div")`
  background-color: #48af37;
  color: #fff;
  margin-top: 20px;
  margin-bottom: 5px;
  padding: 5px 10px;
  font-size: 0.7em;
  ${media.tablet`font-size: 1em`}
  border-radius: 3px;
  line-height: normal;
`;

const Disclaimer = styled(Announcement)`
  background-color: #aaa;
  margin: 0.5rem 0px;
`;

const ReviewsListWrapper = styled("div")`
  max-height: 60vh;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 5px;
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    width: 5px;
    border-radius: 10px;
    background: #999;
  }
`;

interface Props extends WithTranslation {
  courseKey?: string;
  course: Course;
  searchLang: string | string[];
  reviews: Review[];
}

interface State {
  reviews: Review[];
  scalesAvg: Scales;
  reviewLang: string;
  isFormOpen: boolean;
  formScales: Scales;
  formText: string;
  formMode: string;
  editReviewIndex: number;
  editReviewPrimaryKey: string;
  editReviewOriginalText: string;
  isFormSending: boolean;
  isSignInModalOpen: boolean;
  userToken: string;
  userId: string;
}

class CourseReviews extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      reviews: props.reviews,
      scalesAvg: getAvgScales(props.reviews),
      reviewLang: props.searchLang,
      isFormOpen: false,
      formMode: "new",
      formScales: { satisfaction: 0, difficulty: 0, benefit: 0 },
      formText: "",
      editReviewIndex: -1,
      editReviewPrimaryKey: "",
      editReviewOriginalText: "",
      isFormSending: false,
      isSignInModalOpen: false,
      userToken: "",
      userId: "",
    };
  }

  static contextType = ThemeContext;

  onFormScaleChange = (target, score) => {
    this.setState((prevState) => ({
      formScales: { ...prevState.formScales, [target]: score },
    }));
  };

  onFormTextChange = (text) => this.setState({ formText: text });

  openEditForm = (review) => {
    this.setState(
      {
        formMode: "edit",
        formScales: {
          satisfaction: review.satisfaction,
          difficulty: review.difficulty,
          benefit: review.benefit,
        },
        formText: review.src_comment,
        editReviewIndex: review.index,
        editReviewPrimaryKey: review.created_at,
        editReviewOriginalText: review.src_comment,
      },
      () => this.setState({ isFormOpen: true })
    );
  };

  onNewReviewFormSubmit = async () => {
    const { formScales, formText, formMode, editReviewPrimaryKey, userToken } =
      this.state;

    if (!userToken.length) {
      this.setState({ isSignInModalOpen: true });

      return;
    }
    const { course, courseKey, t } = this.props;

    if (Object.values(formScales).indexOf(0) > -1 || formText.length === 0) {
      Alert.warning(t("courseInfo.Fill in all fields before sending"), {
        position: "bottom",
        effect: "jelly",
      });
    } else {
      const editReview = { ...formScales, comment: formText };
      const newReview = {
        ...editReview,
        course_key: courseKey,
        title: course[SyllabusKey.TITLE],
        title_jp: course[SyllabusKey.TITLE_JP],
        instructor: course[SyllabusKey.INSTRUCTOR],
        instructor_jp: course[SyllabusKey.INSTRUCTOR_JP],
        year: new Date().getFullYear(),
      };

      try {
        this.setState({ isFormSending: true });

        // Send the review
        if (formMode === "new") {
          ReactGA.event({
            category: gaCourseReviews,
            action: gaCreateCourseReview,
          });
          API.post("wasedatime-dev", `/course-reviews/${courseKey}`, {
            body: {
              data: newReview,
            },
            headers: {
              "Content-Type": "application/json",
              Authorization: userToken,
            },
          }).then(async () => this.cleanFormAndUpdateReviews(newReview));
        } else if (formMode === "edit") {
          ReactGA.event({
            category: gaCourseReviews,
            action: gaEditCourseReview,
          });
          API.patch(
            "wasedatime-dev",
            `/course-reviews/${courseKey}?ts=${editReviewPrimaryKey}`,
            {
              body: {
                data: editReview,
              },
              headers: {
                "Content-Type": "application/json",
                Authorization: userToken,
              },
            }
          ).then(async () => this.cleanFormAndUpdateReviews(newReview));
        }
      } catch (error) {
        Alert.error(this.props.t("courseInfo.Review failed to send"), {
          position: "bottom",
          effect: "jelly",
        });
      }
    }
  };

  cleanFormAndUpdateReviews = async (newReview) => {
    const { courseKey, t } = this.props;
    const { userToken, userId } = this.state;

    Alert.success(t("courseInfo.Review sent"), {
      position: "bottom",
      effect: "jelly",
    });

    const res = await API.get(
      "wasedatime-dev",
      `/course-reviews/${courseKey}?uid=${userId}`,
      {
        headers: {
          "x-api-key": "0PaO2fHuJR9jlLLdXEDOyUgFXthoEXv8Sp0oNsb8",
          "Content-Type": "application/json",
        },
      }
    );

    this.setState({
      reviews: res.data,
      scalesAvg: getAvgScales(res.data),
      isFormOpen: false,
      formScales: {
        satisfaction: 0,
        difficulty: 0,
        benefit: 0,
      },
      formText: "",
      isFormSending: false,
      formMode: "new",
      editReviewIndex: -1,
      editReviewPrimaryKey: "",
      editReviewOriginalText: "",
    });
  };

  deleteReview = async (reviewPrimaryKey, reviewIndex) => {
    const { reviews, userToken } = this.state;
    const { courseKey, t } = this.props;
    API.del(
      "wasedatime-dev",
      `/course-reviews/${courseKey}?ts=${reviewPrimaryKey}`,
      {
        headers: {
          Authorization: userToken,
        },
      }
    )
      .then(() => {
        Alert.success(t("courseInfo.Review deleted"), {
          position: "bottom",
          effect: "jelly",
        });
        ReactGA.event({
          category: gaCourseReviews,
          action: gaDeleteCourseReview,
        });

        const updatedReviews = reviews;
        updatedReviews.splice(reviewIndex, 1);
        this.setState({
          reviews: updatedReviews,
          scalesAvg: getAvgScales(updatedReviews),
        });
      })
      .catch((e) => console.error(e));
  };

  openReviewForm = () =>
    this.setState({
      isFormOpen: this.state.userToken.length > 0,
      isSignInModalOpen: this.state.userToken.length <= 0,
    });

  async componentDidMount() {
    const idToken = await getIdToken();
    const userAttr = await getUserAttr();
    this.setState({
      userToken: idToken,
      userId: userAttr ? userAttr.id : "",
    });
  }

  render() {
    const { searchLang, t } = this.props;
    const { theme } = this.context;

    const {
      reviews,
      scalesAvg,
      reviewLang,
      formScales,
      formText,
      isFormOpen,
      isFormSending,
      isSignInModalOpen,
    } = this.state;

    return isFormOpen ? (
      <StyledReviewsWrapper className="dark:bg-dark-bgMain">
        <AddReviewForm
          closeModal={() => this.setState({ isFormOpen: false })}
          scales={formScales}
          text={formText}
          handleScaleChange={this.onFormScaleChange}
          handleTextChange={this.onFormTextChange}
          handleFormSubmit={this.onNewReviewFormSubmit}
          isSending={isFormSending}
        />
      </StyledReviewsWrapper>
    ) : (
      <StyledReviewsWrapper className="dark:bg-dark-bgMain">
        <StyledSubHeading>
          {t("courseInfo.Reviews")}{" "}
          <MediaQuery minWidth={sizes.phone}>
            {(matches) => (matches ? " " : <br />)}
          </MediaQuery>
          <span style={{ marginLeft: "10px" }}>
            <ReviewLangSwitches
              reviewLang={reviewLang}
              switchReviewLang={(lng) => {
                ReactGA.event({
                  category: gaCourseReviews,
                  action: gaSwitchReviewLanguage,
                  label: lng,
                });
                this.setState({ reviewLang: lng });
              }}
              isInHeading
            />
          </span>
          <MediaQuery minWidth={sizes.phone}>
            {(matches) =>
              matches && (
                <AddReviewButton
                  onClick={this.openReviewForm}
                  className="bg-light-main dark:bg-dark-main"
                >
                  <FontAwesomeIcon icon={faPen} />{" "}
                  {this.props.t("courseInfo.Write your Review")}
                </AddReviewButton>
              )
            }
          </MediaQuery>
        </StyledSubHeading>
        <MediaQuery minWidth={sizes.phone}>
          {(matches) =>
            !matches && (
              <AddReviewButton
                onClick={this.openReviewForm}
                className="bg-light-main dark:bg-dark-main"
              >
                <FontAwesomeIcon icon={faPen} />{" "}
                {this.props.t("courseInfo.Write your Review")}
              </AddReviewButton>
            )
          }
        </MediaQuery>
        <Disclaimer className="dark:bg-dark-text3 dark:text-dark-text2">
          {t("courseInfo.Disclaimer")}
        </Disclaimer>
        <ReviewsListWrapper>
          <ReviewScalesCount
            avgSatisfaction={scalesAvg.satisfaction}
            avgDifficulty={scalesAvg.difficulty}
            avgBenefit={scalesAvg.benefit}
            thisCourseReviewsLength={reviews.length}
          />
          <ReviewsList
            reviews={reviews}
            searchLang={searchLang}
            reviewLang={reviewLang}
            openEditForm={this.openEditForm}
            deleteReview={this.deleteReview}
          />
        </ReviewsListWrapper>
        <SignInModal
          isModalOpen={isSignInModalOpen}
          closeModal={() => this.setState({ isSignInModalOpen: false })}
        />
      </StyledReviewsWrapper>
    );
  }
}

export default withTranslation("translation")(CourseReviews);
