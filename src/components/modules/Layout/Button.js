import React from 'react';
import { View, Text } from 'react-native';

import Touchable from '../Touchable';
import ActivityIndicator from '../Indicators/ActivityIndicator';
import { colors, variables } from '../theme';

const styles = {
  button: {
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: colors.mediumGray,
  },
  text: {
    fontSize: variables.fontSize + 2,
    color: colors.gray,
  },
  rounded: {
    borderRadius: 5,
  },
};

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
