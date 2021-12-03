import React from "react";
import styled from "styled-components";
import { useLocation, Link } from "@reach/router";

const TabsWrapper = styled.div`
  background-color: #eee;
  padding-left: 1em;
  padding-top: 5px;
`;

const Tab = styled.button`
  padding: 0px 1rem;
  background-color: #eee;
  border-width: 0px;
  border-radius: 5px 5px 0 0;
  font-size: 16px;
`;

const ActiveTab = styled(Tab)`
  background-color: #fff;
`;

const TabLink = styled(Link)`
`;

const ActiveTabLink = styled(TabLink)`
`;

const SyllabusTabs = () => {
  const location = useLocation();

  return (
    <TabsWrapper>
      <Link to="/courses/syllabus">
      {
        location.pathname === "/courses/syllabus"
          ? <ActiveTab>Courses</ActiveTab>
          : <Tab>Courses</Tab>
      }
      </Link>
      
      <Link to="/courses/labs">
      {
        location.pathname === "/courses/labs"
          ? <ActiveTab>Labs</ActiveTab>
          : <Tab>Labs</Tab>
      }
      </Link>
    </TabsWrapper>
  )
}

export default SyllabusTabs;