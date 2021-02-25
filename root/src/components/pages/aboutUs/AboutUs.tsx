import React from "react";
import styled from "styled-components";
import Tab from "semantic-ui-react/dist/commonjs/modules/Tab";
import Menu from "semantic-ui-react/dist/commonjs/collections/Menu";
import { useTranslation } from "react-i18next";
import Header from "@bit/wasedatime.core.ts.ui.header";
import { Wrapper } from "@bit/wasedatime.core.ts.styles.wrapper";
import { Helmet } from "react-helmet";
import { media } from "@bit/wasedatime.core.ts.utils.responsive-utils";

import OurMission from "./OurMission";
// import MeetOurTeam from "./MeetOurTeam";
import JoinUs from "./JoinUs";

const PlaceHolder = styled("div")`
  margin-top: 65px;
  ${media.tablet`margin-top: 0em;`}
`;

const LargeTab = styled(Tab)`
  margin: 0 4% !important;
`;

const panes = (t) => [
  {
    menuItem: (
      <Menu.Item style={{ fontSize: "1.5em" }}>
        {t("aboutus.our mission")}
      </Menu.Item>
    ),
    render: () => <OurMission />,
  },
  {
    menuItem: (
      <Menu.Item style={{ fontSize: "1.5em" }}>
        {t("aboutus.join us")}
      </Menu.Item>
    ),
    render: () => <JoinUs />,
  },
  {
    menuItem: (
      <Menu.Item style={{ fontSize: "1.5em" }}>
        {t("aboutus.meet our team")}
      </Menu.Item>
    ),
    render: () => <JoinUs />,
  },
];

const AboutUs = (props: { path: string }) => {
  const { t, i18n } = useTranslation();

  return (
    <Wrapper id="aboutus_wrapper">
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
        onInputChange={() => {}}
        placeholder={"Search course (in construction...)"}
        inputText={""}
        disabled={true}
        isBlur={true}
        changeLang={(lng) => i18n.changeLanguage(lng)}
      />
      <PlaceHolder></PlaceHolder>
      <LargeTab menu={{ secondary: true }} panes={panes(t)} />
    </Wrapper>
  );
};

export default AboutUs;
