import React from "react";
import styled from "styled-components";
import { Tab, Menu } from "semantic-ui-react";
import { withNamespaces } from "react-i18next";
import Header from "./Header";
import { Wrapper } from "../styled-components/Wrapper";
import { Helmet } from "react-helmet";

import OurMission from "./OurMission.js";
import MeetOurTeam from "./MeetOurTeam.js";
import JoinUs from "./JoinUs.js";

// 想要override semantic的style需要用「!important」
// 內容的字變大了，但標籤的字沒受到影響？！
const LargeTab = styled(Tab)`
    // text-align: center;
    // width: 80%
    margin: 0 4% !important; 
    // border: solid;
`;
{/* <img></img> */}
const panes = [
  {
    // 要直接override menuItem本身的style（個案）
    menuItem: <Menu.Item style={{ fontSize:"1.5em"}}>Our Mission</Menu.Item>,
    render: () => <OurMission />,
  },
  // 其他的就麻煩你修改然後繼續開發～
  { 
    menuItem: <Menu.Item style={{ fontSize:"1.5em"}}>Meet Our Team</Menu.Item>, 
    render: () => <MeetOurTeam /> 
  },
  { 
    menuItem: <Menu.Item style={{ fontSize:"1.5em"}}>Join Us</Menu.Item>, 
    render: () => <JoinUs /> 
  },
];
const AboutUs = () => (
  <Wrapper>
    <Helmet>
      <title>WasedaTime -　About Us</title>
      <meta
            name="description"
            content="Introduce Wasedatime's mission and meet the team."
          />
          <meta property="og:title" content="WasedaTime - About Us" />
          <meta
            property="og:description"
            content="Introduce Wasedatime's mission and meet the team."
          />
          <meta property="og:site_name" content="WasedaTime - About Us" />
    </Helmet>
  <Header
    title={t("navigation.aboutus")}
    placeholder="Search..."
    disabled={true}
  />
  <LargeTab menu={{ secondary: true }} panes={panes}/>
  </Wrapper>
);

export default withNamespaces("translation")(AboutUs);


