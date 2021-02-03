import React from "react";
import styled from "styled-components";
import LanguageMenu from "@bit/wasedatime.core.js.ui.language-menu";
import { Grid, Input } from "semantic-ui-react";
import MediaQuery from "react-responsive";
import { media, sizes } from "@bit/wasedatime.core.js.utils.responsive-utils";

const StyledHeader = styled("header")`
  padding: 11px 0px;
  border-bottom: 2px solid #f5f5f5;
  height: 67px;
  width: 100%;
  background: ${(props) =>
    props.isBlur ? "rgba(255, 255, 255, 0.3)" : "#fff"};
  -webkit-backdrop-filter: ${(props) => (props.isBlur ? "blur(5px)" : "none")};
  backdrop-filter: ${(props) => (props.isBlur ? "blur(5px)" : "none")};
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

const Header = ({
  title,
  onInputChange,
  placeholder,
  inputText,
  disabled,
  isBlur,
  changeLang,
}) => {
  return (
    <StyledHeader isBlur={isBlur}>
      <Grid style={{ width: "100%" }}>
        <Grid.Row>
          <Grid.Column width={4} style={{ paddingRight: "0" }}>
            <MediaQuery minWidth={sizes.tablet}>
              <PageTitle>{title}</PageTitle>
            </MediaQuery>
          </Grid.Column>

          <Grid.Column width={8}>
            <div style={{ marginLeft: "0" }}>
              <RoundedInput
                fluid
                icon="search"
                placeholder={placeholder || "Search..."}
                onChange={
                  onInputChange
                    ? (e) => onInputChange(e.target.value)
                    : () => {}
                }
                value={inputText || ""}
                disabled={disabled}
                autoFocus={true}
              />
            </div>
          </Grid.Column>
          <Grid.Column width={4}>
            <LanguangeMenu changeLang={changeLang} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </StyledHeader>
  );
};

export default Header;
