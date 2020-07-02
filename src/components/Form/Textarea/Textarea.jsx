import React from 'react';

import Label from '../Label';

import { input } from '../Input/style';

const Textarea = ({ label, name, ...props }) => (
  <div>
    <Label htmlFor={name}>{label}</Label>
    <textarea name={name} id={name} className={input} {...props} />
  </div>
);

export default Textarea;
