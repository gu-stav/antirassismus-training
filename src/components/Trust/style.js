import { css } from 'linaria';

import { colors, fluid, fonts, mq } from '../../style-tokens';

export const itemsList = css`
  list-style: none;
  margin-bottom: 0;
  margin-top: 0;
  padding-left: 0;
`;

export const item = css`
  color: ${colors.white};
  font-family: ${fonts.sansSerif.family};
  font-size: ${fluid(1, 1.2)};
  margin-bottom: 0.75rem;
  position: relative;
`;

export const itemIcon = css`
  color: ${colors.highlight};
  height: ${fluid(1, 1.3)};
  position: absolute;
  top: ${fluid(0.1, 0.25)};
  transform: translateX(${fluid(-1.25, -1.75)});
  width: ${fluid(1, 1.3)};
`;

export const logoContainer = css`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;

  @media ${mq.tablet} {
    margin-top: 0;
  }
`;

export const logoLabel = css`
  color: ${colors.highlight};
  font-family: ${fonts.sansSerif.family};
  font-size: ${fluid(1.2, 1.5)};
  margin-bottom: 0;
  margin-top: 0;
`;

export const logo = css`
  fill: ${colors.white};
  margin-top: ${fluid(1, 1.5)};
  width: 65%;
`;
