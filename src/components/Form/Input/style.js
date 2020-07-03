import { css } from 'linaria';

import { colors, fonts, fluid } from '../../../style-tokens';

export const input = css`
  border: 2px solid ${colors.white};
  border-radius: 0.5rem;
  font-family: ${fonts.sansSerif.family};
  font-size: ${fluid(1.15, 1.25)};
  outline: none;
  padding: ${fluid(0.6, 0.5)};
  width: 100%;

  :focus {
    border-color: ${colors.highlight};
  }
`;
