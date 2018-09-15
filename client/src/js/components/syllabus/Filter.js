import React from 'react';
import stickybits from 'stickybits';
import styled from 'styled-components';

import FilterGroup from './FilterGroup';
import { Wrapper } from '../../styled-components/Wrapper';

const FilterWrapper = Wrapper.extend`
  flex: none;
  overflow-y: auto;
  height: ${props => (props.isSideBar ? 'calc(100vh - 92px);' : '100vh;')};
`;

const FilterOverlay = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  padding: ${props => (props.isSideBar ? '0.5em 1em 1em 1em;' : '0.5em 0.8em')}
  background-color: ${props =>
    props.isSideBar ? 'rgba(0, 0, 0, 0.2);' : 'unset;'};
`;

const FilterTitle = styled('span')`
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
        const offset = this.props.isSideBar ? 92 : 0;
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

    const { isSideBar } = this.props;
    return (
      <FilterWrapper innerRef={this.setWrapperRef} isSideBar={isSideBar}>
        <FilterOverlay isSideBar={isSideBar}>
          <FilterTitle isSideBar={isSideBar}>Filter by</FilterTitle>
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
          </FilterGroupWrapper>
        </FilterOverlay>
      </FilterWrapper>
    );
  }
}

export default Filter;
