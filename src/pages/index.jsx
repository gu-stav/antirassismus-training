import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

import HeroQuote from '../components/HeroQuote';
import Layout from '../components/Layout';
import Section from '../components/Section';

const HomePage = () => {
  const {
    heroQuote: { heroQuoteContent },
  } = useStaticQuery(graphql`
    query {
      heroQuote: file(
        name: { eq: "00-hero-quote" }
        sourceInstanceName: { eq: "HomePage" }
      ) {
        heroQuoteContent: childHomePageYaml {
          ...HeroQuote
        }
      }
    }
  `);

  return (
    <Layout>
      <Section theme="primary">
        <HeroQuote {...heroQuoteContent} />
      </Section>
      <Section theme="secondary">About</Section>
      <Section>Contact</Section>
    </Layout>
  );
};

export default HomePage;
