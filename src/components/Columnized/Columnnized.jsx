import { styled } from 'linaria/react';
import React from 'react';

import { fluid, maxWidth } from '../../style-tokens';

const StyledColumnized = styled.div`
  display: grid;
  grid-column-gap: ${fluid(2, 3)};
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  max-width: ${maxWidth};
  width: 100%;
`;

const Columnized = (props) => <StyledColumnized {...props} />;

export default Columnized;
