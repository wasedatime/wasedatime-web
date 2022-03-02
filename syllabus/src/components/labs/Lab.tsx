import React, { useState } from "react";
import styled from "styled-components";
import Review from "./Review";
import ReviewStars from "../courseInfo/ReviewStars";
import Table from "semantic-ui-react/dist/commonjs/collections/Table";
import SimpleBar from "simplebar-react";
import { media } from "@bit/wasedatime.core.ts.utils.responsive-utils";
import FSEcover from "../../assets/img/school-covers/fse.png";
import CSEcover from "../../assets/img/school-covers/cse.png";
import ASEcover from "../../assets/img/school-covers/ase.png";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useTranslation } from "react-i18next";

const schoolCoverMap = {
  "FSE": FSEcover,
  "CSE": CSEcover,
  "ASE": ASEcover,
};

const LabWrapper = styled.div`
  flex: 0 0 ${props => props.isOpen ? "100%" : "45%"};
  ${media.desktop`
    flex: 0 0 100%;
  `}
  margin-bottom: 1em;
  ${media.tablet`
    margin-bottom: 1rem;
  `}
`;

const LabTrigger = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
  padding: auto 0px;
  cursor: pointer;

  &:before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: ${props => props.school === "CSE" ? 0.2 : 0.3};
    background-image: url(${props => schoolCoverMap[props.school]});
    background-size: 100%;
    border-radius: 10px;
  }

  ${media.tablet`
    height: 70px;
  `}
`;

const LabName = styled.div`
  position: relative;
  height: 100%;
  color: #fff;
  text-shadow: 1px 1px 5px #000;
  font-size: 36px;
  padding: 10px;
  text-align: center;
  vertical-align: middle;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 36px;

  &:hover {
    font-size: 40px;
  }

  ${media.tablet`
    font-size: 28px;
    &:hover {
      font-size: 32px;
    }
  `}
`;

const ReviewsModalOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 409;
  background-color: #000;
  opacity: 0.2;
`;

const ReviewsModal = styled.div`
  position: absolute;
  top: 10vh;
  bottom: 10vh;
  left: 10vw;
  right: 10vw;
  z-index: 410;
  background-color: #fff;
  border-radius: 10px;
  padding: 1em;
  ${media.tablet`
    left: 5vw;
    right: 5vw;
    padding: 1rem;
  `}
`;

const ReviewsWrapper = styled(SimpleBar)`
  height: 100%;
  padding: 1em;
  .simplebar-scrollbar::before {
    background-color: #999;
  }
  .simplebar-placeholder {
    height: 0px !important;
  }
  overflow-y: auto;
  position: relative;
`;

const ReviewProfName = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  font-size: 2em;
  ${media.tablet`
    font-size: 1.5em;
  `}
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 5px;
  font-size: 36px;
  color: #aaa;
`;

const SectionHeader = styled.h5`
  border-left: 5px solid #b51e36;
  padding-left: 10px;
`;

const getRoundedAverage = (reviews, itemLabel) => {
  const filteredReviews = reviews.filter(review => review[itemLabel] && Number.isInteger(review[itemLabel]));
  const average = filteredReviews.reduce(function (sum, review) { return sum + review[itemLabel] }, 0) / filteredReviews.length;
  return Math.round(average * 2) / 2 || 0;
}

const Lab = ({ name, reviews, school }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const itemTable = (itemLabel) => (
    <Table unstackable>
      <Table.Header><Table.Row><Table.HeaderCell>{t("labs.review." + itemLabel)}</Table.HeaderCell></Table.Row></Table.Header>
      <Table.Body>{Array.from(new Set(reviews.map(r => r[itemLabel]))).map(item => item && <Table.Row><Table.Cell>{item}</Table.Cell></Table.Row>)}</Table.Body>
    </Table>
  );
  
  const topicSatisficationAverage = getRoundedAverage(reviews, "topicSatisfication");
  const guidanceAverage = getRoundedAverage(reviews, "guidance");
  const happinessAverage = getRoundedAverage(reviews, "happiness");

  return (
    <LabWrapper isOpen={open}>
      <LabTrigger onClick={() => setOpen(!open)} school={school}>
        <LabName>{name}</LabName>
      </LabTrigger>

      {open && <ReviewsModalOverlay onClick={() => setOpen(false)} />}

      {
        open && (
          <ReviewsModal>
            <ReviewsWrapper>
              <CloseButton onClick={() => setOpen(false)}>×</CloseButton>

              <ReviewProfName>{name}</ReviewProfName>

              <SectionHeader>{t("labs.review.Basics")}</SectionHeader>
              {itemTable("theme")}
              {itemTable("coreTime")}
              {itemTable("obligations")}

              <SectionHeader>{t("labs.review.Research Topic")}</SectionHeader>
              {topicSatisficationAverage > 0 && <Table unstackable><Table.Header><Table.Row><Table.HeaderCell>{t("labs.review.topicSatisfication")} <span style={{ float: "right" }}>{<ReviewStars scale={topicSatisficationAverage} />}</span></Table.HeaderCell></Table.Row></Table.Header></Table>}
              {itemTable("topicDecision")}
              {itemTable("yourResearch")}

              <SectionHeader>{t("labs.review.Experience / Observation")}</SectionHeader>

              {guidanceAverage > 0 && <Table unstackable>
                <Table.Header><Table.Row><Table.HeaderCell>
                  <div style={{ display: "flex", flexDirection: "row", marginBottom: "5px" }}>
                    <div style={{ flex: "50%" }}>← {t("labs.review.Independence")}</div>
                    <div style={{ flex: "50%", textAlign: "right" }}>{t("labs.review.Guidance")} →</div>
                  </div>
                  <Slider
                    min={1}
                    max={10}
                    step={1}
                    defaultValue={guidanceAverage * 2}
                    value={guidanceAverage * 2}
                  />
                </Table.HeaderCell></Table.Row></Table.Header>
              </Table>}

              {happinessAverage > 0 && <Table unstackable><Table.Header><Table.Row><Table.HeaderCell>{t("labs.review.happiness")} <span style={{ float: "right" }}>{<ReviewStars scale={happinessAverage} />}</span></Table.HeaderCell></Table.Row></Table.Header></Table>}
              
              {itemTable("atmosphere")}
              {itemTable("profCharacter")}
              {itemTable("knowBeforeEnter")}

              <SectionHeader>{t("labs.review.Members")}</SectionHeader>
              {itemTable("totalStudents")}
              {itemTable("internationalStudents")}

              <SectionHeader>{t("labs.review.Language")}</SectionHeader>
              {itemTable("jaRequired")}
              {itemTable("enRequired")}
            </ReviewsWrapper>
          </ReviewsModal>
        )
      }
      <Review />
    </LabWrapper>
  );
}

export default Lab;