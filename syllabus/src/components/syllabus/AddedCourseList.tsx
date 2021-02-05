import React from "react";
import stickybits from "stickybits";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { WithTranslation, withTranslation } from "react-i18next";
import { Step, Icon, Message } from "semantic-ui-react";
import { VerticalStep } from "@bit/wasedatime.syllabus.ts.styles.vertical-step";

import {
  addedCourseListSwitchHeight,
  headerHeight,
} from "@bit/wasedatime.core.ts.constants.size-variables";
import CourseListSummaryContainer from "../../containers/CourseListSummaryContainer";
import AddedCourseItemContainer from "../../containers/AddedCourseItemContainer";
import {
  Article,
  Section,
  Subheading,
} from "@bit/wasedatime.core.ts.styles.article";
import Course from "../../types/course";

const CourseListWrapper = styled("div")`
  position: fixed !important;
  margin-top: 32px;
  padding: 0.5em 1em 1em 1em;
  overflow-y: auto;
  width: 21em;
  height: calc(
    100vh - ${(props) => props.theme.headerHeight} -
      ${(props) => props.theme.addedCourseListSwitchHeight}
  );
`;

const ExtendedArticle = styled(Article)`
  margin-top: 0.2em;
  padding: 1em 0px;
`;

const StyledMessageHeader = styled(Message.Header)`
  font-family: Segoe UI, Yu Gothic Medium, Lato !important;
  font-display: swap;
`;

const StyledStepGroup = styled(Step.Group)`
  margin-top: 0px !important;
  .title {
    font-family: Segoe UI, Yu Gothic Medium, Lato !important;
    font-display: swap;
  }
`;

interface Props extends WithTranslation {
  addedCourses: Course[];
}

interface State {
  courses: Course[];
}

class AddedCourseList extends React.Component<Props, State> {
  wrapper: any;
  stickyWrapper: any;
  setWrapperRef: any;
  createStickyWrapper: () => void;
  cleanupStickyWrapper: () => void;

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

    this.state = {
      courses: props.addedCourses,
    };
  }

  componentDidMount() {
    this.createStickyWrapper();
  }

  componentWillUnmount() {
    this.cleanupStickyWrapper();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.addedCourses !== this.props.addedCourses) {
      this.setState({ courses: this.props.addedCourses });
    }
  }

  removeCourseFromList = (course) => {
    this.setState((prevState) => ({
      courses: prevState.courses.filter((c) => c !== course),
    }));
  };

  render() {
    const { addedCourses, t } = this.props;

    return (
      <CourseListWrapper innerRef={this.setWrapperRef}>
        <CourseListSummaryContainer courses={addedCourses} />

        {addedCourses.length ? (
          <div style={{ fontSize: "14px" }}>
            {addedCourses.map((course, index) => (
              <AddedCourseItemContainer
                key={index}
                course={course}
                removeCourseFromList={this.removeCourseFromList}
              />
            ))}
          </div>
        ) : (
          <ExtendedArticle>
            <Message info size="tiny">
              <StyledMessageHeader>
                {t("syllabus.Added courses are displayed here")}
              </StyledMessageHeader>
            </Message>
            <Section>
              <Subheading as="h2">{t("syllabus.To add a course")}</Subheading>
              <StyledStepGroup size="huge" vertical fluid>
                <VerticalStep>
                  <Icon name="search" />
                  <Step.Content>
                    <Step.Title>
                      {t("syllabus.Search with keywords")}
                    </Step.Title>
                    <Step.Description>
                      {t("syllabus.With course or instructor's name")}
                    </Step.Description>
                    <Step.Description>
                      {t("syllabus.English & Japanese supported")}
                    </Step.Description>
                  </Step.Content>
                </VerticalStep>

                <Step>
                  <Icon name="plus" />
                  <Step.Content>
                    <Step.Title>
                      {t("syllabus.Click on")}{" "}
                      <FontAwesomeIcon
                        style={{ color: "#48af37" }}
                        icon={faPlusCircle}
                        size="1x"
                      />{" "}
                      {t("syllabus.to add")}
                    </Step.Title>
                    <Step.Description>
                      {t("syllabus.To remove")}
                      {t("syllabus.Click on")}{" "}
                      <FontAwesomeIcon
                        style={{ color: "#ce0115" }}
                        icon={faMinusCircle}
                        size="1x"
                      />{" "}
                      {t("syllabus.to remove suffix")}
                    </Step.Description>
                  </Step.Content>
                </Step>
              </StyledStepGroup>
            </Section>
            <Section>
              <Message info size="mini">
                <StyledMessageHeader>
                  {t("syllabus.Pro Tip!")}
                </StyledMessageHeader>
                {t("syllabus.Use")} {t("syllabus.Filter by")}{" "}
                {t("syllabus.to narrow down your search")}
              </Message>
            </Section>
          </ExtendedArticle>
        )}
      </CourseListWrapper>
    );
  }
}

export default withTranslation("translation")(AddedCourseList);
