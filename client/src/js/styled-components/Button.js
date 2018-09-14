import styled from 'styled-components';

export const Button = styled('button')`
  padding: 12px;
  margin: 10px 0;
  width: 160px;
  text-align: center;
  text-decoration: none;
  border-radius: 8px;
  border-bottom: none;
  background-color: #fff;
  box-shadow: 0 5px #999;
  font-size: 1.7rem;
  &:hover {
    background-color: #ccc;
  }
  &:active {
    background-color: #ccc;
    box-shadow: 0 5px #666;
    transform: translateY(3px);
  }
`;

export const InvisibleButton = styled('button')`
  align-self: flex-start;
  background-color: unset;
  border: none;
  padding: 0;
  &:focus {
    outline: 0;
  }
`;
