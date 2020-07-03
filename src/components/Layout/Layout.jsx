import { cx } from 'linaria';
import { useLang, useTitleTemplate } from 'hooked-head';
import React from 'react';

import Footer from '../Footer';
import Header from '../Header';

import { global as globalCSS, fonts as fontsCSS } from './style';

const Layout = ({ children, titleTemplate = true }) => {
  useLang('de');
  useTitleTemplate(titleTemplate ? '%s | Antirassismus-Training' : '');

  return (
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
};

export default Layout;
