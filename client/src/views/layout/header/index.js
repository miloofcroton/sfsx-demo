import React from 'react';
import { NavLinks } from './Links';
import styled from 'styled-components';

const StyledNav = styled.nav`
  margin: 0px 0px 15px 0px;
`;

const Header = () => {

  return (
    <header>
      <h1>React Starter</h1>
      <StyledNav>
        {NavLinks()}
      </StyledNav>
    </header>
  );
};

export default Header;
