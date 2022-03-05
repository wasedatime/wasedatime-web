import React from "react";

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

const modalStyle = {
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
    maxHeight: "200px",
    left: "30vw",
    right: "30vw",
    background: "#fff",
    overflowY: "auto",
    overflowScrolling: "touch",
    WebkitOverflowScrolling: "touch",
    outline: "none",
    fontSize: "16px",
    borderRadius: "20px",
  },
};

const mobileModalStyle = {
  overlay: modalStyle.overlay,
  content: {
    ...modalStyle.content,
    left: "10vw",
    right: "10vw",
  },
};

const ReviewsWrapper = styled("div")`
  background: #fff;
  line-height: 120%;
`;

const Review = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1em;
`;

const ReviewDivider = styled("hr")`
  margin: 0px 2em;
  border: 1px solid #ddd;
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

const ReviewTitle = styled("h6")`
  line-height: 1.5em;
  margin-top: 0;
  margin-bottom: 0.5em;
  font-size: 12px;
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
  background: #fff !important;
  color: orange !important;
  padding: 0px !important;
`;

const Deletebutton = styled(Editbutton)`
  color: red !important;
`;

const DeleteModalYesButton = styled("button")`
  background: red;
  color: #fff;
  padding: 5px;
  margin: 0px 5px;
  border-radius: 5px;
`;

const DeleteModalNoButton = styled("button")`
  background: green;
  color: #fff;
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
  <div>
    <h2 style={{ textAlign: "center" }}>
      {t("courseInfo.delete review confirmation")}
    </h2>
    <div style={{ textAlign: "center" }}>
      <DeleteModalYesButton onClick={() => confirmDeleteReview()}>
        {t("courseInfo.delete review yes")}
      </DeleteModalYesButton>
      <DeleteModalNoButton onClick={closeDeleteModal}>
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

    return reviews.map((review, i) => (
      <ReviewsWrapper key={i}>
        {i !== 0 && <ReviewDivider />}
        <Review>
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
                      index: i,
                    })
                  }
                >
                  <FontAwesomeIcon icon={faPen} />
                </Editbutton>
                <Deletebutton
                  icon
                  size="massive"
                  onClick={() => this.openDeleteModal(review, i)}
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

        <MediaQuery maxWidth={sizes.tablet}>
          {(matches) =>
            matches ? (
              <Modal
                isOpen={this.state.isDeleteModalOpen}
                style={mobileModalStyle}
              >
                <DeleteModalContent
                  t={t}
                  confirmDeleteReview={this.confirmDeleteReview}
                  closeDeleteModal={this.closeDeleteModal}
                />
              </Modal>
            ) : (
              <Modal isOpen={this.state.isDeleteModalOpen} style={modalStyle}>
                <DeleteModalContent
                  t={t}
                  confirmDeleteReview={this.confirmDeleteReview}
                  closeDeleteModal={this.closeDeleteModal}
                />
              </Modal>
            )
          }
        </MediaQuery>
      </ReviewsWrapper>
    ));
  }
}

export default withTranslation("translation")(ReviewsList);
