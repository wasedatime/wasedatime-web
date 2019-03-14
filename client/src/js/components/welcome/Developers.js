import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { media } from "../../styled-components/utils";
import styled from "styled-components";

import oscar from "../../../img/contributors/oscar.jpg";
import mei from "../../../img/contributors/mei.jpg";
import hao from "../../../img/contributors/hao.jpg";

const Wrapper = styled("div")`
  display: flex;
  flex-direction: row;
`;

const Introduction = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Name = styled("span")`
  font-size: 1.2em;
`;

const Bio = styled("span")`
  font-size: 0.9em;
  margin-top: 0.2em;
  color: #444;
`;

const Position = styled("span")`
  font-size: 0.9em;
  color: #444;
`;

const StyledAvatar = styled(Avatar)`
  margin: 10px;
  width: 80px !important;
  height: 80px !important;
  ${media.phone`
    width: 60px !important;
    height: 60px !important;
  `};
`;

const Developers = ({ t }) => {
  return (
    <div>
      <Wrapper>
        <StyledAvatar alt="Oscar Wang" src={oscar} />
        <Introduction>
          <Name>Oscar Wang</Name>
          <Position>{t("welcome.Founder")}</Position>
          <Bio>
            <i>WasedaTime &gt; Course N@vi</i>
          </Bio>
        </Introduction>
      </Wrapper>
      <Wrapper>
        <StyledAvatar alt="Mei" src={mei} />
        <Introduction>
          <Name>Mei</Name>
          <Position>{t("welcome.Frontendtranslation")}</Position>
          <Bio>
            <i>Join us and let’s think!</i>
          </Bio>
        </Introduction>
      </Wrapper>
      <Wrapper>
        <StyledAvatar alt="Hao" src={hao} />
        <Introduction>
          <Name>Hao</Name>
          <Position>{t("welcome.Frontend")}</Position>
          <Bio>
            <i>{t("welcome.May WasedaTime be with you")}</i>
          </Bio>
        </Introduction>
      </Wrapper>
    </div>
  );
};

export default Developers;
