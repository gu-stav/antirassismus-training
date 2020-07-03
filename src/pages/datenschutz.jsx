import { useStaticQuery, graphql } from 'gatsby';
import { useTitle } from 'hooked-head';
import React from 'react';

import Layout from '../components/Layout';
import RichText from '../components/RichText';
import Section from '../components/Section';

const PrivacyPage = () => {
  const {
    file: {
      childMarkdownRemark: { html },
    },
  } = useStaticQuery(graphql`
    query {
      file(
        name: { eq: "00-privacy" }
        sourceInstanceName: { eq: "PrivacyPage" }
      ) {
        childMarkdownRemark {
          html
        }
      }
    }
  `);

  useTitle('Datenschutz');

  return (
    <Layout>
      <Section theme="primary">
        <RichText html={html} />
      </Section>
    </Layout>
  );
};

export default PrivacyPage;
