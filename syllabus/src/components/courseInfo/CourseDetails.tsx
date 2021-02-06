import React from "react";
import styled from "styled-components";
import { WithTranslation, withTranslation } from "react-i18next";
import { SyllabusKey } from "@bit/wasedatime.syllabus.ts.constants.syllabus-data";
import { Segment, Grid, Table, Statistic, Divider } from "semantic-ui-react";
import CourseDetailsEvaluation from "./CourseDetailsEvaluation";
import Course from "../../types/course";

const StyledSegment = styled(Segment)`
  font-size: 1rem !important;
  cursor: default !important;
  border: none !important;
  box-shadow: none !important;
  &:hover {
    transform: none !important;
  }
`;

interface Props extends WithTranslation {
  course: Course;
}

const CourseDetails = ({ course, t, i18n }: Props) => {
  const courseTypes = [
    t("courseInfo.Details.Type.Lecture"),
    t("courseInfo.Details.Type.Seminar"),
    t("courseInfo.Details.Type.Work"),
    t("courseInfo.Details.Type.Foreign Language"),
    t("courseInfo.Details.Type.On-demand"),
    t("courseInfo.Details.Type.Thesis"),
    t("courseInfo.Details.Type.Graduate Research"),
    t("courseInfo.Details.Type.Practice"),
    t("courseInfo.Details.Type.Blended"),
  ];

  const courseLevels = [
    t("courseInfo.Details.Level.Beginner"),
    t("courseInfo.Details.Level.Intermediate"),
    t("courseInfo.Details.Level.Advanced"),
    t("courseInfo.Details.Level.Final-stage"),
    t("courseInfo.Details.Level.Master"),
    t("courseInfo.Details.Level.Doctor"),
  ];

  const courseType =
    course[SyllabusKey.TYPE] === -1
      ? ""
      : courseTypes[course[SyllabusKey.TYPE]];
  const courseLevel =
    course[SyllabusKey.LEVEL] === -1
      ? ""
      : courseLevels[course[SyllabusKey.LEVEL]];

  return (
    <StyledSegment>
      <Grid columns={2} stackable>
        <Grid.Column>
          <Grid columns={2} style={{ padding: "1em 2.5em" }}>
            <Grid.Column style={{ textAlign: "center" }}>
              <Statistic>
                <Statistic.Value>
                  {course[SyllabusKey.MIN_YEAR]}+
                </Statistic.Value>
                <Statistic.Label>
                  <p>{t("courseInfo.Details.Min Year")}</p>
                </Statistic.Label>
              </Statistic>
            </Grid.Column>
            <Grid.Column style={{ textAlign: "center" }}>
              <Statistic>
                <Statistic.Value>{course[SyllabusKey.CREDIT]}</Statistic.Value>
                <Statistic.Label>
                  <p>{t("courseInfo.Details.Credit")}</p>
                </Statistic.Label>
              </Statistic>
            </Grid.Column>
          </Grid>
          <Table unstackable>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <p>{t("courseInfo.Details.Type.title")}</p>
                </Table.Cell>
                <Table.Cell>
                  <p>
                    <b>{courseType}</b>
                  </p>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <p>{t("courseInfo.Details.Category")}</p>
                </Table.Cell>
                <Table.Cell>
                  <p>
                    <b>
                      {
                        course[
                          i18n.language === "en"
                            ? SyllabusKey.CATEGORY
                            : SyllabusKey.CATEGORY_JP
                        ]
                      }
                    </b>
                  </p>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <p>{t("courseInfo.Details.Level.title")}</p>
                </Table.Cell>
                <Table.Cell>
                  <p>
                    <b>{courseLevel}</b>
                  </p>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
        <Grid.Column>
          <Divider horizontal style={{ marginBottom: "2em" }}>
            <p>{t("courseInfo.Details.Evaluation.title")}</p>
          </Divider>
          <CourseDetailsEvaluation course={course} />
        </Grid.Column>
      </Grid>
    </StyledSegment>
  );
};

export default withTranslation("translation")(CourseDetails);
