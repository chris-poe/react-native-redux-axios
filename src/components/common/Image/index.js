import React from 'react';
import { Image as RNImage, ImageBackground } from 'react-native';

import { getImage } from './images';

const Image = ({ name, source, resizeMode, ...props }) => (
  <RNImage
    source={name ? getImage(name) : source}
    resizeMode={resizeMode || 'contain'}
    {...props}
  />
);

const BackgroundImage = ({ name, source, style, resizeMode, ...props }) => (
  <ImageBackground
    style={[
      {
        flex: 1,
        width: undefined,
        height: undefined,
        alignSelf: 'stretch',
      },
      style,
    ]}
    source={name ? getImage(name) : source}
    resizeMode={resizeMode || 'cover'}
    {...props}
  />
);

export { Image, BackgroundImage };
