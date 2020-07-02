import { css } from 'linaria';

import { colors, fluid, maxWidth } from '../../style-tokens';

export const contact = css`
  background-color: white;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const inner = css`
  display: grid;
  grid-template-columns: repeat(2, minmax(15rem, 1fr));
  max-width: ${maxWidth};
  width: 100%;
`;

export const children = css`
  padding: ${fluid(1, 2)};
`;

export const form = css`
  background-color: ${colors.white};
`;
