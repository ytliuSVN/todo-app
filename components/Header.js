import React from 'react';

// styled components
import {
  HeaderView,
  HeaderTitle,
  HeaderButton,
  colors,
} from './../styles/appStyles';

// Icons
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
  return (
    <HeaderView>
      <HeaderTitle>Todos</HeaderTitle>
      <HeaderButton>
        <Ionicons name='ios-trash' size={30} color={colors.tertiary} />
      </HeaderButton>
    </HeaderView>
  );
};

export default Header;
