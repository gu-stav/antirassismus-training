/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';

import { label } from './style';

const Label = ({ children, ...props }) => (
  <label className={label} {...props}>
    {children}
  </label>
);

export default Label;
