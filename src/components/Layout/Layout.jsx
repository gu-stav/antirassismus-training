import { cx } from 'linaria';
import { graphql, useStaticQuery } from 'gatsby';
import { useLang, useTitleTemplate } from 'hooked-head';
import React from 'react';

import Footer from '../Footer';
import Header from '../Header';

import { global as globalCSS, fonts as fontsCSS } from './style';

const Layout = ({ children, titleTemplate = true }) => {
  const {
    site: {
      siteMetadata: { socialMedia },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          socialMedia
        }
      }
    }
  `);

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
        socialMediaItems={socialMedia}
      />
    </>
  );
};

export default Layout;
