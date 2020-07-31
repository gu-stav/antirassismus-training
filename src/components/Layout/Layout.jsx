import { cx } from 'linaria';
import { graphql, useStaticQuery } from 'gatsby';
import { useLang, useMeta, useTitleTemplate } from 'hooked-head';
import React from 'react';

import Footer from '../Footer';
import Header from '../Header';

import { global as globalCSS, fonts as fontsCSS } from './style';

const Layout = ({ children, titleTemplate = true }) => {
  const {
    site: {
      siteMetadata: { description, socialMedia },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          socialMedia
        }
      }
    }
  `);

  useLang('de');
  useMeta({ name: 'description', content: description });
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
