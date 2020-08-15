import { css } from 'linaria';

import { colors, fluid } from '../../../style-tokens';

export const details = css``;

export const summary = css`
  list-style-type: none;
  padding-left: 1.5rem;
  position: relative;
  text-transform: uppercase;

  ::-webkit-details-marker {
    display: none;
  }

  :hover,
  :focus {
    color: ${colors.highlight};
    cursor: pointer;
  }
`;

export const icon = css`
  height: 1rem;
  left: 0;
  position: absolute;
  top: ${fluid(0.15, 0.3)};
  transition: transform 200ms ease-in-out;
  width: 1rem;
`;

export const iconIsOpen = css`
  transform: rotate(90deg);
`;
