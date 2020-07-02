import { css } from 'linaria';

import { fonts, fluid } from '../../../style-tokens';

export const input = css`
  border: 0;
  border-radius: 0.5rem;
  font-family: ${fonts.sansSerif.family};
  font-size: ${fluid(1, 1.25)};
  padding: ${fluid(0.15, 0.5)};
  width: 100%;
`;
