import { css } from 'linaria';

import { colors, fluid } from '../../style-tokens';

export const section = css`
  align-items: center;
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  padding: ${fluid(1, 2)};
`;
