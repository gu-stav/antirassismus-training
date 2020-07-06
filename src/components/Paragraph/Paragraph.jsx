import React from 'react';

import { paragraph } from './style';

const Paragraph = ({ children, html, ...props }) => {
  if (html) {
    return (
      <p
        className={paragraph}
        {...props}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <p className={paragraph} {...props}>
      {children}
    </p>
  );
};

export default Paragraph;
