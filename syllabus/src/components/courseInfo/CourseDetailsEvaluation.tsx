import React from "react";
import MediaQuery from "react-responsive";
import { WithTranslation, withTranslation } from "react-i18next";
import { SyllabusKey } from "../../constants/syllabus-data";
import Grid from "semantic-ui-react/dist/commonjs/collections/Grid";
import Table from "semantic-ui-react/dist/commonjs/collections/Table";
import Course from "../../types/course";
import { PieChart } from "react-minimal-pie-chart";
import { sizes } from "@bit/wasedatime.core.ts.utils.responsive-utils";

const evalTypeMap = ["Exam", "Papers", "Class Participation", "Others"];
const evalColorMap = ["#c2402c", "#c87f3d", "#a2ae67", "#6c92b4", "#28b4a9"];

interface Props extends WithTranslation {
  course: Course;
}

const CourseDetailsEvaluation = ({ course, t }: Props) => {
  const evalChartData = course[SyllabusKey.EVAL]
    .filter((e) => e[SyllabusKey.EVAL_PERCENT] > 0)
    .map((e) => ({
      title: t(
        `courseInfo.Details.Evaluation.${evalTypeMap[e[SyllabusKey.EVAL_TYPE]]}`
      ),
      value: e[SyllabusKey.EVAL_PERCENT],
      color: evalColorMap[e[SyllabusKey.EVAL_TYPE]],
    }));

  const evalsTable = (
    <Table>
      <Table.Body>
        {course[SyllabusKey.EVAL].map((e, i) => (
          <Table.Row key={i}>
            <Table.Cell>
              <p>
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
              </p>
            </Table.Cell>
            <Table.Cell>
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
      label={({ dataEntry }) => dataEntry.value + "%"}
      labelPosition={100 - 60 / 2}
      labelStyle={{
        fill: "#fff",
        opacity: 0.75,
        pointerEvents: "none",
      }}
      viewBoxSize={[150, 100]}
      center={[75, 50]}
    />
  );

  return course[SyllabusKey.EVAL].length > 0 ? (
    <MediaQuery maxWidth={sizes.tablet}>
      {(matches) =>
        matches ? (
          <Grid columns={1}>
            <Grid.Column>{evalsChart}</Grid.Column>
            <Grid.Column>{evalsTable}</Grid.Column>
          </Grid>
        ) : (
          <Grid columns={2}>
            <Grid.Column>{evalsChart}</Grid.Column>
            <Grid.Column>{evalsTable}</Grid.Column>
          </Grid>
        )
      }
    </MediaQuery>
  ) : (
    <p style={{ textAlign: "center" }}>
      Click the blue arrow button above to check the details
    </p>
  );
};

export default withTranslation("translation")(CourseDetailsEvaluation);
