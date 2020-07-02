import React from 'react';

import HeroQuote from '../components/HeroQuote';
import Layout from '../components/Layout';
import Section from '../components/Section';

const HomePage = () => (
  <Layout>
    <Section theme="primary">
      <HeroQuote quote="Hello" author="Author" />
    </Section>
    <Section theme="secondary">About</Section>
    <Section>Contact</Section>
  </Layout>
);

export default HomePage;
