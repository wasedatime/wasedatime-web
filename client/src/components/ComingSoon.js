import React from 'react';
import styled from 'styled-components';

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  background-image: url('../img/home_background-sm.jpg');
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
  @media screen and (max-width: 430px) {
    background-image: url('../img/home_background-mobile.jpg');
  }
`;

const Overlay = styled('div')`
  display: flex;
  flex-direction: column;
  text-align: center;
  flex: 1 0 auto;
  padding: 0 25px;
  background-color: rgba(0, 0, 0, 0.2);
`;
const Description = styled('div')`
  margin-top: 100px;
  font-size: 4rem;
`;

const ComingSoon = () => {
  return (
    <Wrapper>
      <Overlay>
        <Description>Coming Soon</Description>
      </Overlay>
    </Wrapper>
  );
};

export default ComingSoon;
