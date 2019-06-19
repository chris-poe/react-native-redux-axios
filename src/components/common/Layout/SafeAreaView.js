import React from 'react';
import { SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import Container from './Container';

export default ({ ...props }) => {
  const { platform } = Constants;
  const requireSafeArea =
    (platform.ios && platform.ios.model.toLowerCase().includes('iphone x')) ||
    false;
  if (requireSafeArea) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }} {...props} />
    );
  }
  return <Container flex {...props} />;
};
