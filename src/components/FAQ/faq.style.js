import { css } from 'linaria';

import { fluid } from '../../style-tokens';

export const list = css`
  list-style: none;
  margin: 0;
  padding-left: 0;

  > * {
    margin-bottom: ${fluid(0.5, 1)};
  }
`;
