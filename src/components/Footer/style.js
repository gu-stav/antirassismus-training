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
