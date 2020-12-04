import React from "react";
import stickybits from "stickybits";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { withNamespaces } from "react-i18next";

import {
  addedCourseListSwitchHeight,
  headerHeight,
} from "../../styled-components/variables";
import CourseListSummary from "../CourseListSummary";
import AddedCourseItem from "../../containers/syllabus/AddedCourseItem";
import { Wrapper } from "../../styled-components/Wrapper";
import {
  Article,
  ListItem,
  OList,
  Section,
  Subheading,
} from "../../styled-components/Article";

const CourseListWrapper = styled(Wrapper)`
  flex: none;
  padding: 0.5em 1em 1em 1em;
  overflow-y: auto;
  height: calc(
    100vh - ${(props) => props.theme.headerHeight} -
      ${(props) => props.theme.addedCourseListSwitchHeight}
  );
`;

const ExtendedArticle = styled(Article)`
  margin-top: 0.2em;
`;

class AddedCourseList extends React.Component {
  constructor(props) {
    super(props);
    this.wrapper = null;

    this.setWrapperRef = (element) => {
      this.wrapper = element;
    };

    this.createStickyWrapper = () => {
      if (this.wrapper) {
        this.stickyWrapper = stickybits(this.wrapper, {
          stickyBitStickyOffset:
            parseInt(headerHeight, 10) +
            parseInt(addedCourseListSwitchHeight, 10),
        });
      }
    };

    this.cleanupStickyWrapper = () => {
      if (this.stickyWrapper) {
        this.stickyWrapper.cleanup();
      }
    };
  }

  componentDidMount() {
    this.createStickyWrapper();
  }

  componentWillUnmount() {
    this.cleanupStickyWrapper();
  }

  render() {
    const {
      addedCourses,
      isSortingOptionOpen,
      handleToggleSortingOptions,
      selectedSortingOption,
      handleChangeSortingOption,
      t,
    } = this.props;

    return (
      <CourseListWrapper innerRef={this.setWrapperRef}>
        <CourseListSummary
          courses={addedCourses}
          isSortingOptionOpen={isSortingOptionOpen}
          handleToggleSortingOptions={handleToggleSortingOptions}
          selectedSortingOption={selectedSortingOption}
          handleChangeSortingOption={handleChangeSortingOption}
        />
        {addedCourses.length ? (
          <div style={{ fontSize: "14px" }}>
            {addedCourses.map((course, index) => (
              <AddedCourseItem key={course.a} course={course} />
            ))}
          </div>
        ) : (
          <ExtendedArticle>
            <Subheading as="h2">
              {t("syllabus.Added courses are displayed here")}
            </Subheading>
            <Section>
              <Subheading as="h2">{t("syllabus.To add a course")}</Subheading>
              <OList>
                <ListItem>
                  {t(
                    "syllabus.Search for courses and instructors in the top search bar"
                  )}
                  {t("syllabus.Japanese is supported")}
                  <br />
                  {t("syllabus.try")}
                </ListItem>
                <ListItem>
                  {t("syllabus.Click on")}{" "}
                  <FontAwesomeIcon
                    style={{ color: "#48af37" }}
                    icon={faPlusCircle}
                    size="1x"
                  />{" "}
                  {t("syllabus.to add")},{" "}
                  <FontAwesomeIcon
                    style={{ color: "#ce0115" }}
                    icon={faMinusCircle}
                    size="1x"
                  />{" "}
                  {t("syllabus.to remove")}
                </ListItem>
              </OList>
            </Section>
            <Section>
              <Subheading as="h2">{t("syllabus.Pro Tip!")}</Subheading>
              <OList>
                <ListItem>
                  {t("syllabus.Use")} {t("syllabus.Filter by")}{" "}
                  {t("syllabus.to narrow down your search")}
                </ListItem>
              </OList>
            </Section>
          </ExtendedArticle>
        )}
      </CourseListWrapper>
    );
  }
}

export default withNamespaces("translation")(AddedCourseList);
