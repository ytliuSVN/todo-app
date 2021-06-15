import React, { useState } from 'react';
import { Text } from 'react-native';

//components
import Header from './Header';
import ListItems from './ListItems';

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

  return (
    <>
      <Header />
      <ListItems todos={todos} setTodos={setTodos} />
    </>
  );
};

export default Home;
