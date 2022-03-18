import React from "react";

import { height } from "@bit/wasedatime.core.ts.constants.size-variables";
import {
  faArrowDown,
  faMinusCircle,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { WithTranslation, withTranslation } from "react-i18next";
import Message from "semantic-ui-react/dist/commonjs/collections/Message";
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment";
import SimpleBar from "simplebar-react";
import stickybits from "stickybits";
import styled from "styled-components";

import { Article, Section, Subheading } from "@app/components/styles/Article";
import AddedCourseItemContainer from "@app/containers/AddedCourseItemContainer";
import CourseListSummaryContainer from "@app/containers/CourseListSummaryContainer";
import Course from "@app/types/course";

type CourseListWrapperProps = {
  innerRef: any;
};

const CourseListWrapper = styled.div<CourseListWrapperProps>`
  position: fixed !important;
  padding: 0.5em 1em 1em 1em;
  width: 22em;
  height: calc(
    100vh - ${height.headerHeight} -
      ${height.switchHeight}
  );
  .simplebar-scrollbar::before {
    background-color: #999;
  }
  .simplebar-placeholder {
    height: 0px !important;
  }
  ::-webkit-scrollbar {
    width: 5px;
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: #999;
  }
`;

const StyledSimpleBar = styled(SimpleBar)`
  ::-webkit-scrollbar {
    width: 5px;
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: #999;
  }
`;

const ExtendedArticle = styled(Article)`
  margin-top: 0.2em;
  padding: 1em 0px;
`;

const StyledMessageHeader = styled(Message.Header)`
  font-family: Segoe UI, Yu Gothic Medium, Lato !important;
  font-display: swap;
  font-size: 14px !important;
`;

const StepGroup = styled.div`
  margin-top: 1rem;

  div.ui.segment {
    padding: 1em 2em;
    margin: 0px;
  }
`;

const Step = styled(Segment)`
  padding: 1em 2em;
  margin: 0px;
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
            parseInt(height.headerHeight, 10) +
            parseInt(height.switchHeight, 10),
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
          <StyledSimpleBar
            autoHide
            style={{
              height: "calc(100vh - 150px)",
              fontSize: "14px",
              padding: "0px 1rem",
              overflowX: "hidden",
            }}
          >
            <ul>
              {addedCourses.map((course, index) => (
                <AddedCourseItemContainer
                  key={index}
                  course={course}
                  removeCourseFromList={this.removeCourseFromList}
                />
              ))}
            </ul>
          </StyledSimpleBar>
        ) : (
          <ExtendedArticle className="bg-light-bgMain dark:bg-dark-bgMain">
            <Message info size="tiny" className="dark:opacity-70">
              <StyledMessageHeader>
                {t("syllabus.Added courses are displayed here")}
              </StyledMessageHeader>
            </Message>

            <hr style={{ margin: "1em 0px" }} />

            <Section>
              <Subheading className="dark:text-dark-text2">{t("syllabus.To add a course")}</Subheading>
              <StepGroup>
                <Step className="dark:opacity-70">
                  <p>
                    <b>{t("syllabus.Search with keywords")}</b>
                  </p>
                  <p>{t("syllabus.With course or instructor's name")}</p>
                  <p>{t("syllabus.English & Japanese supported")}</p>
                </Step>

                <div style={{ textAlign: "center" }}>
                  <FontAwesomeIcon icon={faArrowDown} size="1x" />
                </div>

                <Step className="dark:opacity-70">
                  <p>
                    <b>
                      {t("syllabus.Click on")}{" "}
                      <FontAwesomeIcon
                        style={{ color: "#48af37" }}
                        icon={faPlusCircle}
                        size="1x"
                      />{" "}
                      {t("syllabus.to add")}
                    </b>
                  </p>
                  <p>
                    {t("syllabus.To remove")}
                    {t("syllabus.Click on")}{" "}
                    <FontAwesomeIcon
                      style={{ color: "#ce0115" }}
                      icon={faMinusCircle}
                      size="1x"
                    />{" "}
                    {t("syllabus.to remove suffix")}
                  </p>
                </Step>
              </StepGroup>
            </Section>
            <Section>
              <Message info size="mini" className="dark:opacity-70">
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
