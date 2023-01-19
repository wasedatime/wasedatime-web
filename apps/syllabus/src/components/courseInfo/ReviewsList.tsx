import React from "react";

import colors from "@bit/wasedatime.core.theme.colors";
import Modal from "@bit/wasedatime.core.ts.ui.modal";
import { media, sizes } from "@bit/wasedatime.core.ts.utils.responsive-utils";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { WithTranslation, withTranslation } from "react-i18next";
import MediaQuery from "react-responsive";
import Button from "semantic-ui-react/dist/commonjs/elements/Button";
import styled from "styled-components";

import ReviewStars from "@app/components/courseInfo/ReviewStars";
import ReviewLang from "@app/constants/review-lang";
import ReviewType from "@app/types/review";
import { ThemeContext } from "@app/utils/theme-context";

const modalStyle = (theme: string) => ({
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: "1001",
    background: "rgba(153, 153, 153, 0.5)",
  },
  content: {
    position: "absolute",
    top: "40vh",
    maxHeight: "120px",
    left: "30vw",
    right: "30vw",
    overflowY: "auto",
    overflowScrolling: "touch",
    WebkitOverflowScrolling: "touch",
    outline: "none",
    fontSize: "16px",
    borderRadius: "20px",
    backgroundColor: colors[theme].bgMain,
  },
});

const mobileModalStyle = (theme: string) => ({
  overlay: modalStyle(theme).overlay,
  content: {
    ...modalStyle(theme).content,
    left: "10vw",
    right: "10vw",
  },
});

const Review = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1em;
  line-height: 120%;
`;

const ReviewDivider = styled("hr")`
  margin: 0px 2em;
`;

const ReviewText = styled("div")`
  font-size: 1.3em;
  line-height: 1.5em;
  ${media.phoneMini`font-size: 1.5em; flex: 1 0 60%;`};
`;

const GoogleTranslationHint = styled("p")`
  margin: 0;
  margin-top: 5px;
  font-size: 0.8em;
  color: #aaa;
`;

const ReviewCreatedTime = styled(GoogleTranslationHint)`
  margin-top: 0px;
`;

const ReviewTitle = styled("h4")`
  line-height: 1.5em;
  margin-top: 0;
  margin-bottom: 0.5em;
  font-size: 16px;
`;

const ReviewYear = styled("span")`
  background-color: orange;
  color: #fff;
  padding: 0 0.5em;
  border-radius: 5px;
`;

const ReviewScalesList = styled("div")`
  word-break: break-word;
  flex: 1 0 6em;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 1.4em;
  line-height: 1.5em;
  ${media.phoneMini`flex: 1 0 40%;`};
`;

const ReviewScale = styled("div")`
  text-align: end;
`;

const Editbutton = styled(Button)`
  color: orange !important;
  padding: 0px !important;
  background-color: ${(props) =>
    props.$isDark ? colors.dark.bgMain : colors.light.bgMain} !important;
`;

const Deletebutton = styled(Editbutton)`
  color: red !important;
`;

const DeleteModalYesButton = styled("button")`
  padding: 5px;
  margin: 0px 5px;
  border-radius: 5px;
`;

const DeleteModalNoButton = styled("button")`
  padding: 5px;
  margin: 0px 5px;
  border-radius: 5px;
`;

interface ReviewToEdit extends ReviewType {
  src_comment: string;
  index: number;
}

interface Props extends WithTranslation {
  reviews: ReviewType[];
  searchLang: string | string[];
  reviewLang: string;
  openEditForm: (review: ReviewToEdit) => void;
  deleteReview: (review: ReviewType, index: number) => void;
}

interface State {
  isDeleteModalOpen: boolean;
  reviewToDelete: ReviewType | null;
  reviewIndexToDelete: number;
}

const DeleteModalContent = ({ t, confirmDeleteReview, closeDeleteModal }) => (
  <div className="bg-light-bgMain text-light-text1 dark:bg-dark-bgMain dark:text-dark-text1">
    <h2 className="text-center mb-2">
      {t("courseInfo.delete review confirmation")}
    </h2>
    <div className="text-center">
      <DeleteModalYesButton
        onClick={() => confirmDeleteReview()}
        className="mx-6 bg-light-lighter text-white dark:bg-dark-lighter"
      >
        {t("courseInfo.delete review yes")}
      </DeleteModalYesButton>
      <DeleteModalNoButton
        onClick={closeDeleteModal}
        className="mx-6 bg-light-text3 text-white dark:bg-dark-text3 dark:text-dark-text1"
      >
        {t("courseInfo.delete review no")}
      </DeleteModalNoButton>
    </div>
  </div>
);

class ReviewsList extends React.Component<Props, State> {
  state = {
    isDeleteModalOpen: false,
    reviewToDelete: null,
    reviewIndexToDelete: -1,
  };

  static contextType = ThemeContext;

  openDeleteModal = (review, i) => {
    this.setState({
      isDeleteModalOpen: true,
      reviewToDelete: review,
      reviewIndexToDelete: i,
    });
  };

  closeDeleteModal = () =>
    this.setState({
      isDeleteModalOpen: false,
      reviewToDelete: null,
      reviewIndexToDelete: -1,
    });

  confirmDeleteReview = () => {
    if (this.state.reviewToDelete) {
      this.props.deleteReview(
        this.state.reviewToDelete.created_at,
        this.state.reviewIndexToDelete
      );
    }
    this.closeDeleteModal();
  };

  render() {
    const { reviews, searchLang, reviewLang, openEditForm, t } = this.props;
    const { theme } = this.context;

    const ReviewItem = ({ review, index }) => (
      <Review className="bg-white dark:bg-dark-bgMain">
        <ReviewText>
          <ReviewTitle>
            <ReviewYear>{review.year}</ReviewYear>{" "}
            {review[searchLang === "en" ? "title" : "title_jp"]} ({" "}
            {review[searchLang === "en" ? "instructor" : "instructor_jp"]} )
          </ReviewTitle>
          <span>
            {review[`comment_${reviewLang}`] !== undefined &&
              review[`comment_${reviewLang}`].split("\n").map((str, j) => (
                <span key={j}>
                  {str}
                  <br />
                </span>
              ))}
          </span>
          {review.src_lang ? (
            review.src_lang !== reviewLang && (
              <GoogleTranslationHint>
                Translated from {ReviewLang[review.src_lang]} by Google
              </GoogleTranslationHint>
            )
          ) : (
            <GoogleTranslationHint>Not translated yet</GoogleTranslationHint>
          )}
          <ReviewCreatedTime>
            {new Date(review.created_at).toLocaleString()}
          </ReviewCreatedTime>
        </ReviewText>
        <ReviewScalesList>
          {review.mod && (
            <span>
              <Editbutton
                icon
                size="massive"
                onClick={() =>
                  openEditForm({
                    ...review,
                    src_comment: review[`comment_${review.src_lang}`],
                    index,
                  })
                }
                $isDark={theme === "dark"}
              >
                <FontAwesomeIcon icon={faPen} />
              </Editbutton>
              <Deletebutton
                icon
                size="massive"
                onClick={() => this.openDeleteModal(review, index)}
                $isDark={theme === "dark"}
              >
                <FontAwesomeIcon icon={faTrash} />
              </Deletebutton>
            </span>
          )}
          <ReviewScale>
            <span>{t("courseInfo.Satisfaction")}&nbsp;</span>
            <ReviewStars scale={review.satisfaction} />
          </ReviewScale>
          <ReviewScale>
            <span>{t("courseInfo.Difficulty")}&nbsp;</span>
            <ReviewStars scale={review.difficulty} />
          </ReviewScale>
          <ReviewScale>
            <span>{t("courseInfo.Benefit")}&nbsp;</span>
            <ReviewStars scale={review.benefit} />
          </ReviewScale>
        </ReviewScalesList>
      </Review>
    );

    return (
      <div>
        {reviews.length > 0 && (
          <ReviewDivider className="border-t-2 border-light-text3 dark:border-dark-text3" />
        )}
        {reviews.map((review, i) => (
          <React.Fragment key={i}>
            <ReviewItem review={review} index={i} />
            <ReviewDivider className="border-t-2 border-light-text3 dark:border-dark-text3" />
          </React.Fragment>
        ))}

        <MediaQuery maxWidth={sizes.tablet}>
          {(matches) =>
            matches ? (
              <Modal
                isOpen={this.state.isDeleteModalOpen}
                style={mobileModalStyle(theme)}
              >
                <DeleteModalContent
                  t={t}
                  confirmDeleteReview={this.confirmDeleteReview}
                  closeDeleteModal={this.closeDeleteModal}
                />
              </Modal>
            ) : (
              <Modal
                isOpen={this.state.isDeleteModalOpen}
                style={modalStyle(theme)}
              >
                <DeleteModalContent
                  t={t}
                  confirmDeleteReview={this.confirmDeleteReview}
                  closeDeleteModal={this.closeDeleteModal}
                />
              </Modal>
            )
          }
        </MediaQuery>
      </div>
    );
  }
}

export default withTranslation("translation")(ReviewsList);
