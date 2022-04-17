import React from "react";

import { Helmet } from "react-helmet";

export const HelmetContainer = () => (
  <Helmet>
    <title>WasedaTime - Bus</title>
    <meta
      name="description"
      content="Shuttle Bus Arrival Time Checking at Waseda University."
    />
    <meta property="og:title" content="WasedaTime - Bus" />
    <meta
      property="og:description"
      content="Shuttle Bus Arrival Time Checking at Waseda University."
    />
    <meta property="og:site_name" content="WasedaTime - Bus" />
  </Helmet>
);
