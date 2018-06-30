import styled from 'styled-components';

export const SideBar = styled('div')`
  display: flex;
  flex-direction: column;
  flex: ${props => `0 0 ${props.flexBasis};`}
  background-color: rgba(0,0,0,0.2);
`
