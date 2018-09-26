import React from 'react';
import styled from 'styled-components';

import { media } from '../styled-components/utils';
import { Wrapper } from '../styled-components/Wrapper';
import { Overlay } from '../styled-components/Overlay';
import logo from '../../img/logo.png';

const ExtendedWrapper = Wrapper.extend`
  flex: 1 0 0;
`

const ExtendedOverlay = Overlay.extend`
  align-items: center;
  justify-content: center;
  padding: 25px;
`;

const Logo = styled('img')`
  height: 100px;
  width: 100px;
  transition: transform(0, 12vh);
`;

const Description = styled('p')`
  font-size: 1.3em;
  text-align: center;
  ${media.phone`font-size: 1.1em;`};
`;

const UnderConstruction = props => {
  window.scrollTo({top: 0});
  return (
    <ExtendedWrapper>
      <ExtendedOverlay>
        <Logo src={logo} alt="WaseTime logo" />
        <h2>Under Construction</h2>
        <Description>
          Want to help? <br/>
          Check out <a href="https://github.com/wasetime/wasetime-web">here</a> or <a href="mailto:haohaowang.oscar@moegi.waseda.jp">send an email</a>!<br/>
          We sincerely welcome any contributors!
        </Description>
      </ExtendedOverlay>
    </ExtendedWrapper>
  );
};

export default UnderConstruction;
