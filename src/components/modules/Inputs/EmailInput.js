import React from 'react';
import TextInput from './TextInput';

const EmailInput = props => (
  <TextInput autoCapitalize="none" keyboardType="email-address" {...props} />
);

export default EmailInput;
