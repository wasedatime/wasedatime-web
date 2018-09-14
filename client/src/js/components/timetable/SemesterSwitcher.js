import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleLeft,
  faAngleDoubleRight
} from '@fortawesome/free-solid-svg-icons';

import { InvisibleButton } from '../../styled-components/Button';
import { Wrapper } from '../../styled-components/Wrapper';

const ExtendedInvisibleButton = InvisibleButton.extend`
  &:hover {
    color: #b51e36;
  }
`;

const SemesterSwitcher = ({ handleOnClick }) => {
  return (
    <div>
      {/* <ExtendedInvisibleButton>
        <FontAwesomeIcon icon={faAngleDoubleLeft} size="1x" />
      </ExtendedInvisibleButton> */}
      {/* &nbsp;&nbsp; */}
      <span>Fall</span>
      <span>Spring</span>
      {/* &nbsp;&nbsp; */}
      {/* <ExtendedInvisibleButton>
        <FontAwesomeIcon icon={faAngleDoubleRight} size="1x" />
      </ExtendedInvisibleButton> */}
    </div>
  );
};

export default SemesterSwitcher;
