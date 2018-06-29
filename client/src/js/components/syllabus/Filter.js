import React from 'react';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';

import { sizes } from '../../utils/styledComponents';

const SideBar = styled('div')`
  flex: 0 0 17em;
  background-color: white;
`

const Filter = () => {
  return (
    <MediaQuery minWidth={sizes.desktop}>
      {matches => {
        return (
        matches &&
          <SideBar>
            Course Filter under construction
          </SideBar>
        )
      }}
    </MediaQuery>
  )
}

export default Filter;
