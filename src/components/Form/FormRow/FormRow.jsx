import React from 'react';

import { row } from './style';

const FormRow = ({ children, ...props }) => (
  <div className={row} {...props}>
    {children}
  </div>
);

export default FormRow;
