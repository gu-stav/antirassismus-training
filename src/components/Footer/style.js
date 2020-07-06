import { css } from 'linaria';

import { colors, fluid, fonts } from '../../style-tokens';

export const footer = css`
  background-color: ${colors.secondary};
  color: ${colors.white};
  display: flex;
  font-family: ${fonts.sansSerif.family};
  justify-content: center;
  padding: ${fluid(1, 2)};
`;

export const item = css`
  font-size: ${fluid(0.7, 1)};
  margin-left: ${fluid(1, 1.5)};
  text-decoration: none;

  :hover,
  :focus {
    color: ${colors.highlight};
  }
`;

export const socialMediaList = css`
  align-items: center;
  display: flex;
  list-style: none;
  margin-bottom: 0;
  margin-left: ${fluid(1, 2)};
  margin-top: 0;
  padding-left: 0;
`;

export const socialMediaItem = css`
  display: inline-block;
  margin-left: ${fluid(0.25, 0.5)};

  :hover,
  :focus {
    color: ${colors.highlight};
  }
`;

export const socialMediaItemIcon = css`
  height: ${fluid(1, 1.25)};
  width: ${fluid(1, 1.25)};
`;
