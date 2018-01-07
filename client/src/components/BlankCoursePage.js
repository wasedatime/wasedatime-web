import React from 'react';
import styled from 'styled-components';

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;

const Overlay = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  align-items: center;
  padding: 25px;
  background-color: rgba(0, 0, 0, 0.2);
`;

const BlankCoursePage = () => {
  return (
    <Wrapper>
      <Overlay />
    </Wrapper>
  );
};

export default BlankCoursePage;
