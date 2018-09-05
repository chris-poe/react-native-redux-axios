import React from 'react';
import { View } from 'react-native';
import theme from '../theme';

const styles = {
  container: {
    backgroundColor: theme.colors.white,
  },
  flex: {
    flex: 1,
  },
  stretch: {
    alignSelf: 'stretch',
  },
  padding: {
    paddingHorizontal: 10,
    paddingVertical: '2.5%',
  },
  centerHorizontal: {
    alignItems: 'center',
  },
  centerVertical: {
    justifyContent: 'center',
  },
};

const Container = ({
  flex,
  stretch,
  padding,
  centerHorizontal,
  centerVertical,
  margin,
  style,
  ...props
}) => (
  <View
    style={[
      styles.container,
      flex && styles.flex,
      stretch && styles.stretch,
      padding && styles.padding,
      centerHorizontal && styles.centerHorizontal,
      centerVertical && styles.centerVertical,
      margin,
      style,
    ]}
    {...props}
  />
);

export default Container;
