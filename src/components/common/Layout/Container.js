import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors, debug as debugView } from '../theme';

const styles = StyleSheet.create({
  centerHorizontal: {
    alignItems: 'center',
  },
  centerVertical: {
    justifyContent: 'center',
  },
  container: {
    backgroundColor: colors.white,
  },
  flex: {
    flex: 1,
  },
  padding: {
    paddingHorizontal: 10,
    paddingVertical: '2.5%',
  },
  stretch: {
    alignSelf: 'stretch',
  },
});

const Container = ({
  flex,
  stretch,
  padding,
  centerHorizontal,
  centerVertical,
  debug,
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
      debug && debugView,
      margin,
      style,
    ]}
    {...props}
  />
);

export default Container;
