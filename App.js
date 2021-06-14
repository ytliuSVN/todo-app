import { StatusBar } from 'expo-status-bar';
import React from 'react';

// components
import Home from './components/Home';

//styled components
import { Container } from './styles/appStyles';

export default function App() {
  return (
    <Container>
      <StatusBar style='light' />
      <Home />
    </Container>
  );
}
