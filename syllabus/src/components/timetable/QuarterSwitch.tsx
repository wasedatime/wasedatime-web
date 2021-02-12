import React from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import {
  SEMESTERS,
  QUARTERS,
} from "@bit/wasedatime.syllabus.ts.constants.semesters";
import { Button, Icon } from "semantic-ui-react";

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
  return semesterKey === SEMESTERS.SPRING ? (
    <Button.Group>
      <Button
        inverted
        color="pink"
        onClick={() => toggleQuarter(QUARTERS.SPRING)}
      >
        {selectedQuarter === QUARTERS.SPRING && <Icon name="check" />}
        {t("syllabus.semesterMap.Spring")}
      </Button>
      <Button.Or />
      <Button
        inverted
        color="orange"
        onClick={() => toggleQuarter(QUARTERS.SUMMER)}
      >
        {selectedQuarter === QUARTERS.SUMMER && <Icon name="check" />}
        {t("syllabus.semesterMap.Summer")}
      </Button>
    </Button.Group>
  ) : (
    <Button.Group>
      <Button
        inverted
        color="brown"
        onClick={() => toggleQuarter(QUARTERS.FALL)}
      >
        {selectedQuarter === QUARTERS.FALL && <Icon name="check" />}
        {t("syllabus.semesterMap.Fall")}
      </Button>
      <Button.Or />
      <Button
        inverted
        color="blue"
        onClick={() => toggleQuarter(QUARTERS.WINTER)}
      >
        {selectedQuarter === QUARTERS.WINTER && <Icon name="check" />}
        {t("syllabus.semesterMap.Winter")}
      </Button>
    </Button.Group>
  );
};

export default withTranslation("translation")(QuarterSwitch);
