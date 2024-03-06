import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 600px;
`;
export const Title = styled.h1`
  font-weight: 500;
  font-size: 48px;
  text-align: center;
  color: black;
  margin-bottom: 30px;
`;

export const Link = styled(NavLink)`
  margin: 0 auto;
  width: 200px;
`;
