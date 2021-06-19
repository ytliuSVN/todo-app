import React, { useState } from 'react';

//components
import Header from './Header';
import ListItems from './ListItems';
import InputModal from './InputModal';

const Home = () => {
  // initial todos
  const initialTodos = [
    {
      title: 'June LeetCoding Challenge',
      date: 'Tuesday, 15-Jun-21 05:52:36 UTC',
      key: '1',
    },
    {
      title: 'File Tax Return',
      date: 'Tuesday, 15-Jun-21 05:52:36 UTC',
      key: '2',
    },
    {
      title: 'Proposal Review',
      date: 'Tuesday, 15-Jun-21 05:52:36 UTC',
      key: '3',
    },
  ];

  const [todos, setTodos] = useState(initialTodos);

  // clear all todos
  const handleClearTodos = () => {
    setTodos([]);
  };

  // Modal visibility & input value
  const [modalVisible, setModalVisible] = useState(false);
  const [todoInputValue, setTodoInputValue] = useState();

  return (
    <>
      <Header handleClearTodos={handleClearTodos} />
      <ListItems todos={todos} setTodos={setTodos} />
      <InputModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        todoInputValue={todoInputValue}
        setTodoInputValue={setTodoInputValue}
      />
    </>
  );
};

export default Home;
