import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 30px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    background-color: rgba(220, 221, 17, 1);
  }
`;
