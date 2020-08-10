import { css } from 'linaria';

import { colors, fluid, fonts, maxWidth, mq } from '../../style-tokens';

export const contact = css`
  background-color: white;
  color: ${colors.secondary};
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

export const message = css`
  border: 1px solid rgba(255, 255, 255, 0);
  border-radius: ${fluid(0.25, 0.5)};
  display: block;
  font-family: ${fonts.sansSerif.family};
  font-size: ${fluid(0.8, 0.95)};
  padding: ${fluid(0.5, 0.75)};
`;

export const messageSuccess = css`
  background-color: #cce7cc;
  border-color: #cce7cc;
`;

export const messageError = css`
  background-color: #cce7cc;
  border-color: ${colors.errorDark};
`;
