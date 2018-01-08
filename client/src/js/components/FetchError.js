import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;

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

const StyledButton = styled('button')`
  background-color: #fff;
  padding: 12px;
  margin: 10px 0;
  width: 160px;
  text-align: center;
  text-decoration: none;
  border-radius: 8px;
  border-bottom: none;
  box-shadow: 0 5px #999;
  font-size: 1.7rem;
`;

const FetchError = ({ onRetry }) => {
  return (
    <Wrapper>
      <Overlay>
        <h3>Uh oh, something went wrong.</h3>
        <StyledButton onClick={onRetry}>Retry</StyledButton>
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
