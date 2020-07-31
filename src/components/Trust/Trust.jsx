import { graphql } from 'gatsby';
import React from 'react';

import Columnized from '../Columnized';
import Logo from '../../../static/icons/zusammenleben-willkommen.svg';
import Smile from '../../../static/icons/smile.svg';

import {
  itemsList as itemsListStyle,
  item as itemStyle,
  itemIcon as itemIconStyle,
  logoContainer as logoContainerStyle,
  logoLabel as logoLabelStyle,
  logo as logoStyle,
} from './style';

const Trust = ({ items = [], logoLabel }) => (
  <Columnized>
    <ul className={itemsListStyle}>
      {items.map((item) => (
        <li key={`trust-${item}`} className={itemStyle}>
          <Smile className={itemIconStyle} />
          {item}
        </li>
      ))}
    </ul>

    <div className={logoContainerStyle}>
      <p className={logoLabelStyle}>{logoLabel}</p>
      <Logo className={logoStyle} />
    </div>
  </Columnized>
);

export default Trust;

export const fragment = graphql`
  fragment Trust on HomePageYaml {
    items
    logoLabel
  }
`;
