import React from "react";
import { Helmet } from "react-helmet";
import { Wrapper } from "../../styled-components/Wrapper";

import CareerList from "./CareerList";
import CareerFilter from "./CareerFilter";
const Career = () => {
  return (
    <Wrapper>
      <Helmet>
        <title>WasedaTime - Career</title>
        <meta
          name="description"
          content="Syllabus Searching at Waseda University."
        />
        <meta property="og:title" content="WasedaTime - Career" />
        <meta
          property="og:description"
          content="Career Finding at Waseda University."
        />
        <meta property="og:site_name" content="WasedaTime - Career" />
      </Helmet>
      <CareerFilter />
      <CareerList />
    </Wrapper>
  );
};

export default Career;
