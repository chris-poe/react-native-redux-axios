import { Asset } from 'expo-asset';
import { images, getImage } from '../../components/common/Image/images';

// Actions
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// Exported Actions
export default () => () =>
  Promise.all([
    sleep(2000),
    Object.keys(images).map(image =>
      Asset.fromModule(getImage(image)).downloadAsync()
    ),
  ]);
