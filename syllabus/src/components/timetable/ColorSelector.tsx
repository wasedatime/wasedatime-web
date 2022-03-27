import React from "react";

import styled from "styled-components";

import timetableColors from "@app/constants/timetable-colors";
import { ThemeContext } from "@app/utils/theme-context";

const colorIds: number[] = [0, 1, 2, 3, 4, 5, 6, 7];

type ColorButtonProps = {
  colorCode: number;
};

const InvisibleButton = styled("button")`
  align-self: flex-start;
  background-color: #fff;
  border: none;
  padding: 0;
  outline: 0;
`;

const ColorButton = styled(InvisibleButton)<ColorButtonProps>`
  width: 1.5em;
  height: 1.5em;
  border: 1px solid ${(props) => timetableColors[`color${props.colorCode}`]};
  border-radius: 0.3em;
  margin: 0 0.1em;
  background-color: ${(props) => timetableColors[`bgColor${props.colorCode}`]};
`;

interface Props {
  handleChangeColor: (id: number) => void;
}

const ColorSelector = ({ handleChangeColor }: Props) => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div>
      {colorIds.map((id: number) => (
        <ColorButton
          key={id}
          colorCode={id}
          onClick={(event) => {
            event.preventDefault();
            handleChangeColor(id);
          }}
        />
      ))}
    </div>
  );
};

export default ColorSelector;
