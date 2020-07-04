import { css } from 'linaria';

import { colors, fluid, fonts } from '../../style-tokens';

export const header = css`
  color: ${colors.white};
  display: flex;
  justify-content: center;
  padding: ${fluid(1, 1.5)};
  position: fixed;
  width: 100%;
`;

export const logoLink = css`
  align-items: center;
  display: flex;
  text-decoration: none;

  :hover,
  :focus {
    color: ${colors.highlight};
  }
`;

export const logo = css`
  font-family: ${fonts.sansSerif.family};
  font-size: ${fluid(0.9, 1.25)};
  margin-bottom: 0;
  margin-top: 0;
  text-transform: uppercase;
`;

export const icon = css`
  fill: ${colors.highlight};
  height: ${fluid(2, 4)};
  margin: 0 ${fluid(0.5, 1)};
  width: ${fluid(2, 4)};

  circle {
    fill: ${colors.secondary};
  }
`;
