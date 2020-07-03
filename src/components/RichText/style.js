import { css } from 'linaria';

import { fonts, fluid, colors, maxWidth } from '../../style-tokens';

export const richtext = css`
  color: ${colors.white};
  font-family: ${fonts.serif.narrow.family};
  font-size: ${fluid(1, 1.05)};
  line-height: 1.45;
  max-width: ${maxWidth};
  padding-top: ${fluid(2, 4)};
  width: 100%;

  > h1 {
    color: ${colors.highlight};
    font-family: ${fonts.sansSerif.family};
    font-size: ${fluid(1.5, 2)};
    text-transform: uppercase;
  }

  > h2,
  > h3 {
    color: ${colors.highlight};
    font-family: ${fonts.sansSerif.family};
    margin-bottom: 0;
    margin-top: ${fluid(2, 3)};
  }
`;
