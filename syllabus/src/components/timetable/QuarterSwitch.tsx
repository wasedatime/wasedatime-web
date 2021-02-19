import React from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import {
  Semester,
  Quarter,
} from "@bit/wasedatime.syllabus.ts.constants.timetable-terms";
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";
import Button from "semantic-ui-react/dist/commonjs/elements/Button";

interface Props extends WithTranslation {
  semesterKey: string;
  selectedQuarter: string;
  toggleQuarter: (quarter: string) => void;
}

const QuarterSwitch = ({
  semesterKey,
  selectedQuarter,
  toggleQuarter,
  t,
}: Props) => {
  return semesterKey === Semester.SPRING ? (
    <Button.Group>
      <Button
        inverted
        color="pink"
        onClick={() => toggleQuarter(Quarter.SPRING)}
        style={{ padding: "0px 1em", height: "24px" }}
      >
        {selectedQuarter === Quarter.SPRING && <Icon name="check" />}
        {t("syllabus.semesterMap.Spring")}
      </Button>
      <Button.Or style={{ height: "24px" }} />
      <Button
        inverted
        color="orange"
        onClick={() => toggleQuarter(Quarter.SUMMER)}
        style={{ padding: "0px 1em", height: "24px" }}
      >
        {selectedQuarter === Quarter.SUMMER && <Icon name="check" />}
        {t("syllabus.semesterMap.Summer")}
      </Button>
    </Button.Group>
  ) : (
    <Button.Group>
      <Button
        inverted
        color="brown"
        onClick={() => toggleQuarter(Quarter.FALL)}
        style={{ padding: "0px 1em", height: "24px" }}
      >
        {selectedQuarter === Quarter.FALL && <Icon name="check" />}
        {t("syllabus.semesterMap.Fall")}
      </Button>
      <Button.Or style={{ height: "24px" }} />
      <Button
        inverted
        color="blue"
        onClick={() => toggleQuarter(Quarter.WINTER)}
        style={{ padding: "0px 1em", height: "24px" }}
      >
        {selectedQuarter === Quarter.WINTER && <Icon name="check" />}
        {t("syllabus.semesterMap.Winter")}
      </Button>
    </Button.Group>
  );
};

export default withTranslation("translation")(QuarterSwitch);
