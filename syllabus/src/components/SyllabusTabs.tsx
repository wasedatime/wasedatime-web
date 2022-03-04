import React from "react";

import { useLocation, Link } from "@reach/router";
import { WithTranslation, withTranslation } from "react-i18next";
import styled from "styled-components";

const TabsWrapper = styled.div`
  background-color: #f3f3f3;
  padding-left: 1em;
  padding-top: 5px;
  height: 29px;
`;

const Tab = styled.button`
  padding: 0px 1rem;
  background-color: #f3f3f3;
  border-width: 0px;
  border-radius: 5px 5px 0 0;
  font-size: 16px;
  color: #666;
`;

const ActiveTab = styled(Tab)`
  background-color: #fff;
`;

const SyllabusTabs = ({ t }: WithTranslation) => {
  const location = useLocation();

  return (
    <TabsWrapper>
      <Link to="/courses/syllabus">
        {location.pathname === "/courses/syllabus" ? (
          <ActiveTab>{t("syllabusTabs.courses")}</ActiveTab>
        ) : (
          <Tab>{t("syllabusTabs.courses")}</Tab>
        )}
      </Link>

      <Link to="/courses/labs">
        {location.pathname === "/courses/labs" ? (
          <ActiveTab>{t("syllabusTabs.labs")}</ActiveTab>
        ) : (
          <Tab>{t("syllabusTabs.labs")}</Tab>
        )}
      </Link>
    </TabsWrapper>
  );
};

export default withTranslation("translation")(SyllabusTabs);
