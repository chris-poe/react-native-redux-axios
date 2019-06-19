import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Touchable from './Touchable';
import ActivityIndicator from './Indicators/ActivityIndicator';
import { colors, variables } from './theme';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderColor: colors.mediumGray,
    borderStyle: 'solid',
    borderWidth: 1,
    height: 65,
    justifyContent: 'center',
  },
  rounded: {
    borderRadius: 5,
  },
  text: {
    color: colors.gray,
    fontSize: variables.fontSize + 2,
  },
});

const Button = ({
  text,
  disabled,
  loading,
  rounded,
  children,
  style,
  ...props
}) => (
  <Touchable
    style={[rounded && styles.rounded, styles.button, style]}
    disabled={disabled || loading}
    {...props}
  >
    <View>
      {!loading && text && <Text style={styles.text}>{text}</Text>}
      {!loading && children && children}
      {loading && <ActivityIndicator size="small" />}
    </View>
  </Touchable>
);

export default Button;
