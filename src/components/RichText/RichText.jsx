import React from 'react';

import { richtext } from './style';

const RichText = ({ html, ...props }) => (
  <div
    dangerouslySetInnerHTML={{ __html: html }}
    className={richtext}
    {...props}
  />
);

export default RichText;
