import React from 'react';
import styled from 'styled-components';

const colorIds = [0, 1, 2, 3, 4, 5, 6, 7];

const InvisibleButton = styled('button')`
  align-self: flex-start;
  background-color: #fff;
  border: none;
  padding: 0;
  outline: 0;
`

const ColorButton = InvisibleButton.extend`
  width: 1.5em;
  height: 1.5em;
  border: solid 2px;
  border-radius: .3em;
  margin: 0 .1em;
`

const ColorSelector = ({handleChangeColor}) => {
  return (
    <div>
      {colorIds.map(id => (
        <ColorButton
          key={id}
          className={`color-${id}`}
          onClick={ event => {
            event.preventDefault();
            handleChangeColor(id);
          }}
        />
      ))}
    </div>
  );
}

export default ColorSelector;
