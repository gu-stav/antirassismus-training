import { css } from 'linaria';

import { colors, fluid } from '../../style-tokens';

export const header = css`
  color: ${colors.white};
  display: flex;
  justify-content: space-between;
  padding: ${fluid(1, 1.5)};
  position: fixed;
`;

export const logo = css`
  font-size: ${fluid(1, 1.25)};
  margin-bottom: 0;
  margin-top: 0;
`;
