import React from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';

// styled components
import { ListView, TodoText, TodoDate, colors } from '../styles/appStyles';

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
    />
  );
};

export default ListItems;
