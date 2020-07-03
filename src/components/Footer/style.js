import { css } from 'linaria';

import { colors, fluid, fonts } from '../../style-tokens';

export const footer = css`
  background-color: ${colors.secondary};
  color: ${colors.white};
  display: flex;
  font-family: ${fonts.sansSerif.family};
  justify-content: center;
  padding: ${fluid(1, 2)};
`;

export const item = css`
  font-size: ${fluid(0.9, 1)};
  margin-left: ${fluid(1, 1.5)};
  text-decoration: none;

  :hover,
  :focus {
    color: ${colors.highlight};
  }
`;
