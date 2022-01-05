import React, { useState } from "react";
import styled from "styled-components";
import Review from "./Review";
import Table from "semantic-ui-react/dist/commonjs/collections/Table";

// Data format: check Tomoya Shibayama's first review

const LabWrapper = styled.div`
  background-color: ${props => {
    return props.school === "FSE"
      ? "rgba(190,106,20, 0.8)"
      : props.school === "CSE"
        ? "rgba(105,140,45, 0.8)"
        : "rgba(50,98,149, 0.8)";
  }};
  border-radius: 10px;
  margin-bottom: 1em;
`;

const LabTrigger = styled.div`
  padding: 1em;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    border: 3px solid ${props => {
      return props.school === "FSE"
      ? "rgba(190,106,20, 0.8)"
      : props.school === "CSE"
        ? "rgba(105,140,45, 0.8)"
        : "rgba(50,98,149, 0.8)";
    }};
    padding: calc(1em - 3px);
    color: ${props => {
      return props.school === "FSE"
        ? "rgba(190,106,20, 0.8)"
        : props.school === "CSE"
          ? "rgba(105,140,45, 0.8)"
          : "rgba(50,98,149, 0.8)";
    }};
    background-color: #fff;
  }
`;

const LabName = styled.h4`
  text-align: center;
`;

const ReviewsWrapper = styled.div`
  background-color: #fff;
  padding: 1em;
  margin: 1em;
  margin-top: 0px;
  border-radius: 10px;
`;

const SectionHeader = styled.h5`
  border-left: 5px solid #b51e36;
  padding-left: 10px;
`;

const itemLabelNameMap = {
  "theme": "Theme",
  "coreTime": "Core Time",
  "obligations": "Obligations",

  "topicSatisfication": "Satisfaction with your research topic",
  "topicDecision": "How did you decide your research topic?",
  "yourResearch": "Your research topic",

  "guidance": "More independence or more guidance?",
  "happiness": "How happy you are in the lab?",
  "atmosphere": "Atmosphere in the lab",
  "profCharacter": "Professor/mentor's character",
  
  "totalStudents": "Number of all students",
  "internationalStudents": "Number of international students)",
  
  "jaRequired": "Japanese required?",
  "enRequired": "English required?",

  "knowBeforeEnter": "Anything you wish you had known before entering"
}

const getRoundedAverage = (reviews, itemLabel) => {
  const filteredReviews = reviews.filter(review => review[itemLabel]);
  const average = filteredReviews.reduce(function (sum, review) { return sum + review[itemLabel] }, 0) / filteredReviews.length;
  return Math.round(average * 2) / 2;
}

const Lab = ({ name, reviews, school }) => {
  const [open, setOpen] = useState(false);

  const itemTable = (itemLabel) => (
    <Table unstackable>
      <Table.Header><Table.Row><Table.HeaderCell>{itemLabelNameMap[itemLabel]}</Table.HeaderCell></Table.Row></Table.Header>
      <Table.Body>{reviews.map(r => r[itemLabel] && <Table.Row><Table.Cell>{r[itemLabel]}</Table.Cell></Table.Row>)}</Table.Body>
    </Table>
  );
  
  return (
    <LabWrapper school={school}>
      <LabTrigger school={school} onClick={() => setOpen(!open)}>
        <LabName>{name}</LabName>
      </LabTrigger>

      {
        open && (
          <ReviewsWrapper>
            <SectionHeader>Basics</SectionHeader>
            {itemTable("theme")}
            {itemTable("coreTime")}
            {itemTable("obligations")}

            <SectionHeader>Research Topic</SectionHeader>
            <Table unstackable>
              <Table.Header><Table.Row><Table.HeaderCell>{itemLabelNameMap["topicSatisfication"]} <span style={{ float: "right" }}>{getRoundedAverage(reviews, "topicSatisfication")}</span></Table.HeaderCell></Table.Row></Table.Header>
            </Table>
            {itemTable("topicDecision")}
            {itemTable("yourResearch")}

            <SectionHeader>Experience / Observation</SectionHeader>
            <Table unstackable>
              <Table.Header><Table.Row><Table.HeaderCell>{itemLabelNameMap["guidance"]} <span style={{ float: "right" }}>{getRoundedAverage(reviews, "guidance")}</span></Table.HeaderCell></Table.Row></Table.Header>
            </Table>
            <Table unstackable>
              <Table.Header><Table.Row><Table.HeaderCell>{itemLabelNameMap["happiness"]} <span style={{ float: "right" }}>{getRoundedAverage(reviews, "happiness")}</span></Table.HeaderCell></Table.Row></Table.Header>
            </Table>
            {itemTable("atmosphere")}
            {itemTable("profCharacter")}
            {itemTable("knowBeforeEnter")}

            <SectionHeader>Others</SectionHeader>
            {itemTable("totalStudents")}
            {itemTable("internationalStudents")}

            <SectionHeader>Language</SectionHeader>
            {itemTable("jaRequired")}
            {itemTable("enRequired")}
          </ReviewsWrapper>
        )
      }
      {open && <br />}
      <Review />
    </LabWrapper>
  );
}

export default Lab;