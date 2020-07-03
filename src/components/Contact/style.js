import { css } from 'linaria';

import { colors, fluid, maxWidth, mq } from '../../style-tokens';

export const contact = css`
  background-color: white;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const inner = css`
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  max-width: ${maxWidth};
  width: 100%;
`;

export const children = css`
  display: flex;
  flex-direction: column;
  padding: ${fluid(1, 2)};
`;

export const receiverContainer = css`
  grid-column: 1 / -1;
  padding-bottom: 3rem;
  padding-top: 3rem;

  @media ${mq.tablet} {
    grid-column: 1 / 5;
  }

  > * {
    margin-bottom: 0;
  }
`;

export const form = css`
  background-color: ${colors.white};
  grid-column: 1 / -1;

  @media ${mq.tablet} {
    grid-column: 5 / -1;
  }
`;
