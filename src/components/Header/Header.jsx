import React from 'react';

import { header, logo } from './style';

const Header = (props) => (
  <header className={header} {...props}>
    <h1 className={logo}>
      antirassismus-
      <br />
      training.jetzt
    </h1>
  </header>
);

export default Header;
