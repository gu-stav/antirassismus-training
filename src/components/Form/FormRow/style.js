import { css } from 'linaria';

import { fluid, mq } from '../../../style-tokens';

export const row = css`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: ${fluid(0.5, 0.75)};
  padding-top: ${fluid(0.5, 0.75)};
  width: 100%;

  > * {
    flex: 1 1 15rem;
    margin-top: ${fluid(1, 1.5)};

    @media ${mq.tablet} {
      margin-left: ${fluid(0.5, 1.5)};
      margin-top: 0;
    }
  }
`;
