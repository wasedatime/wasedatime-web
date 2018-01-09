import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const FetchError = ({ onRetry }) => {
  return (
    <Wrapper>
      <Overlay>
        <h3>Uh oh, something went wrong.</h3>
        <Button onClick={onRetry}>Retry</Button>
        <p>
          Kindly{' '}
          <a href="mailto:haohaowang.oscar@moegi.waseda.jp">send me an email</a>{' '}
          if this keeps happening.
        </p>
      </Overlay>
    </Wrapper>
  );
};

export default FetchError;

FetchError.propTypes = {
  onRetry: PropTypes.func.isRequired
};
