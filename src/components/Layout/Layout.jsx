import { cx } from 'linaria';
import React from 'react';

import Footer from '../Footer';
import Header from '../Header';

import { global as globalCSS, fonts as fontsCSS } from './style';

const Layout = ({ children }) => (
  <>
    <Header />
    <main className={cx(globalCSS, fontsCSS)}>{children}</main>
    <Footer
      items={[
        ['Impressum', '/impressum'],
        ['Datenschutz', '/datenschutz'],
      ]}
    />
  </>
);

export default Layout;
