import { cx } from 'linaria';
import React, { useState } from 'react';

import Heading from '../../Heading';
import Icon from '../../../../static/icons/chevron-circle-right.svg';
import Paragraph from '../../Paragraph';

import { details, summary, icon, iconIsOpen } from './qa.style';

const QA = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <details
      className={details}
      onToggle={({ target }) => {
        setIsOpen(target.open);
      }}
    >
      <summary className={summary}>
        <Heading level="3" as="4">
          <Icon className={cx(icon, isOpen && iconIsOpen)} /> {question}
        </Heading>
      </summary>

      <Paragraph style={{ paddingLeft: '1.5rem' }}>{answer}</Paragraph>
    </details>
  );
};

export default QA;
