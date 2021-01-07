import React from "react";
import styled from "styled-components";
import { Wrapper } from "../../styled-components/Wrapper";
import { media, sizes } from "../../styled-components/utils";
import MediaQuery from "react-responsive";
import RelatedCoursesWrapper from "./RelatedCoursesWrapper";
import RelatedCoursesButton from "./RelatedCoursesButton";
import Modal from "../../components/Modal";

export const ShortWrapper = styled(Wrapper)`
  flex: 0 0 24em;
  ${media.tablet`flex: 0 0 auto; width: 100%`};
`;

const modalStyle = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: "3030",
  },
  content: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#fff",
    overflowY: "auto",
    overflowScrolling: "touch",
    WebkitOverflowScrolling: "touch",
    outline: "none",
    padding: 0,
  },
};

const RelatedCourses = ({
  courses,
  reviews,
  searchLang,
  isModalOpen,
  handleToggleModal,
}) => (
  <MediaQuery minWidth={sizes.desktop}>
    {(matches) => {
      return matches ? (
        <ShortWrapper>
          <RelatedCoursesWrapper
            relatedCourses={courses}
            courseReviews={reviews}
            searchLang={searchLang}
          />
        </ShortWrapper>
      ) : (
        <div>
          <RelatedCoursesButton
            isModalOpen={isModalOpen}
            handleToggleModal={handleToggleModal}
          />
          <Modal isOpen={isModalOpen} style={modalStyle}>
            <RelatedCoursesWrapper
              relatedCourses={courses}
              courseReviews={reviews}
              searchLang={searchLang}
            />
          </Modal>
        </div>
      );
    }}
  </MediaQuery>
);

export default RelatedCourses;
