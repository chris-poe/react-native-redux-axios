import React from 'react';
import { TextInput } from 'react-native';
import theme from '../theme';

const styles = {
  input: {
    height: 50,
    fontSize: theme.variables.fontSize,
    color: theme.colors.gray,
    padding: theme.variables.padding,
    borderWidth: 1,
    borderColor: theme.colors.medGray,
    borderRadius: theme.variables.borderRadius,
  },
};

export default ({ style, ...props }) => (
  <TextInput style={[styles.input, style]} {...props} />
);
