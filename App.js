import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

// components
import Home from './components/Home';

//styled components
import { Container } from './styles/appStyles';

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [ready, setReady] = useState(false);

  // initial todos
  const initialTodos = [];

  const [todos, setTodos] = useState(initialTodos);

  const loadTodos = async () => {
    try {
      const data = await AsyncStorage.getItem('storedTodos');
      return data != null ? setTodos(JSON.parse(data)) : null;
    } catch (error) {
      console.log(error);
    }
  };

  if (!ready) {
    return (
      <AppLoading
        startAsync={loadTodos}
        onFinish={() => setReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <Container>
      <StatusBar style='light' />
      <Home todos={todos} setTodos={setTodos} />
    </Container>
  );
}
