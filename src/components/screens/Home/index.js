import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Container } from '../../common/Layout';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'center',
  },
});

const HomeScreen = () => (
  <Container style={styles.container}>
    <Text>Get started in src/components/screens/Home</Text>
  </Container>
);

export default HomeScreen;
