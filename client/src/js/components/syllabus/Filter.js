import React from 'react';
import stickybits from 'stickybits';
import styled from 'styled-components';

import { Wrapper } from '../../styled-components/Wrapper';

const FilterWrapper = Wrapper.extend`
  flex: none;
  padding: 0.5em 1em 1em 1em;
  overflow-y: auto;
  height: calc(100vh - 92px);
`;

const StyledFieldset = styled('fieldset')`
  margin: 0 0 .5em 0;
  padding: 0;
  border: none;
`

const StyledLegend = styled('legend')`
  font-size: 16px;
  font-weight: bold;
`

const StyledInput = styled('input')`
  margin-right: .6em;
`

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.wrapper = null;

    this.setWrapperRef = element => {
      this.wrapper = element;
    }

    this.createStickyWrapper = () => {
      if (this.wrapper) {
        this.stickyWrapper = stickybits(this.wrapper,
          {stickyBitStickyOffset: 92});
      }
    }

    this.cleanupStickyWrapper = () => {
      if (this.stickyWrapper) {
        this.stickyWrapper.cleanup();
      }
    }
  }

  componentDidMount() {
    this.createStickyWrapper();
  }

  componentWillUnmount() {
    this.cleanupStickyWrapper();
  }

  render() {
    return (
      <FilterWrapper innerRef={this.setWrapperRef}>
        <span>Filter by (under construction)</span>
        <div
          style={{
            backgroundColor: "#fff",
            flex: "1 0 auto",
            padding: "1em",
            fontSize: "14px"
          }}
        >
          {/* TODO Consider adding Semesters <= many values though */}
          <StyledFieldset>
            <StyledLegend>Schools</StyledLegend>
            <div>
              <StyledInput type="checkbox" id="CJL" name="school"
                     value="CJL" />
              <label htmlFor="CJL">CJL</label>
            </div>
            <div>
              <StyledInput type="checkbox" id="SILS" name="school"
                     value="SILS" />
              <label htmlFor="SILS">SILS</label>
            </div>
            <div>
              <StyledInput type="checkbox" id="PSE" name="school"
                     value="PSE" />
              <label htmlFor="PSE">PSE</label>
            </div>
            <div>
              <StyledInput type="checkbox" id="FSE" name="school"
                     value="FSE" />
              <label htmlFor="FSE">FSE</label>
            </div>
            <div>
              <StyledInput type="checkbox" id="CSE" name="school"
                     value="CSE" />
              <label htmlFor="CSE">CSE</label>
            </div>
            <div>
              <StyledInput type="checkbox" id="ASE" name="school"
                     value="ASE" />
              <label htmlFor="ASE">ASE</label>
            </div>
          </StyledFieldset>
          <StyledFieldset>
            <StyledLegend>Languages</StyledLegend>
            <div>
              <StyledInput type="checkbox" id="EN" name="lang"
                     value="EN" />
              <label htmlFor="English">English</label>
            </div>
            <div>
              <StyledInput type="checkbox" id="JP" name="lang"
                     value="JP" />
              <label htmlFor="Japanese">Japanese</label>
            </div>
            <div>
              <StyledInput type="checkbox" id="others" name="lang"
                     value="others" />
              <label htmlFor="Others">Others</label>
            </div>
          </StyledFieldset>
          <StyledFieldset>
            <StyledLegend>Special</StyledLegend>
            <div>
              <StyledInput type="checkbox" id="IPSE" name="special"
                     value="IPSE" />
              <label htmlFor="IPSE">IPSE</label>
            </div>
            <div>
              <StyledInput type="checkbox" id="ENUP" name="special"
                     value="ENUP" />
              <label htmlFor="EN-based Undergrad Program">EN-based Undergrad Program</label>
            </div>
          </StyledFieldset>
        </div>
      </FilterWrapper>
    )
  }
}

export default Filter;
