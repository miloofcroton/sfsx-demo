import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.img`
  width: 50px;
  padding-top: 10px;
`;

const Logo = () => {
  return (
    <LogoWrapper
      alt="logo"
      src="/src/assets/logo.png"
    />
  );
}

export default Logo;
