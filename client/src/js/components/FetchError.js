import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from '../styled-components/Wrapper';
import { Button } from '../styled-components/Button';
import { Overlay } from '../styled-components/Overlay';

const ExtendedWrapper = Wrapper.extend`
  flex: 1 0 0;
`

const ExtendedOverlay = Overlay.extend`
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 25px;
`;

const FetchError = ({ onRetry }) => {
  return (
    <ExtendedWrapper>
      <ExtendedOverlay>
        <h3>Uh oh, something went wrong.</h3>
        <Button onClick={onRetry}>Retry</Button>
        <p>
          Kindly{' '}
          <a href="mailto:haohaowang.oscar@moegi.waseda.jp">send me an email</a>{' '}
          if this keeps happening.
        </p>
      </ExtendedOverlay>
    </ExtendedWrapper>
  );
};

export default FetchError;

FetchError.propTypes = {
  onRetry: PropTypes.func.isRequired
};
