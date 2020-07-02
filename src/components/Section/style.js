import { css } from 'linaria';

import { fluid } from '../../style-tokens';

export const section = css`
  color: white;
  display: flex;
  justify-content: center;
  padding-bottom: ${fluid(1, 2)};
  padding-top: ${fluid(1, 2)};
`;
