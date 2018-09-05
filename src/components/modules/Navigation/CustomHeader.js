import React from 'react';
import { View } from 'react-native';
import { Header } from 'react-navigation';
import theme from '../theme';

const styles = {
  container: {
    backgroundColor: theme.colors.white,
  },
};

const CustomHeader = ({ headerProps }) => (
  <View style={styles.container}>
    <Header {...headerProps} />
  </View>
);

export default CustomHeader;
