import React from 'react';
import stickybits from 'stickybits';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import {
  headerHeight,
  searchBarHeight
} from '../../styled-components/variables';
import FilterGroup from './FilterGroup';
import { Wrapper } from '../../styled-components/Wrapper';

const FilterWrapper = Wrapper.extend`
  flex: none;
  overflow-y: auto;
  height: ${props =>
    props.isSideBar
      ? `calc(100vh - ${props.theme.headerHeight} - ${
          props.theme.searchBarHeight
        });`
      : '100vh;'};
`;

const FilterOverlay = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  padding: ${props => (props.isSideBar ? '0.5em 1em 1em 1em;' : '1.5em 1.2em;')}
  background-color: ${props =>
    props.isSideBar ? 'rgba(0, 0, 0, 0.2);' : 'unset;'};
`;

const FilterTitle = styled('span')`
  display: flex;
  align-items: center;
  font-size: ${props => (props.isSideBar ? '1em' : '1.3em')};
`;

const FilterGroupWrapper = styled('div')`
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

    this.setWrapperRef = element => {
      this.wrapper = element;
    };

    this.createStickyWrapper = () => {
      if (this.wrapper) {
        const offset = this.props.isSideBar
          ? parseInt(headerHeight) + parseInt(searchBarHeight)
          : 0;
        this.stickyWrapper = stickybits(this.wrapper, {
          stickyBitStickyOffset: offset
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
    const { filterGroups } = this.props;
    const semesterLegend = 'Semesters';
    const semesterInputName = 'semester';
    const semesterInputs = [
      { value: 'spring', label: 'Spring / Summer' },
      { value: 'fall', label: 'Fall / Winter' }
    ];
    const checkedSemesterInputs = semesterInputs.map(input => ({
      ...input,
      isChecked: filterGroups[semesterInputName].includes(input.value)
    }));

    const schoolLegend = 'Schools';
    const schoolInputName = 'school';
    const schoolInputs = [
      { value: 'SILS', label: 'SILS' },
      { value: 'PSE', label: 'PSE' },
      { value: 'FSE', label: 'FSE' },
      { value: 'CSE', label: 'CSE' },
      { value: 'ASE', label: 'ASE' },
      { value: 'CJL', label: 'CJL' }
    ];
    const checkedSchoolInputs = schoolInputs.map(input => ({
      ...input,
      isChecked: filterGroups[schoolInputName].includes(input.value)
    }));

    const langLegend = 'Languages';
    const langInputName = 'lang';
    const langInputs = [
      { value: 'EN', label: 'English' },
      { value: 'JP', label: 'Japanese' },
      { value: 'others', label: 'Others' }
    ];
    const checkedLangInputs = langInputs.map(input => ({
      ...input,
      isChecked: filterGroups[langInputName].includes(input.value)
    }));

    const specialLegend = 'Special';
    const specialInputName = 'special';
    const specialInputs = [
      { value: 'IPSE', label: 'IPSE' },
      {
        value: 'English-based Undergraduate Program',
        label: 'EN-based Undergrad Program'
      }
    ];
    const checkedSpecialInputs = specialInputs.map(input => ({
      ...input,
      isChecked: filterGroups[specialInputName].includes(input.value)
    }));

    const dayLegend = 'Day';
    const dayInputName = 'day';
    const dayInputs = [
      { value: '1', label: 'Mon.' },
      { value: '2', label: 'Tue.' },
      { value: '3', label: 'Wed.' },
      { value: '4', label: 'Thur.' },
      { value: '5', label: 'Fri.' },
      { value: '6', label: 'Sat.' }
    ];
    const checkedDayInputs = dayInputs.map(input => ({
      ...input,
      isChecked: filterGroups[dayInputName].includes(input.value)
    }));

    const periodLegend = 'Period';
    const periodInputName = 'period';
    const periodInputs = [
      { value: '1', label: '1' },
      { value: '2', label: '2' },
      { value: '3', label: '3' },
      { value: '4', label: '4' },
      { value: '5', label: '5' },
      { value: '6', label: '6' },
      { value: '7', label: '7' }
    ];
    const checkedPeriodInputs = periodInputs.map(input => ({
      ...input,
      isChecked: filterGroups[periodInputName].includes(input.value)
    }));

    const { isSideBar } = this.props;
    return (
      <FilterWrapper innerRef={this.setWrapperRef} isSideBar={isSideBar}>
        <FilterOverlay isSideBar={isSideBar}>
          <FilterTitle isSideBar={isSideBar}>
            Filter by&nbsp;
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
              legend={schoolLegend}
              inputName={schoolInputName}
              inputs={checkedSchoolInputs}
            />
            <FilterGroup
              handleToggleFilter={this.props.handleToggleFilter}
              legend={langLegend}
              inputName={langInputName}
              inputs={checkedLangInputs}
            />
            <FilterGroup
              handleToggleFilter={this.props.handleToggleFilter}
              legend={specialLegend}
              inputName={specialInputName}
              inputs={checkedSpecialInputs}
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

export default Filter;
