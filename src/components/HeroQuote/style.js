import { css } from 'linaria';

import { colors, fluid, fonts, maxWidth } from '../../style-tokens';

export const container = css`
  text-align: center;
  max-width: ${maxWidth};
  padding-bottom: ${fluid(1, 1)};
  padding-top: ${fluid(2, 5)};
  width: 100%;
`;

export const quote = css`
  color: ${colors.highlight};
  font-family: ${fonts.serif.narrow.family};
  font-size: ${fluid(1.2, 4)};
  font-weight: 900;
  letter-spacing: 0.1rem;
  line-height: 1;
  margin-bottom: ${fluid(1, 1.5)};
  margin-top: 0;
`;

export const cite = css`
  font-family: ${fonts.sansSerif.family};
  font-size: ${fluid(1, 2)};
  font-style: normal;
  color: ${colors.white};
`;
