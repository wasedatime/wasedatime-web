import React from "react";

import styled from "styled-components";

import TimeRowItem from "@app/components/timetable/TimeRowItem";
import { ThemeContext } from "@app/utils/theme-context";

const StyledList = styled("ol")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
  margin: 2rem 0 0 0;
  list-style: none;
  list-style-type: none;
  position: sticky;
  z-index: 80;
  left: 0;
`;

interface Props {
  largestPeriod: number;
}

const TimeRowList = ({ largestPeriod }: Props) => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  const periods = [
    {
      s: "0850",
      e: "1030",
      p: 1,
    },
    {
      s: "1040",
      e: "1220",
      p: 2,
    },
    {
      s: "1310",
      e: "1450",
      p: 3,
    },
    {
      s: "1505",
      e: "1645",
      p: 4,
    },
    {
      s: "1700",
      e: "1840",
      p: 5,
    },
    {
      s: "1855",
      e: "2035",
      p: 6,
      o: [
        { school: "G_WBS", s: "1830", e: "2010" },
        { school: "ART", s: "1810", e: "1950" },
      ]
    },
    {
      s: "2045",
      e: "2135",
      p: 7,
      o: [
        { school: "G_WBS", s: "2020", e: "2200" },
        { school: "ART", s: "1955", e: "2135" },
      ]
    },
  ];
  const timeRows = periods
    .slice(0, Math.max(largestPeriod, 5))
    .map((period) => {
      return <TimeRowItem key={period.p} period={period} />;
    });

  return <StyledList>{timeRows}</StyledList>;
};

export default TimeRowList;
