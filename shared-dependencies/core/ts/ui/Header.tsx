import React, { useState } from "react";
import styled from "styled-components";
import LanguageMenu from "@bit/wasedatime.core.ts.ui.language-menu";
import { Grid, Input } from "semantic-ui-react";
import MediaQuery from "react-responsive";
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
`;

const RoundedInput = styled(Input)`
  input {
    border-radius: 25px !important;
    max-height: 45px;
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
        fluid
        icon="search"
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
      <Grid style={{ width: "100%" }}>
        <Grid.Row>
          <MediaQuery minWidth={sizes.tablet}>
            {(matches) =>
              matches ? (
                <Grid.Column width={4} style={{ paddingRight: "0" }}>
                  <MediaQuery minWidth={sizes.tablet}>
                    <PageTitle>{title}</PageTitle>
                  </MediaQuery>
                </Grid.Column>
              ) : (
                <Grid.Column width={3} style={{ paddingRight: "0px" }}>
                  <div
                    style={{
                      paddingLeft: "1rem",
                    }}
                    onClick={() => navigate("/home")}
                  >
                    <SmallLogo />
                  </div>
                </Grid.Column>
              )
            }
          </MediaQuery>

          <MediaQuery minWidth={sizes.tablet}>
            {(matches) =>
              matches ? (
                <Grid.Column width={8}>{searchBar}</Grid.Column>
              ) : (
                <Grid.Column width={10}>{searchBar}</Grid.Column>
              )
            }
          </MediaQuery>

          <MediaQuery minWidth={sizes.tablet}>
            {(matches) =>
              matches ? (
                <Grid.Column width={4}>
                  <LanguageMenu changeLang={changeLang} />
                </Grid.Column>
              ) : (
                <Grid.Column width={3} style={{ padding: "0px" }}>
                  <LanguageMenu changeLang={changeLang} />
                </Grid.Column>
              )
            }
          </MediaQuery>
        </Grid.Row>
      </Grid>
    </StyledHeader>
  );
};

export default Header;
