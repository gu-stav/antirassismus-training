import React from 'react';

import { paragraph } from './style';

const Paragraph = ({ children, ...props }) => (
  <p className={paragraph} {...props}>
    {children}
  </p>
);

export default Paragraph;
