import React from "react";

import { Helmet } from "react-helmet";

export const HelmetContainer = () => (
  <Helmet>
    <title>WasedaTime - RoomFinder</title>
    <meta
      name="description"
      content="Empty Room Checking in the campuses of Waseda University."
    />
    <meta property="og:title" content="WasedaTime - RoomFinder" />
    <meta
      property="og:description"
      content="Empty Room Checking in the campuses of Waseda University."
    />
    <meta property="og:site_name" content="WasedaTime - RoomFinder" />
  </Helmet>
);
