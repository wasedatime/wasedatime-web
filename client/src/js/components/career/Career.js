import React from "react";
import { Helmet } from "react-helmet";

import { RowWrapper } from "../../styled-components/Wrapper";
import Filter from "./Filter";

const Career = () => {
  return (
    <RowWrapper>
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
      <Filter />
    </RowWrapper>
  );
};

export default Career;
