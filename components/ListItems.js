import React, { useState } from 'react';

// styled components
import {
  ListView,
  ListViewHidden,
  TodoText,
  TodoDate,
  HiddenButton,
  SwipedTodoText,
  colors,
} from '../styles/appStyles';

import { SwipeListView } from 'react-native-swipe-list-view';
import { Ionicons } from '@expo/vector-icons';

const ListItems = ({ todos, setTodos }) => {
  // For styling currently swiped todo row
  const [swipedRow, setSwipedRow] = useState(null);

  const handleDeleteTodo = (rowMap, rowKey) => {
    const newTodos = [...todos];
    const prevIndex = todos.findIndex((todo) => todo.key === rowKey);
    newTodos.splice(prevIndex, 1);
    setTodos(newTodos);
  };

  const onRowDidOpen = (rowKey) => {
    console.log('This row opened', rowKey);
  };

  const renderItem = (data) => {
    const RowText = data.item.key == swipedRow ? SwipedTodoText : TodoText;
    return (
      <ListView underlayColor={colors.underlay} onPress={() => {}}>
        <>
          <RowText>{data.item.title}</RowText>
          <TodoDate>{data.item.date}</TodoDate>
        </>
      </ListView>
    );
  };

  const renderHiddenItem = (data, rowMap) => (
    <ListViewHidden>
      <HiddenButton onPress={() => handleDeleteTodo(rowMap, data.item.key)}>
        <Ionicons name='ios-trash' size={30} color={colors.secondary} />
      </HiddenButton>
    </ListViewHidden>
  );

  return (
    <SwipeListView
      data={todos}
      renderItem={renderItem}
      renderHiddenItem={renderHiddenItem}
      // onRowDidOpen={onRowDidOpen}
      leftOpenValue={80}
      previewOpenValue={80}
      previewOpenDelay={3000}
      disableLeftSwipe={true}
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, paddingBottom: 30, marginBottom: 40 }}
      // Handling swiped todo row
      onRowOpen={(rowKey) => {
        setSwipedRow(rowKey);
      }}
      onRowClose={() => {
        setSwipedRow(null);
      }}
    />
  );
};

export default ListItems;
