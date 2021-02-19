import React from "react";
import styled from "styled-components";
import { Tab, Menu } from "semantic-ui-react";
import { withNamespaces } from "react-i18next";
import Header from "../Header";
import { Wrapper } from "../../styled-components/Wrapper";
import { Helmet } from "react-helmet";
import { media } from "../../styled-components/utils";

// import OurMission from "./OurMission.js";
import MeetOurTeam from "./MeetOurTeam.js";
import JoinUs from "./JoinUs.js";

const PlaceHolder = styled("div")`
  margin-top: 65px;
  ${media.tablet`margin-top: 0em;`}
`;
// const ExtendedOverlay = styled(Overlay)`
//   align-items: center;
//   padding: 65px 0px 0px 0px;
//   ${media.tablet`padding-top: 0em;`}
// `;

const LargeTab = styled(Tab)`
  // text-align: center;
  // width: 80%
  margin: 0 4% !important;
  // border: solid;
`;

const panes = (t) => [
  {
    menuItem: (
      <Menu.Item style={{ fontSize: "1.5em" }}>
        {t("aboutus.join us")}
      </Menu.Item>
    ),
    render: () => <JoinUs />,
  },
  // {
  //   menuItem: (
  //     <Menu.Item style={{ fontSize: "1.5em" }}>
  //       {t("aboutus.our mission")}
  //     </Menu.Item>
  //   ),
  //   render: () => <OurMission />,
  // },
  {
    menuItem: (
      <Menu.Item style={{ fontSize: "1.5em" }}>
        {t("aboutus.meet our team")}
      </Menu.Item>
    ),
    render: () => <MeetOurTeam />,
  },
];
const AboutUs = ({ t }) => (
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
    <PlaceHolder></PlaceHolder>
    <LargeTab menu={{ secondary: true }} panes={panes(t)} />
  </Wrapper>
);

export default withNamespaces("translation")(AboutUs);
