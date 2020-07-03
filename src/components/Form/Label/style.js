import { css } from 'linaria';

import { fonts, fluid } from '../../../style-tokens';

export const label = css`
  display: block;
  font-family: ${fonts.sansSerif.family};
  font-size: ${fluid(1.05, 1.2)};
  margin-bottom: 0.35rem;
  margin-left: 0.5rem;
  text-transform: uppercase;
`;
