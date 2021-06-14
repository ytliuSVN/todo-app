import React from 'react';

// styled components
import {
  HeaderView,
  HeaderTitle,
  HeaderButton,
  colors,
} from './../styles/appStyles';

// Icons
import { Fontisto } from '@expo/vector-icons';

const Header = () => {
  return (
    <HeaderView>
      <HeaderTitle>Todos</HeaderTitle>
      <HeaderButton>
        <Fontisto name='trash' size={25} color={colors.tertiary} />
      </HeaderButton>
    </HeaderView>
  );
};

export default Header;
