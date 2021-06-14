import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//styled components
import { Container } from './styles/appStyles';

export default function App() {
  return (
    <Container>
      <Text>Swipeable Todo App</Text>
      <StatusBar style='light' />
    </Container>
  );
}
