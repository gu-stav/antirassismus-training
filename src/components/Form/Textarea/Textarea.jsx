import React from 'react';

import Label from '../Label';

const Textarea = ({ label, name, ...props }) => (
  <>
    <Label htmlFor={name}>{label}</Label>
    <textarea name={name} id={name} {...props} />
  </>
);

export default Textarea;
