import React from 'react';
import { TextInput } from 'react-native';
import { colors, variables } from '../theme';

const styles = {
  input: {
    height: 50,
    fontSize: variables.fontSize,
    color: colors.gray,
    padding: variables.padding,
    borderWidth: 1,
    borderColor: colors.mediumGray,
    borderRadius: variables.borderRadius,
  },
};

export default ({ style, ...props }) => (
  <TextInput style={[styles.input, style]} {...props} />
);
