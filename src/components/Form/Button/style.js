import { css } from 'linaria';

import { colors, fluid, fonts } from '../../../style-tokens';

export const button = css`
  background: ${colors.primary};
  border: 0;
  border-radius: 0.5rem;
  color: ${colors.white};
  cursor: pointer;
  font-family: ${fonts.sansSerif.family};
  font-size: 1.15rem;
  line-height: 1.3;
  outline: none;
  padding: 0.5rem ${fluid(1, 3.5)};

  :hover,
  :focus {
    background: ${colors.highlight};
    color: ${colors.secondary};
  }

  :disabled {
    background-color: cce7cc;
    color: #bfbfbf;
  }
`;
