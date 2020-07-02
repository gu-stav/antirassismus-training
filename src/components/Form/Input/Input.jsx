import React from 'react';

import Label from '../Label';

const Input = ({ label, name, props }) => (
  <>
    <Label htmlFor={name}>{label}</Label>
    <input name={name} id={name} {...props} />
  </>
);

export default Input;
