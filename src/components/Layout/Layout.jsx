import { cx } from 'linaria';
import React from 'react';

import { global as globalCSS, fonts as fontsCSS } from './style';

const Layout = ({ children }) => (
  <div className={cx(globalCSS, fontsCSS)}>{children}</div>
);

export default Layout;
