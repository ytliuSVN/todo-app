import React from 'react';

// styled components
import {
  ListView,
  ListViewHidden,
  TodoText,
  TodoDate,
  HiddenButton,
  colors,
} from '../styles/appStyles';

import { SwipeListView } from 'react-native-swipe-list-view';
import { Ionicons } from '@expo/vector-icons';

const ListItems = ({ todos, setTodos }) => {
  return (
    <SwipeListView
      data={todos}
      renderItem={(data) => {
        return (
          <ListView>
            <>
              <TodoText>{data.item.title}</TodoText>
              <TodoDate>{data.item.date}</TodoDate>
            </>
          </ListView>
        );
      }}
      renderHiddenItem={() => {
        return (
          <ListViewHidden>
            <HiddenButton>
              <Ionicons name='ios-trash' size={30} color={colors.secondary} />
            </HiddenButton>
          </ListViewHidden>
        );
      }}
      leftOpenValue={80}
      previewRowKey={'1'}
      previewOpenValue={80}
      previewOpenDelay={3000}
      disableLeftSwipe={true}
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, paddingBottom: 30, marginBottom: 40 }}
    />
  );
};

export default ListItems;
