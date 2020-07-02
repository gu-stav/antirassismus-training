import { styled } from 'linaria/react';
import React from 'react';

import { colors, fluid } from '../../style-tokens';

import { heading } from './style';

const StyledHeading = styled.div`
  color: ${(props) => colors[props.theme]};
  font-size: ${(props) => {
    switch (props.level) {
      case 3:
        return fluid(1.15, 1.35);

      default:
        return fluid(1.5, 2.25);
    }
  }};
`;

const Heading = ({ level = 1, as, children, ...props }) => (
  <StyledHeading
    as={`h${as || level}`}
    level={as || level}
    className={heading}
    {...props}
  >
    {children}
  </StyledHeading>
);

export default Heading;
