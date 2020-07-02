import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

import Columnized from '../components/Columnized';
import Heading from '../components/Heading';
import HeroQuote from '../components/HeroQuote';
import Layout from '../components/Layout';
import Section from '../components/Section';

const HomePage = () => {
  const {
    about: { aboutContent },
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

      about: file(
        name: { eq: "10-about" }
        sourceInstanceName: { eq: "HomePage" }
      ) {
        aboutContent: childHomePageYaml {
          title
          description
        }
      }
    }
  `);

  return (
    <Layout>
      <Section theme="primary">
        <HeroQuote {...heroQuoteContent} />
      </Section>
      <Section theme="secondary">
        <Heading level="2" theme="highlight">
          {aboutContent.title}
        </Heading>

        <Columnized>
          {aboutContent.description.map((paragraph) => (
            <p>{paragraph}</p>
          ))}
        </Columnized>
      </Section>
      <Section>Contact</Section>
    </Layout>
  );
};

export default HomePage;
