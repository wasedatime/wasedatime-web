import styled from 'styled-components';

import { media } from '../utils/styledComponents';

export const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;

export const RowWrapper =  Wrapper.extend`
  flex-direction: row;
`

export const WrapperWithBackground = Wrapper.extend`
  background-image: url(${props => props.background});
  background-position: center, center;
  background-size: cover;
  background-repeat: no-repeat;
  ${media.phone`background-image: url(${props => props.backgroundPhone});`};
`;
