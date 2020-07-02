/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';

const Label = ({ children, ...props }) => <label {...props}>{children}</label>;

export default Label;
