import React from 'react';
import stickybits from 'stickybits';
import styled from 'styled-components';

import FilterGroup from './FilterGroup';
import { Wrapper } from '../../styled-components/Wrapper';
import { Overlay } from '../../styled-components/Overlay';

const FilterWrapper = Wrapper.extend`
  flex: none;
  overflow-y: auto;
  height: calc(100vh - 92px);
`;

const FilterOverlay = Overlay.extend`
  padding: 0.5em 1em 1em 1em;
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
        this.stickyWrapper = stickybits(this.wrapper, {
          stickyBitStickyOffset: 92
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
    // TODO Consider adding detailed options like Fall Quarter?
    const semesterLegend = 'Semesters';
    const semesterInputName = 'semester';
    const semesterInputs = [
      { value: 'spring', label: 'Spring / Summer' },
      { value: 'fall', label: 'Fall / Winter' },
      { value: 'full', label: 'Full Year' }
    ];
    const schoolLegend = 'Schools';
    const schoolInputName = 'school';
    const schoolInputs = [
      { value: 'sils', label: 'SILS' },
      { value: 'pse', label: 'PSE' },
      { value: 'fse', label: 'FSE' },
      { value: 'cse', label: 'CSE' },
      { value: 'ase', label: 'ASE' },
      { value: 'cjl', label: 'CJL' }
    ];
    const langLegend = 'Languages';
    const langInputName = 'lang';
    const langInputs = [
      { value: 'en', label: 'English' },
      { value: 'jp', label: 'Japanese' },
      { value: 'others', label: 'Others' }
    ];
    const specialLegend = 'Special';
    const specialInputName = 'special';
    const specialInputs = [
      { value: 'IPSE', label: 'IPSE' },
      { value: 'ENUP', label: 'EN-based Undergrad Program' }
    ];
    return (
      <FilterWrapper innerRef={this.setWrapperRef}>
        <FilterOverlay>
          <span>Filter by (under construction)</span>
          <FilterGroupWrapper>
            <FilterGroup
              legend={semesterLegend}
              inputName={semesterInputName}
              inputs={semesterInputs}
            />
            <FilterGroup
              legend={schoolLegend}
              inputName={schoolInputName}
              inputs={schoolInputs}
            />
            <FilterGroup
              legend={langLegend}
              inputName={langInputName}
              inputs={langInputs}
            />
            <FilterGroup
              legend={specialLegend}
              inputName={specialInputName}
              inputs={specialInputs}
            />
          </FilterGroupWrapper>
        </FilterOverlay>
      </FilterWrapper>
    );
  }
}

export default Filter;
