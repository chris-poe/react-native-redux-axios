import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const device = {
  width,
  height,
};

const debug = {
  borderWidth: 1,
  borderColor: 'red',
};

const variables = {
  fontSize: 16,
  borderRadius: 5,
  padding: 5,
};

const colors = {
  red: '#d85a42',
  white: '#fff',
  black: '#000',
  gray: '#929292',
  mediumGray: '#ccc',
  lightGray: '#dfdfdf',
  info: '#417dc1',
};

const theme = {
  device,
  debug,
  variables,
  colors,
};

export { debug, device, variables, colors, theme };
