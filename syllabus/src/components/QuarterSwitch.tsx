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
  handleToggleQuarter: (quarter: string) => void;
}

const QuarterSwitch = ({
  semesterKey,
  selectedQuarter,
  handleToggleQuarter,
  t,
}: Props) => {
  return semesterKey === SEMESTERS.SPRING ? (
    <Button.Group>
      <Button color="pink" onClick={() => handleToggleQuarter(QUARTERS.SPRING)}>
        {selectedQuarter === QUARTERS.SPRING && <Icon name="check" />}
        {t("syllabus.semesterMap.Spring")}
      </Button>
      <Button.Or />
      <Button
        color="orange"
        onClick={() => handleToggleQuarter(QUARTERS.SUMMER)}
      >
        {selectedQuarter === QUARTERS.SUMMER && <Icon name="check" />}
        {t("syllabus.semesterMap.Summer")}
      </Button>
    </Button.Group>
  ) : (
    <Button.Group>
      <Button color="brown" onClick={() => handleToggleQuarter(QUARTERS.FALL)}>
        {selectedQuarter === QUARTERS.FALL && <Icon name="check" />}
        {t("syllabus.semesterMap.Fall")}
      </Button>
      <Button.Or />
      <Button color="blue" onClick={() => handleToggleQuarter(QUARTERS.WINTER)}>
        {selectedQuarter === QUARTERS.WINTER && <Icon name="check" />}
        {t("syllabus.semesterMap.Winter")}
      </Button>
    </Button.Group>
  );
};

export default withTranslation("translation")(QuarterSwitch);
