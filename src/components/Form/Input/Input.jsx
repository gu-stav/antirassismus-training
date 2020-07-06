import React from 'react';

import Label from '../Label';

import { input } from './style';

const Input = ({ label, name, required, ...props }) => (
  <div>
    <Label htmlFor={name}>
      {label} {required && '*'}
    </Label>
    <input
      name={name}
      id={name}
      className={input}
      required={required}
      {...props}
    />
  </div>
);

export default Input;
