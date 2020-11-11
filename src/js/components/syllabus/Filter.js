import React from "react";
import stickybits from "stickybits";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { withNamespaces } from "react-i18next";

import {
  headerHeight,
  searchBarHeight,
} from "../../styled-components/variables";
import FilterGroup from "./FilterGroup";
import { Wrapper } from "../../styled-components/Wrapper";
import { Overlay } from "../../styled-components/Overlay";

const FilterWrapper = styled(Wrapper)`
  flex: none;
  overflow-y: auto;
  height: ${(props) =>
    props.isSideBar
      ? `calc(100vh - ${props.theme.headerHeight} - ${props.theme.searchBarHeight});`
      : "auto"};
`;

const FilterOverlay = styled(Overlay)`
  padding: ${(props) =>
    props.isSideBar ? "0.5em 1em 1em 1em;" : "1.5em 1.2em;"}
  background-color: ${(props) => (props.isSideBar ? "#ccc;" : "#fff;")};
`;

const FilterTitle = styled("span")`
  display: flex;
  align-items: center;
  font-size: ${(props) => (props.isSideBar ? "1em" : "1.3em")};
`;

const FilterGroupWrapper = styled("div")`
  background-color: #fff;
  flex: 1 0 auto;
  padding: 1em;
  margin-top: 0.2em;
  font-size: 14px;
`;

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.wrapper = null;

    this.setWrapperRef = (element) => {
      this.wrapper = element;
    };

    this.createStickyWrapper = () => {
      if (this.wrapper) {
        const offset = this.props.isSideBar
          ? parseInt(headerHeight, 10) + parseInt(searchBarHeight, 10)
          : 0;
        this.stickyWrapper = stickybits(this.wrapper, {
          stickyBitStickyOffset: offset,
        });
      }
    };

    this.cleanupStickyWrapper = () => {
      if (this.stickyWrapper) {
        this.stickyWrapper.cleanup();
      }
    };
  }

  componentDidMount() {
    this.createStickyWrapper();
  }

  componentWillUnmount() {
    this.cleanupStickyWrapper();
  }

  render() {
    const { filterGroups, t } = this.props;
    const semesterLegend = t("syllabus.Semesters");
    const semesterInputName = "semester";
    const semesterInputs = [
      { value: "spring", label: t("syllabus.Spring / Summer") },
      { value: "fall", label: t("syllabus.Fall / Winter") },
    ];
    const checkedSemesterInputs = semesterInputs.map((input) => ({
      ...input,
      isChecked: filterGroups[semesterInputName].includes(input.value),
    }));

    const langLegend = t("syllabus.Languages");
    const langInputName = "lang";
    const langInputs = [
      { value: "0", label: t("syllabus.languages.0") },
      { value: "1", label: t("syllabus.languages.1") },
      { value: "2", label: t("syllabus.languages.2") },
      { value: "3", label: t("syllabus.languages.3") },
      { value: "4", label: t("syllabus.languages.4") },
      { value: "5", label: t("syllabus.languages.5") },
      { value: "6", label: t("syllabus.languages.6") },
      { value: "7", label: t("syllabus.languages.7") },
      { value: "8", label: t("syllabus.languages.8") },
      { value: "9", label: t("syllabus.languages.9") },
    ];
    const checkedLangInputs = langInputs.map((input) => ({
      ...input,
      isChecked: filterGroups[langInputName].includes(input.value),
    }));

    const dayLegend = t("syllabus.day");
    const dayInputName = "day";
    const dayInputs = [
      { value: "1", label: t("common.mon") },
      { value: "2", label: t("common.tue") },
      { value: "3", label: t("common.wed") },
      { value: "4", label: t("common.thu") },
      { value: "5", label: t("common.fri") },
      { value: "6", label: t("common.sat") },
    ];
    const checkedDayInputs = dayInputs.map((input) => ({
      ...input,
      isChecked: filterGroups[dayInputName].includes(input.value),
    }));

    const periodLegend = t("syllabus.period");
    const periodInputName = "period";
    const periodInputs = [
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
      { value: "4", label: "4" },
      { value: "5", label: "5" },
      { value: "6", label: "6" },
      { value: "7", label: "7" },
    ];
    const checkedPeriodInputs = periodInputs.map((input) => ({
      ...input,
      isChecked: filterGroups[periodInputName].includes(input.value),
    }));

    const { isSideBar } = this.props;
    return (
      <FilterWrapper innerRef={this.setWrapperRef} isSideBar={isSideBar}>
        <FilterOverlay isSideBar={isSideBar}>
          <FilterTitle isSideBar={isSideBar}>
            {t("syllabus.Filter by")}&nbsp;
            <FontAwesomeIcon icon={faFilter} size="1x" />
          </FilterTitle>
          <FilterGroupWrapper>
            <FilterGroup
              handleToggleFilter={this.props.handleToggleFilter}
              legend={semesterLegend}
              inputName={semesterInputName}
              inputs={checkedSemesterInputs}
            />
            <FilterGroup
              handleToggleFilter={this.props.handleToggleFilter}
              legend={langLegend}
              inputName={langInputName}
              inputs={checkedLangInputs}
            />
            <FilterGroup
              handleToggleFilter={this.props.handleToggleFilter}
              legend={dayLegend}
              inputName={dayInputName}
              inputs={checkedDayInputs}
            />
            <FilterGroup
              handleToggleFilter={this.props.handleToggleFilter}
              legend={periodLegend}
              inputName={periodInputName}
              inputs={checkedPeriodInputs}
            />
          </FilterGroupWrapper>
        </FilterOverlay>
      </FilterWrapper>
    );
  }
}

export default withNamespaces("translation")(Filter);
