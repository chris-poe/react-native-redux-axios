import React from 'react';
import { ActivityIndicator } from 'react-native';

export default ({ color, size, ...props }) => (
  <ActivityIndicator color={color} size={size || 'large'} {...props} />
);
