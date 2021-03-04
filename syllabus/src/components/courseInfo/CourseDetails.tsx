import React, { useState } from "react";
import styled from "styled-components";
import { WithTranslation, withTranslation } from "react-i18next";
import { SyllabusKey } from "@bit/wasedatime.syllabus.ts.constants.syllabus-data";
import Grid from "semantic-ui-react/dist/commonjs/collections/Grid";
import Table from "semantic-ui-react/dist/commonjs/collections/Table";
import Statistic from "semantic-ui-react/dist/commonjs/views/Statistic";
import CourseDetailsEvaluation from "./CourseDetailsEvaluation";
import Course from "../../types/course";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBroadcastTower,
  faChalkboardTeacher,
  faClock,
  faVideo,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import CourseMoreDetails from "./CourseMoreDetails";

const StyledSubHeading = styled("h6")`
  align-self: flex-start;
  margin: 1rem 0px;
  padding-left: 1rem;
  border-left: 5px solid rgb(148, 27, 47);
  font-weight: 300;
`;

interface Props extends WithTranslation {
  course: Course;
}

const CourseDetails = ({ course, t, i18n }: Props) => {
  const [activeDetailsIndex, setActiveDetailsIndex] = useState(-1);

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

  const courseModalities = [
    {
      label: t("classModalities.In person"),
      icons: (
        <span>
          <FontAwesomeIcon icon={faChalkboardTeacher} />
        </span>
      ),
    },
    {
      label: t("classModalities.In person / Online"),
      icons: (
        <span>
          <FontAwesomeIcon icon={faChalkboardTeacher} />{" "}
          <FontAwesomeIcon icon={faWifi} />
        </span>
      ),
    },
    {
      label: t("classModalities.Full On-demand"),
      icons: (
        <span>
          <FontAwesomeIcon icon={faVideo} />
        </span>
      ),
    },
    {
      label: t("classModalities.Scheduled On-demand"),
      icons: (
        <span>
          <FontAwesomeIcon icon={faVideo} /> <FontAwesomeIcon icon={faClock} />
        </span>
      ),
    },
    {
      label: t("classModalities.Realtime streaming"),
      icons: (
        <span>
          <FontAwesomeIcon icon={faBroadcastTower} />
        </span>
      ),
    },
  ];

  const courseType =
    course[SyllabusKey.TYPE] === -1
      ? ""
      : courseTypes[course[SyllabusKey.TYPE]];
  const courseLevel =
    course[SyllabusKey.LEVEL] === -1
      ? ""
      : courseLevels[course[SyllabusKey.LEVEL]];
  const courseModality = courseModalities[course[SyllabusKey.MODALITY]];

  const courseDetails = (
    <React.Fragment>
      <Grid columns={courseModality ? 4 : 2} style={{ padding: "1em" }}>
        <Grid.Column style={{ textAlign: "center" }}>
          <Statistic size="small">
            <Statistic.Value>{course[SyllabusKey.MIN_YEAR]}+</Statistic.Value>
            <Statistic.Label>
              <p>{t("courseInfo.Details.Min Year")}</p>
            </Statistic.Label>
          </Statistic>
        </Grid.Column>
        <Grid.Column style={{ textAlign: "center" }}>
          <Statistic size="small">
            <Statistic.Value>{course[SyllabusKey.CREDIT]}</Statistic.Value>
            <Statistic.Label>
              <p>{t("courseInfo.Details.Credit")}</p>
            </Statistic.Label>
          </Statistic>
        </Grid.Column>
        {courseModality && (
          <Grid.Column width={8} style={{ textAlign: "center" }}>
            <Statistic size="small">
              <Statistic.Value>{courseModality.icons}</Statistic.Value>
              <Statistic.Label>
                <p>{courseModality.label}</p>
              </Statistic.Label>
            </Statistic>
          </Grid.Column>
        )}
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
    </React.Fragment>
  );

  return (
    <div>
      <StyledSubHeading>{t(`courseInfo.Details.title`)}</StyledSubHeading>
      {courseDetails}
      <StyledSubHeading>
        {t(`courseInfo.Details.Evaluation.title`)}
      </StyledSubHeading>
      <CourseDetailsEvaluation course={course} />
      <StyledSubHeading>{t(`courseMoreDetails.title`)}</StyledSubHeading>
      <CourseMoreDetails course={course} />
    </div>
  );
};

export default withTranslation("translation")(CourseDetails);
