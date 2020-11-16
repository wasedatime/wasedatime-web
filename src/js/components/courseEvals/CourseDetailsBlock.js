import React from "react";
import styled from "styled-components";
import { withNamespaces } from "react-i18next";
import { SYLLABUS_KEYS } from "../../config/syllabusKeys";
import { Segment, Grid, Table, Statistic, Divider } from "semantic-ui-react";
import CourseDetailsEvaluation from "./CourseDetailsEvaluation";

const mapCourseType = (course) => {
  if (course[SYLLABUS_KEYS.TYPE] === -1) return "";
  const courseTypeMap = [
    "Lecture",
    "Seminar",
    "Work",
    "Foreign Langauge",
    "On-demand",
    "Thesis",
    "Graduate Research",
    "Practice",
    "Blended",
  ];
  return courseTypeMap[course[SYLLABUS_KEYS.TYPE]];
};

const mapCourseLevel = (course) => {
  if (course[SYLLABUS_KEYS.TYPE] === -1) return "";
  const courseLevelMap = [
    "Beginner",
    "Intermediate",
    "Advanced",
    "Final-stage",
    "Master",
    "Doctor",
  ];
  return courseLevelMap[course[SYLLABUS_KEYS.LEVEL]];
};

const StyledSegment = styled(Segment)`
  width: 100% !important;
  font-size: 1em !important;
  margin: 1em 0px !important;
  &:hover {
    transform: none !important;
  }
`;

const CourseDetailsBlock = ({ course, t }) => {
  return (
    <StyledSegment>
      <Grid columns={2} stackable>
        <Grid.Column>
          <Grid columns={2} style={{ padding: "1em 5em" }}>
            <Grid.Column style={{ textAlign: "center" }}>
              <Statistic>
                <Statistic.Value>
                  {course[SYLLABUS_KEYS.MIN_YEAR]}
                </Statistic.Value>
                <Statistic.Label>Min Year</Statistic.Label>
              </Statistic>
            </Grid.Column>
            <Grid.Column style={{ textAlign: "center" }}>
              <Statistic>
                <Statistic.Value>
                  {course[SYLLABUS_KEYS.CREDIT]}
                </Statistic.Value>
                <Statistic.Label>Credit</Statistic.Label>
              </Statistic>
            </Grid.Column>
          </Grid>
        </Grid.Column>
        <Grid.Column>
          <Table unstackable>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Type</Table.Cell>
                <Table.Cell>
                  <b>{mapCourseType(course)}</b>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Category</Table.Cell>
                <Table.Cell>
                  <b>{course[SYLLABUS_KEYS.CATEGORY]}</b>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Level</Table.Cell>
                <Table.Cell>
                  <b>{mapCourseLevel(course)}</b>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid>

      <Divider horizontal style={{ margin: "2em", fontSize: "1em" }}>
        Evaluation
      </Divider>

      <CourseDetailsEvaluation course={course} />
    </StyledSegment>
  );
};

export default withNamespaces("translation")(CourseDetailsBlock);
