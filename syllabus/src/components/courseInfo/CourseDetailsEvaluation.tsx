import React from "react";

import { media, sizes } from "@bit/wasedatime.core.ts.utils.responsive-utils";
import { WithTranslation, withTranslation } from "react-i18next";
import { PieChart } from "react-minimal-pie-chart";
import MediaQuery from "react-responsive";
import Grid from "semantic-ui-react/dist/commonjs/collections/Grid";
import Table from "semantic-ui-react/dist/commonjs/collections/Table";
import styled from "styled-components";

import { SyllabusKey } from "@app/constants/syllabus-data";
import Course from "@app/types/course";

const evalTypeMap = ["Exam", "Papers", "Class Participation", "Others"];
const evalColorMap = ["#c2402c", "#c87f3d", "#a2ae67", "#6c92b4", "#28b4a9"];

const ChartWrapper = styled(Grid.Column)`
  width: 150px;
  height: 150px;
  margin: 0px auto;
  ${media.phone`width: 100px; height: 100px;`}
`;

interface Props extends WithTranslation {
  course: Course;
}

const CourseDetailsEvaluation = ({ course, t }: Props) => {
  if (Array.isArray(course[SyllabusKey.EVAL])) {
    const evalChartData = (course[SyllabusKey.EVAL] as any[])
      .filter((e) => e[SyllabusKey.EVAL_PERCENT] > 0)
      .map((e) => ({
        title: t(
          `courseInfo.Details.Evaluation.${
            evalTypeMap[e[SyllabusKey.EVAL_TYPE]]
          }`
        ),
        value: e[SyllabusKey.EVAL_PERCENT],
        color: evalColorMap[e[SyllabusKey.EVAL_TYPE]],
      }));

    const evalsTable = (
      <Table className="dark:border-dark-text3">
        <Table.Body className="dark:bg-dark-text3 dark:text-dark-text2">
          {(course[SyllabusKey.EVAL] as any[]).map((e, i) => (
            <Table.Row key={i}>
              <Table.Cell>
                <h4 className="text-2xl">
                  <b>
                    <span
                      style={{
                        color: evalColorMap[e[SyllabusKey.EVAL_TYPE]],
                        fontSize: "1.5em",
                      }}
                    >
                      ●
                    </span>{" "}
                    {t(
                      `courseInfo.Details.Evaluation.${
                        evalTypeMap[e[SyllabusKey.EVAL_TYPE]]
                      }`
                    )}
                  </b>
                </h4>
                <p>{e[SyllabusKey.EVAL_CRITERIA]}</p>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
    const evalsChart = (
      <PieChart
        data={evalChartData}
        radius={PieChart.defaultProps.radius - 6}
        lineWidth={60}
        segmentsStyle={{ transition: "stroke .3s", cursor: "pointer" }}
        animate
        label={({ dataEntry }) => `${dataEntry.value}%`}
        labelPosition={100 - 60 / 2}
        labelStyle={{
          fill: "#fff",
          opacity: 0.75,
          pointerEvents: "none",
        }}
        viewBoxSize={[50, 100]}
        center={[30, 50]}
      />
    );

    return course[SyllabusKey.EVAL].length > 0 ? (
      <Grid>
        <Grid.Column mobile={6} tablet={7} computer={6}>
          <ChartWrapper>{evalsChart}</ChartWrapper>
        </Grid.Column>
        <Grid.Column mobile={10} tablet={9} computer={10}>
          {evalsTable}
        </Grid.Column>
      </Grid>
    ) : (
      <p style={{ textAlign: "center" }}>
        Click the blue arrow button above to check the details
      </p>
    );
  }

  return (
    <div>
      {(course[SyllabusKey.EVAL] as string)
        .split("\n")
        .map((e) => e && <p>{e}</p>)}
    </div>
  );
};

export default withTranslation("translation")(CourseDetailsEvaluation);
