import { css } from 'linaria';

import { colors, fluid, fonts } from '../../../style-tokens';

export const button = css`
  background: ${colors.primary};
  border: 0;
  border-radius: 0.5rem;
  color: ${colors.white};
  cursor: pointer;
  font-family: ${fonts.sansSerif.family};
  font-size: ${fluid(1, 1.15)};
  padding: ${fluid(0.35, 0.5)} ${fluid(1, 3.5)};

  :hover,
  :focus {
    background: ${colors.highlight};
    color: ${colors.secondary};
  }
`;
