import { css } from 'linaria';

import { colors, fluid, fonts } from '../../style-tokens';

export const header = css`
  align-items: center;
  color: ${colors.white};
  display: flex;
  justify-content: space-between;
  padding: ${fluid(1, 1.5)};
  position: fixed;
  width: 100%;
`;

export const logo = css`
  font-family: ${fonts.sansSerif.family};
  font-size: ${fluid(1, 1.25)};
  margin-bottom: 0;
  margin-top: 0;
  text-transform: uppercase;
`;

export const icon = css`
  fill: ${colors.highlight};
  height: ${fluid(2, 4)};
  width: ${fluid(2, 4)};
`;
