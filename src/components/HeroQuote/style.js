import { css } from 'linaria';

import { colors, fluid } from '../../style-tokens';

export const quote = css`
  font-size: ${fluid(1.2, 3)};
  margin-top: 0;
`;

export const cite = css`
  font-size: ${fluid(1, 2)};
  color: ${colors.highlight};
`;
