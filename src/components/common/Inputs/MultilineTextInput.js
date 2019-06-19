import React from 'react';
import { StyleSheet } from 'react-native';
import TextInput from './TextInput';

const styles = StyleSheet.create({
  multiline: {
    height: 150,
  },
});

const MultilineTextInput = ({ style, numberOfLines = 3, ...props }) => (
  <TextInput
    style={[styles.multiline, style]}
    numberOfLines={numberOfLines}
    multiline
    {...props}
  />
);

export default MultilineTextInput;
