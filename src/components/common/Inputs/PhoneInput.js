import React from 'react';
import TextInput from './TextInput';

const PhoneInput = props => (
  <TextInput autoCapitalize="none" keyboardType="phone-pad" {...props} />
);

export default PhoneInput;
