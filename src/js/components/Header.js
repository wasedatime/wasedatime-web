import React from "react";
import styled from "styled-components";
import LanguangeMenu from "./LanguageMenu";
import { Grid, Input } from "semantic-ui-react";

const StyledHeader = styled("header")`
  padding-top: 1rem;
  border-bottom: 2px solid #f5f5f5;
  height: 67px;
  width: 100%;
  background: rgba(255, 255, 255, 0.3);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 900;
`;

const Header = ({ onInputChange, placeholder, inputText }) => {
  return (
    <StyledHeader>
      <Grid style={{ width: "100%" }}>
        <Grid.Row>
          <Grid.Column width={4}></Grid.Column>
          <Grid.Column width={8}>
            <div style={{ marginLeft: "0" }}>
              <Input
                fluid
                icon="search"
                placeholder={placeholder || "Search..."}
                onChange={
                  onInputChange
                    ? (e) => onInputChange(e.target.value)
                    : () => {}
                }
                value={inputText || ""}
              />
            </div>
          </Grid.Column>
          <Grid.Column width={4}>
            <LanguangeMenu />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </StyledHeader>
  );
};

export default Header;
