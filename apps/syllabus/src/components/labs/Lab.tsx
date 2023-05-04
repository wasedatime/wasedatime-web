import React, { useContext, useState } from "react"

import { Colors, media } from "wasedatime-ui"
import Slider from "rc-slider/lib/Slider"
import { useTranslation } from "react-i18next"
import Table from "semantic-ui-react/dist/commonjs/collections/Table"
import SimpleBar from "simplebar-react"
import styled from "styled-components"

import "rc-slider/assets/index.css"

import ReviewStars from "@app/components/courseInfo/ReviewStars"
import Review from "@app/components/labs/Review"
import { ThemeContext } from "@app/utils/theme-context"

import FSEcover from "/img/school-covers/fse.png"
import CSEcover from "/img/school-covers/cse.png"
import ASEcover from "/img/school-covers/ase.png"

const bgImgUrl = (schoolCoverPath: string): string => {
  const bgImg = new URL(schoolCoverPath, import.meta.url)
  return bgImg.href
}

type LabWrapperProps = {
  isOpen: boolean
}

type LabTrigger = {
  school: string
}

type ThemedComponentProps = {
  $isDark: boolean
}

const schoolCoverMap: { [name: string]: string } = {
  FSE: FSEcover,
  CSE: CSEcover,
  ASE: ASEcover,
}

const LabWrapper = styled.div<LabWrapperProps>`
  flex: 0 0 ${(props) => (props.isOpen ? "100%" : "45%")};
  ${media.desktop`
    flex: 0 0 100%;
  `}
  margin-bottom: 1em;
  ${media.tablet`
    margin-bottom: 1rem;
  `}
`

const LabTrigger = styled.div<LabTrigger>`
  width: 100%;
  height: 100px;
  position: relative;
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
    opacity: ${(props) => (props.school === "CSE" ? 0.2 : 0.3)};
    background-image: url(${(props) => bgImgUrl(schoolCoverMap[props.school])});
    background-size: 100%;
    border-radius: 10px;
  }

  ${media.tablet`
    height: 70px;
  `}
`

const LabName = styled.div`
  position: relative;
  height: 100%;
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
`

const ReviewsModalOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 409;
  background-color: #000;
  opacity: 0.3;
`

const ReviewsModal = styled.div`
  position: absolute;
  top: 10vh;
  bottom: 10vh;
  left: 10vw;
  right: 10vw;
  z-index: 410;
  border-radius: 10px;
  padding: 1em;

  ${media.tablet`
    left: 5vw;
    right: 5vw;
    padding: 1rem;
  `}
`

const LabHeader = styled.div`
  height: 15%;
  padding: 1em;
`

const ReviewsWrapper = styled(SimpleBar)`
  height: 85%;
  padding: 1em;
  .simplebar-scrollbar::before {
    background-color: #999;
  }
  .simplebar-placeholder {
    height: 0px !important;
  }
  overflow-y: auto;
  position: relative;

  ::-webkit-scrollbar {
    width: 5px;
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    width: 5px;
    border-radius: 10px;
    background: #999;
  }
`

const ReviewProfName = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  font-size: 2em;
  ${media.tablet`
    font-size: 1.5em;
  `}
`

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 5px;
  font-size: 36px;
  color: #aaa;
`

const SectionHeader = styled.h5`
  border-left: 5px solid #b51e36;
  padding-left: 10px;
`

const StyledTable = styled(Table)<ThemedComponentProps>`
  ${(props) =>
    props.$isDark &&
    `
    border-color: ${colors.dark.text3} !important;
  `}
`

const StyledTableHeaderCell = styled(Table.HeaderCell)<ThemedComponentProps>`
  ${(props) =>
    props.$isDark &&
    `
    background-color: ${colors.dark.bgSide} !important;
    color: ${colors.dark.text2} !important;
  `}
`

const StyledTableCell = styled(Table.Cell)<ThemedComponentProps>`
  ${(props) =>
    props.$isDark &&
    `
    background-color: ${colors.dark.bgMain} !important;
    color: ${colors.dark.text2} !important;
  `}
`

const getRoundedAverage = (reviews, itemLabel) => {
  const filteredReviews = reviews.filter(
    (review) => review[itemLabel] && Number.isInteger(review[itemLabel])
  )
  const average =
    filteredReviews.reduce((sum, review) => sum + review[itemLabel], 0) /
    filteredReviews.length

  return Math.round(average * 2) / 2 || 0
}

const Lab = ({ name, reviews, school }) => {
  const { theme } = useContext(ThemeContext)
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  const itemTable = (itemLabel) => (
    <StyledTable unstackable $isDark={theme === "dark"}>
      <Table.Header>
        <Table.Row>
          <StyledTableHeaderCell $isDark={theme === "dark"}>
            {t(`labs.review.${itemLabel}`)}
          </StyledTableHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {Array.from(new Set(reviews.map((r) => r[itemLabel]))).map((item, i) =>
          item ? (
            <Table.Row key={`lab_review_item_${i}`}>
              <StyledTableCell $isDark={theme === "dark"}>
                {item}
              </StyledTableCell>
            </Table.Row>
          ) : (
            <tr style={{ display: "none" }} key={`lab_review_item_${i}`}></tr>
          )
        )}
      </Table.Body>
    </StyledTable>
  )

  const topicSatisficationAverage = getRoundedAverage(
    reviews,
    "topicSatisfication"
  )
  const guidanceAverage = getRoundedAverage(reviews, "guidance")
  const happinessAverage = getRoundedAverage(reviews, "happiness")

  return (
    <LabWrapper isOpen={open}>
      <LabTrigger onClick={() => setOpen(!open)} school={school}>
        <LabName className="text-white dark:text-dark-text1">{name}</LabName>
      </LabTrigger>

      {open && <ReviewsModalOverlay onClick={() => setOpen(false)} />}

      {open && (
        <ReviewsModal className="bg-light-bgMain text-light-text2 dark:bg-dark-bgMain dark:text-dark-text2">
          <LabHeader>
            <CloseButton onClick={() => setOpen(false)}>×</CloseButton>
            <ReviewProfName>{name}</ReviewProfName>
          </LabHeader>

          <ReviewsWrapper>
            <SectionHeader>{t("labs.review.Basics")}</SectionHeader>
            {itemTable("theme")}
            {itemTable("coreTime")}
            {itemTable("obligations")}

            <SectionHeader>{t("labs.review.Research Topic")}</SectionHeader>
            {topicSatisficationAverage > 0 && (
              <StyledTable unstackable $isDark={theme === "dark"}>
                <Table.Header>
                  <Table.Row>
                    <StyledTableHeaderCell $isDark={theme === "dark"}>
                      {t("labs.review.topicSatisfication")}{" "}
                      <span style={{ float: "right" }}>
                        <ReviewStars scale={topicSatisficationAverage} />
                      </span>
                    </StyledTableHeaderCell>
                  </Table.Row>
                </Table.Header>
              </StyledTable>
            )}
            {itemTable("topicDecision")}
            {itemTable("yourResearch")}

            <SectionHeader>
              {t("labs.review.Experience / Observation")}
            </SectionHeader>

            {guidanceAverage > 0 && (
              <StyledTable unstackable $isDark={theme === "dark"}>
                <Table.Header>
                  <Table.Row>
                    <StyledTableHeaderCell $isDark={theme === "dark"}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          marginBottom: "5px",
                        }}
                      >
                        <div style={{ flex: "50%" }}>
                          ← {t("labs.review.Independence")}
                        </div>
                        <div style={{ flex: "50%", textAlign: "right" }}>
                          {t("labs.review.Guidance")} →
                        </div>
                      </div>
                      <Slider
                        min={1}
                        max={10}
                        step={1}
                        defaultValue={guidanceAverage * 2}
                        value={guidanceAverage * 2}
                      />
                    </StyledTableHeaderCell>
                  </Table.Row>
                </Table.Header>
              </StyledTable>
            )}

            {happinessAverage > 0 && (
              <StyledTable unstackable $isDark={theme === "dark"}>
                <Table.Header>
                  <Table.Row>
                    <StyledTableHeaderCell $isDark={theme === "dark"}>
                      {t("labs.review.happiness")}{" "}
                      <span style={{ float: "right" }}>
                        <ReviewStars scale={happinessAverage} />
                      </span>
                    </StyledTableHeaderCell>
                  </Table.Row>
                </Table.Header>
              </StyledTable>
            )}

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
      )}
      <Review />
    </LabWrapper>
  )
}

export default Lab
