import { graphql } from 'gatsby';
import React from 'react';

import Columnized from '../Columnized';
import Heading from '../Heading';
import QA from './QA';

import { fluid } from '../../style-tokens';
import { list } from './faq.style';

const FAQ = ({ title, qa }) => {
  const half = Math.floor(qa.length / 2);
  const qaLeft = qa.filter((item, index) => index <= half - 1);
  const qaRight = qa.filter((item, index) => index > half - 1);

  return (
    <>
      <Heading
        level="2"
        theme="highlight"
        style={{
          marginBottom: fluid(1, 3),
        }}
      >
        {title}
      </Heading>

      <Columnized>
        <ul className={list}>
          {qaLeft.map((item) => (
            <li>
              <QA {...item} />
            </li>
          ))}
        </ul>

        <ul className={list}>
          {qaRight.map((item) => (
            <li>
              <QA {...item} />
            </li>
          ))}
        </ul>
      </Columnized>
    </>
  );
};

export default FAQ;

export const fragment = graphql`
  fragment FAQ on HomePageYaml {
    title
    qa {
      question
      answer
    }
  }
`;
