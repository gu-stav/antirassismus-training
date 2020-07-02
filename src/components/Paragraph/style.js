import { css } from 'linaria';

import { fluid, fonts } from '../../style-tokens';

export const paragraph = css`
  font-family: ${fonts.serif.narrow.family};
  font-size: ${fluid(1, 1.05)};
  line-height: 1.45;
`;
