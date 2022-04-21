import React from "react";

import { media } from "@bit/wasedatime.core.ts.utils.responsive-utils";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import majorBg from "@app/assets/img/major_bg.jpg";
import { Badge } from "@app/components/styles/Badge";
import majorsBySchool from "@app/constants/majors-by-school";
import getSchoolIconPath from "@app/utils/get-school-icon-path";

type SchoolButtonProps = {
  active: boolean;
};

type ReviewsCountProps = {
  school: string;
};

const Menu = styled.div`
  ${media.tablet`
    padding: 2em;
    padding-bottom: 90px;
    height: calc(100vh - 60px);
    overflow-y: auto;
  `}
`;

const SchoolMenu = styled.div`
  display: flex;
  flex-direction: row;
`;

const SchoolItem = styled.div`
  flex: auto;
  padding: 0px auto;
  text-align: center;
`;

const SchoolButton = styled.button<SchoolButtonProps>`
  margin: 0px auto;
  ${(props) => !props.active && "opacity: 0.4;"}
`;

const SchoolImg = styled.img`
  &:hover {
    opacity: 0.5;
  }
`;

const MajorWrapper = styled.div`
  width: 100%;
  height: 75px;
  position: relative;
  margin: 20px auto;
  padding: auto 0px;
  cursor: pointer;

  &:before {
    content: " ";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.2;
    background-image: url(${new URL(majorBg, import.meta.url).href});
    background-size: 15em;
  }
`;

const MajorText = styled.div`
  position: relative;
  height: 100%;
  text-shadow: 1px 1px 5px #000;
  font-size: 20px;
  padding: 10px;
  text-align: center;
  vertical-align: middle;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 24px;

  &:hover {
    font-size: 22px;
  }
`;

const ReviewsCount = styled(Badge)<ReviewsCountProps>`
  position: absolute;
  top: -10px;
  left: -10px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => {
    return props.school === "FSE"
      ? "rgba(190,106,20,0.5)"
      : props.school === "CSE"
      ? "rgba(105,140,45,0.5)"
      : "rgba(50,98,149,0.5)";
  }};
`;

const schools = ["FSE", "CSE", "ASE"];

const SchoolMajorSelector = ({
  reviews,
  selectedSchool,
  setSchool,
  setMajor,
  closeModal,
}) => {
  const { t } = useTranslation();
  const switchSchool = (schoolIndex: number) => {
    setSchool(schools[schoolIndex]);
    setMajor("");
  };
  const switchMajorAndCloseModal = (major: string) => {
    setMajor(major);
    closeModal();
  };

  return (
    <Menu>
      <h5 className="mb-4 text-light-text2 dark:text-dark-text2">
        <FontAwesomeIcon icon={faFilter} size="1x" />
        &nbsp;
        <b>{t("syllabus.Filter by")}</b>
      </h5>
      <SchoolMenu>
        {["FSE", "CSE", "ASE"].map((school, i) => (
          <SchoolItem key={`school_button_${i}`}>
            <SchoolButton
              onClick={() => switchSchool(i)}
              active={selectedSchool === schools[i]}
            >
              <SchoolImg
                src={getSchoolIconPath(school, "EN")}
                width="70"
                height="70"
              />
            </SchoolButton>
          </SchoolItem>
        ))}
      </SchoolMenu>

      {majorsBySchool[selectedSchool]?.map((major, i) => (
        <MajorWrapper
          onClick={() => switchMajorAndCloseModal(major)}
          key={`major_button_${i}`}
        >
          <MajorText className="text-white dark:text-dark-text2">
            {t(`labs.major.${major}`)}
          </MajorText>
          <ReviewsCount school={selectedSchool}>
            {reviews[selectedSchool][major].length}
          </ReviewsCount>
        </MajorWrapper>
      ))}
    </Menu>
  );
};

export default SchoolMajorSelector;
