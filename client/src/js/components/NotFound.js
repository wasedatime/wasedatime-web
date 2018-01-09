import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Wrapper } from '../styledComponents/Wrapper';
import { Button } from '../styledComponents/Button';
import { Overlay } from '../styledComponents/Overlay';

const ExtendedOverlay = Overlay.extend`
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 25px;
`;

const NotFound = () => {
  return (
    <Wrapper>
      <ExtendedOverlay>
        <h3>Oops! 404</h3>
        <p>Looks like this page doesn't exist.</p>
        <Link to="/">
          <Button>Take Me Home</Button>
        </Link>
        <p>
          Were you trying to break something?{' '}
          <span role="img" aria-label="Smirking Face">
            😏
          </span>
        </p>
      </ExtendedOverlay>
    </Wrapper>
  );
};

export default NotFound;
