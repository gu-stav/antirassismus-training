import { styled } from 'linaria/react';
import React from 'react';

import { colors } from '../../style-tokens';

const StyledHeading = styled.div`
  color: ${(props) => colors[props.theme]};
`;

const Heading = ({ level = 1, as, children, ...props }) => (
  <StyledHeading as={`h${as || level}`} level={as || level} {...props}>
    {children}
  </StyledHeading>
);

export default Heading;
