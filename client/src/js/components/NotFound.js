import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Wrapper } from '../styledComponents/Wrapper';
import { Button } from '../styledComponents/Button';

const Overlay = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 25px;
  background-color: rgba(0, 0, 0, 0.2);
`;

const NotFound = () => {
  return (
    <Wrapper>
      <Overlay>
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
      </Overlay>
    </Wrapper>
  );
};

export default NotFound;
