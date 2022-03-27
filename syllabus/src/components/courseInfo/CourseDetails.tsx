import React, { useState } from "react";

import colors from "@bit/wasedatime.core.theme.colors";
import {
  faBroadcastTower,
  faChalkboardTeacher,
  faClock,
  faVideo,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { WithTranslation, withTranslation } from "react-i18next";
import Grid from "semantic-ui-react/dist/commonjs/collections/Grid";
import Table from "semantic-ui-react/dist/commonjs/collections/Table";
import Statistic from "semantic-ui-react/dist/commonjs/views/Statistic";
import styled from "styled-components";

import CourseDetailsEvaluation from "@app/components/courseInfo/CourseDetailsEvaluation";
import CourseMoreDetails from "@app/components/courseInfo/CourseMoreDetails";
import { SyllabusKey } from "@app/constants/syllabus-data";
import Course from "@app/types/course";
import { ThemeContext } from "@app/utils/theme-context";

interface Props extends WithTranslation {
  course: Course;
}

type StyledTableProps = {
  isDark: boolean;
};

const StyledSubHeading = styled.h4`
  align-self: flex-start;
  margin: 1rem 0px;
  padding-left: 1rem;
  border-left: 5px solid rgb(148, 27, 47);
  font-weight: 300;
  font-size: 16px;
`;

const StyledTable = styled(Table)<StyledTableProps>`
  ${(props) =>
    props.isDark &&
    `
    border: 1px solid ${colors.dark.text3} !important;
    border-radius: 5px;
    border-bottom-width: 0px !important;
    tbody tr td {
      border-bottom: 1px solid ${colors.dark.text3};
    }
  `}
`;

const CourseDetails = ({ course, t, i18n }: Props) => {
  const { theme } = React.useContext(ThemeContext);
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
      <Grid
        columns={courseModality ? 4 : 2}
        style={{ padding: "1em" }}
        className="dark:bg-dark-bgMain dark:text-dark-text1"
      >
        <Grid.Column className="text-center dark:bg-dark-bgMain">
          <Statistic size="small">
            <Statistic.Value>
              <span className="dark:text-dark-text1">
                {course[SyllabusKey.MIN_YEAR]}+
              </span>
            </Statistic.Value>
            <Statistic.Label className="dark:text-dark-text2">
              <p className="dark:text-dark-text2">
                {t("courseInfo.Details.Min Year")}
              </p>
            </Statistic.Label>
          </Statistic>
        </Grid.Column>
        <Grid.Column className="text-center dark:bg-dark-bgMain">
          <Statistic size="small">
            <Statistic.Value>
              <span className="dark:text-dark-text1">
                {course[SyllabusKey.CREDIT]}
              </span>
            </Statistic.Value>
            <Statistic.Label>
              <p className="dark:text-dark-text2">
                {t("courseInfo.Details.Credit")}
              </p>
            </Statistic.Label>
          </Statistic>
        </Grid.Column>
        {courseModality && (
          <Grid.Column width={8} className="text-center dark:bg-dark-bgMain">
            <Statistic size="small">
              <Statistic.Value>
                <span className="dark:text-dark-text1">
                  {courseModality.icons}
                </span>
              </Statistic.Value>
              <Statistic.Label>
                <p className="dark:text-dark-text2">{courseModality.label}</p>
              </Statistic.Label>
            </Statistic>
          </Grid.Column>
        )}
      </Grid>
      <StyledTable
        unstackable
        className="border-2 dark:border-dark-text3 dark:bg-dark-bgMain"
        isDark={theme === "dark"}
      >
        <Table.Body className="dark:bg-dark-bgMain dark:text-dark-text1">
          <Table.Row>
            <Table.Cell>
              <p style={{ paddingLeft: "1em" }}>
                {t("courseInfo.Details.Type.title")}
              </p>
            </Table.Cell>
            <Table.Cell>
              <p>
                <b>{courseType}</b>
              </p>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <p style={{ paddingLeft: "1em" }}>
                {t("courseInfo.Details.Category")}
              </p>
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
              <p style={{ paddingLeft: "1em" }}>
                {t("courseInfo.Details.Level.title")}
              </p>
            </Table.Cell>
            <Table.Cell>
              <p>
                <b>{courseLevel}</b>
              </p>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </StyledTable>
    </React.Fragment>
  );

  return (
    <div className="dark:bg-dark-bgMain">
      {courseDetails}
      <StyledSubHeading>
        {t("courseInfo.Details.Evaluation.title")}
      </StyledSubHeading>
      <CourseDetailsEvaluation course={course} />
      <StyledSubHeading>{t("courseMoreDetails.title")}</StyledSubHeading>
      <CourseMoreDetails course={course} />
    </div>
  );
};

export default withTranslation("translation")(CourseDetails);
