/* eslint-disable react/button-has-type */

import React from 'react';

import { button } from './style';

const Button = ({ children, ...props }) => (
  <button className={button} {...props}>
    {children}
  </button>
);

export default Button;
