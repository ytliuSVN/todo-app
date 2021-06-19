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

  // function to add new todo
  const handleAddTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    setModalVisible(false);
  };

  // edit existing todo item
  const [todoToBeEdited, setTodoToBeEdited] = useState(null);

  const handleTriggerEdit = (item) => {
    setTodoToBeEdited(item);
    setModalVisible(true);
    setTodoInputValue(item.title);
  };

  const handleEditTodo = (editedTodo) => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex((todo) => todo.key === editedTodo.key);
    newTodos.splice(todoIndex, 1, editedTodo);
    setTodos(newTodos);
    setTodoToBeEdited(null);
    setModalVisible(false);
  };

  return (
    <>
      <Header handleClearTodos={handleClearTodos} />
      <ListItems
        todos={todos}
        setTodos={setTodos}
        handleTriggerEdit={handleTriggerEdit}
      />
      <InputModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        todoInputValue={todoInputValue}
        setTodoInputValue={setTodoInputValue}
        handleAddTodo={handleAddTodo}
        todoToBeEdited={todoToBeEdited}
        setTodoToBeEdited={setTodoToBeEdited}
        handleEditTodo={handleEditTodo}
        todos={todos}
      />
    </>
  );
};

export default Home;
