import { cx } from 'linaria';
import React from 'react';

import Header from '../Header';

import { global as globalCSS, fonts as fontsCSS } from './style';

const Layout = ({ children }) => (
  <>
    <Header />
    <div className={cx(globalCSS, fontsCSS)}>{children}</div>
  </>
);

export default Layout;
