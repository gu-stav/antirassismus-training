import { css } from 'linaria';

import { fonts, fluid } from '../../../style-tokens';

export const label = css`
  display: block;
  font-family: ${fonts.sansSerif.family};
  font-size: ${fluid(1, 1.2)};
  margin-bottom: ${fluid(0.15, 0.35)};
  text-transform: uppercase;
`;
