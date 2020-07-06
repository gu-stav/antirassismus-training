import { useStaticQuery, graphql } from 'gatsby';
import { useTitle } from 'hooked-head';
import React from 'react';

import Columnized from '../components/Columnized';
import Contact from '../components/Contact';
import Heading from '../components/Heading';
import HeroQuote from '../components/HeroQuote';
import Layout from '../components/Layout';
import Paragraph from '../components/Paragraph';
import Section from '../components/Section';

import { fluid } from '../style-tokens';

const HomePage = () => {
  const {
    about: { aboutContent },
    heroQuote: { heroQuoteContent },
    contact: { contactContent },
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

      contact: file(
        name: { eq: "20-contact" }
        sourceInstanceName: { eq: "HomePage" }
      ) {
        contactContent: childHomePageYaml {
          title
          ...Contact
        }
      }
    }
  `);

  useTitle('Antirassismus Training');

  return (
    <Layout titleTemplate={false}>
      <Section theme="primary">
        <HeroQuote {...heroQuoteContent} />
      </Section>
      <Section theme="secondary">
        <Heading
          level="2"
          theme="highlight"
          style={{
            marginBottom: fluid(1, 2),
          }}
        >
          {aboutContent.title}
        </Heading>

        <Columnized>
          {aboutContent.description.map((paragraph) => (
            <Paragraph html={paragraph} />
          ))}
        </Columnized>
      </Section>

      <Section theme="primary" padded={false}>
        <Heading
          level="2"
          theme="highlight"
          style={{
            margin: fluid(1, 4),
          }}
        >
          {contactContent.title}
        </Heading>

        <Contact {...contactContent} />
      </Section>
    </Layout>
  );
};

export default HomePage;
