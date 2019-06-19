import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { colors, variables } from '../theme';

const styles = StyleSheet.create({
  input: {
    borderColor: colors.mediumGray,
    borderRadius: variables.borderRadius,
    borderWidth: 1,
    color: colors.gray,
    fontSize: variables.fontSize,
    height: 50,
    padding: variables.padding,
  },
});

export default ({ style, ...props }) => (
  <TextInput style={[styles.input, style]} {...props} />
);
