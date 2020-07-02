/* eslint-disable react/button-has-type */

import React from 'react';

const Button = ({ children, ...props }) => (
  <button {...props}>{children}</button>
);

export default Button;
