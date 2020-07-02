import { css } from 'linaria';

import { fluid } from '../../../style-tokens';

export const row = css`
  display: flex;
  padding-bottom: ${fluid(0.25, 0.75)};
  padding-top: ${fluid(0.25, 0.75)};
  width: 100%;

  > * {
    flex: 1 1 auto;
    margin-left: ${fluid(0.5, 1.5)};
  }
`;
