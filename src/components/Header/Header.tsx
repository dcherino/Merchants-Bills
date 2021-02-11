import React from 'react';
import { WrapHeader, InnerWrapper, LogoWrap } from './Header.styles';
import Logo from './Logo';

const Header = () => (
  <WrapHeader>
    <InnerWrapper>
      <LogoWrap>
        <Logo />
      </LogoWrap>
      <h1>Merchants Bill App</h1>
    </InnerWrapper>
  </WrapHeader>
);

export default Header;
