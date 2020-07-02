import { css } from 'linaria';

export const global = css`
  :global() {
    *,
    *::before,
    &::after {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      padding: 0;
    }
  }
`;

export const fonts = css`
  :global() {
  }
`;
