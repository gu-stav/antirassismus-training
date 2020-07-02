import React from 'react';

import Label from '../Label';

import { input } from './style';

const Input = ({ label, name, props }) => (
  <div>
    <Label htmlFor={name}>{label}</Label>
    <input name={name} id={name} className={input} {...props} />
  </div>
);

export default Input;
