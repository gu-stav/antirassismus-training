import { css } from 'linaria';

import { colors, fluid, maxWidth } from '../../style-tokens';

export const container = css`
  text-align: center;
  max-width: ${maxWidth};
  width: 100%;
`;

export const quote = css`
  color: ${colors.highlight};
  font-size: ${fluid(1.2, 3)};
  margin-top: 0;
`;

export const cite = css`
  font-size: ${fluid(1, 2)};
  color: ${colors.white};
`;
