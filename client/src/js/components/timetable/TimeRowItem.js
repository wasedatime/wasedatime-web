import React from 'react';
import styled from 'styled-components';

const TimeRowItem = (props) => {
  return (
      <li>
        <time>{props.time}</time>
      </li>
  )
}

export default TimeRowItem;
