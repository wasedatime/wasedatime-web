import React, { useState } from "react";
import styled from "styled-components";
import Review from "./Review";
import Table from "semantic-ui-react/dist/commonjs/collections/Table";

// Data format: check Tomoya Shibayama's first review

const LabWrapper = styled.div`
  background-color: #eee;
  border-radius: 10px;
  margin-bottom: 1em;
`;

const LabTrigger = styled.div`
  padding: 1em;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #ccc;
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

const Lab = ({ name, reviews }) => {
  const [open, setOpen] = useState(false);

  const itemTable = (itemLabel) => (
    <Table unstackable>
      <Table.Header><Table.Row><Table.HeaderCell>{itemLabelNameMap[itemLabel]}</Table.HeaderCell></Table.Row></Table.Header>
      <Table.Body>{reviews.map(r => <Table.Row><Table.Cell>{r[itemLabel]}</Table.Cell></Table.Row>)}</Table.Body>
    </Table>
  );
  
  return (
    <LabWrapper>
      <LabTrigger onClick={() => setOpen(!open)}>
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
            {itemTable("topicDecision")}
            {itemTable("yourResearch")}
            {itemTable("topicSatisfication")}

            <SectionHeader>Experience / Observation</SectionHeader>
            {itemTable("guidance")}
            {itemTable("happiness")}
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
      <Review />
    </LabWrapper>
  );
}

export default Lab;