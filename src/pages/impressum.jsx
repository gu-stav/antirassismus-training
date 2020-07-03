import { useStaticQuery, graphql } from 'gatsby';
import { useTitle } from 'hooked-head';
import React from 'react';

import Layout from '../components/Layout';
import RichText from '../components/RichText';
import Section from '../components/Section';

const ImprintPage = () => {
  const {
    file: {
      childMarkdownRemark: { html },
    },
  } = useStaticQuery(graphql`
    query {
      file(
        name: { eq: "00-imprint" }
        sourceInstanceName: { eq: "ImprintPage" }
      ) {
        childMarkdownRemark {
          html
        }
      }
    }
  `);

  useTitle('Impressum');

  return (
    <Layout>
      <Section theme="primary">
        <RichText html={html} />
      </Section>
    </Layout>
  );
};

export default ImprintPage;
