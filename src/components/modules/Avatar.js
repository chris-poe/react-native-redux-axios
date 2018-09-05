import React from 'react';
import { View } from 'react-native';
import { BackgroundImage } from './Image';

const styles = {
  avatar: {
    borderRadius: 25,
    overflow: 'hidden',
  },
};

const Avatar = ({ style, size }) => (
  <View style={[styles.avatar, style, { height: size, width: size }]}>
    <BackgroundImage name="defaultUser" />
  </View>
);

export default Avatar;
