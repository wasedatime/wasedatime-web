import React from 'react';
import styled from 'styled-components';
import stickybits from 'stickybits';

import { headerHeight } from '../../styled-components/variables';
import { RowWrapper } from '../../styled-components/Wrapper';

const ExtendedWrapper = styled(RowWrapper)`
  flex: none;
  align-items: center;
  justify-content: space-around;
  height: ${props => props.theme.searchLanguageTabsHeight};
  width: 100%;
  background-color: ${props => props.theme.grey7};
  z-index: 1030;
`;

const LanguageButton = styled('button')`
  width: 100%;
  height: 100%;
  background-color: ${props =>
    props.isSelected ? props.theme.grey4 : 'unset'};
  border: none;
  padding: 0;
  color: ${props => props.theme.white};
  &:hover {
    background-color: ${props => props.theme.grey4};
  }
  &:focus {
    outline: 0;
  }
`;

class searchLanguageTabs extends React.Component {
  constructor() {
    super();
    this.wrapper = null;
    this.setWrapperRef = element => {
      this.wrapper = element;
    };

    this.createStickyWrapper = () => {
      if (this.wrapper) {
        this.stickyWrapper = stickybits(this.wrapper, {
          stickyBitStickyOffset: parseInt(headerHeight, 10)
        });
      }
    };

    this.cleanupStickyWrapper = () => {
      if (this.stickyWrapper) {
        this.stickyWrapper.cleanup();
      }
    };

    this.jpButtonId = 'button--lang-jp';
    this.enButtonId = 'button--lang-en';
    this.langJP = 'JP';
    this.langEN = 'EN';
  }

  handleOnClick = event => {
    event.preventDefault();
    const buttonId = event.target.id;
    const lang = buttonId === this.jpButtonId ? this.langJP : this.langEN;
    this.props.handleChange(lang);
  };

  componentDidMount() {
    this.createStickyWrapper();
  }

  componentWillUnmount() {
    this.cleanupStickyWrapper();
  }

  render() {
    return (
      <ExtendedWrapper innerRef={this.setWrapperRef}>
        <LanguageButton
          id={this.jpButtonId}
          onClick={this.handleOnClick}
          isSelected={this.props.semester === this.springSemester}
        >
          {this.langJP}
        </LanguageButton>
        <LanguageButton
          id={this.enButtonId}
          onClick={this.handleOnClick}
          isSelected={this.props.semester === this.fallSemester}
        >
          {this.langEN}
        </LanguageButton>
      </ExtendedWrapper>
    );
  }
}

export default SemesterTabs;
