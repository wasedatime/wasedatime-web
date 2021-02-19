import React, { useState } from "react";
import MediaQuery from "react-responsive";
import styled from "styled-components";
import LanguageMenu from "@bit/wasedatime.core.ts.ui.language-menu";
import { media, sizes } from "@bit/wasedatime.core.ts.utils.responsive-utils";
import { SmallLogo } from "@bit/wasedatime.core.ts.ui.logo";
import { navigate } from "@reach/router";

type StyledHeaderProps = {
  isBlur: boolean;
};

const StyledHeader = styled("header")`
  padding: 11px 0px;
  border-bottom: 2px solid #f5f5f5;
  height: 67px;
  width: 100%;
  background: ${(props: StyledHeaderProps) =>
    props.isBlur ? "rgba(255, 255, 255, 0.3)" : "#fff"};
  -webkit-backdrop-filter: ${(props: StyledHeaderProps) =>
    props.isBlur ? "blur(5px)" : "none"};
  backdrop-filter: ${(props: StyledHeaderProps) =>
    props.isBlur ? "blur(5px)" : "none"};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 90;
  grid-row: 1 / 2;
  display: flex;
  flex-direction: row;
`;

const TitleLogoWrapper = styled("header")`
  flex: 4;
  ${media.tablet`flex: 3`};
  padding-right: 0px;
`;

const SearchBarWrapper = styled.div`
  flex: 8;
  ${media.tablet`flex: 10`};
`;

const LanguageMenuWrapper = styled.div`
  flex: 4;
  ${media.tablet`flex: 3`};
`;

const RoundedInput = styled.input`
  width: 100%;
  border-radius: 25px;
  height: 40px;
  padding: 0px 1em;
  border: 1px solid #ddd;
  &:focus {
    outline: none;
  }
`;

const PageTitle = styled("h1")`
  font-weight: 500;
  padding-left: 100px;
  ${media.desktop`padding: 0.5rem 0px 0px 80px; font-size: 1.5em;`}
`;

type HeaderProps = {
  title: string;
  onInputChange(x: string): void;
  placeholder: string;
  inputText: string | string[];
  disabled?: boolean;
  isBlur: boolean;
  changeLang(x: string): void;
};

const Header = ({
  title,
  onInputChange,
  placeholder,
  inputText,
  disabled,
  isBlur,
  changeLang,
}: HeaderProps) => {
  const searchBar = (
    <div style={{ marginLeft: "0" }}>
      <RoundedInput
        placeholder={placeholder || "Search..."}
        onChange={
          onInputChange ? (e) => onInputChange(e.target.value) : () => {}
        }
        value={inputText || ""}
        disabled={disabled}
        autoFocus={true}
      />
    </div>
  );

  return (
    <StyledHeader isBlur={isBlur}>
      <TitleLogoWrapper>
        <MediaQuery minWidth={sizes.tablet}>
          {(matches) =>
            matches ? (
              <PageTitle>{title}</PageTitle>
            ) : (
              <div
                style={{
                  paddingLeft: "1rem",
                }}
                onClick={() => navigate("/home")}
              >
                <SmallLogo />
              </div>
            )
          }
        </MediaQuery>
      </TitleLogoWrapper>
      
      <SearchBarWrapper>
        {searchBar}
      </SearchBarWrapper>

      <LanguageMenuWrapper>
        <LanguageMenu changeLang={changeLang} />
      </LanguageMenuWrapper>
    </StyledHeader>
  );
};

export default Header;
