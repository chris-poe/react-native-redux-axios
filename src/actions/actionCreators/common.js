import { Asset } from 'expo';
import { images, getImage } from '../../components/common/Image/images';

const preloadImages = () => {
  Object.keys(images).map(image =>
    Asset.fromModule(getImage(image)).downloadAsync()
  );
};

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export const init = () => dispatch =>
  Promise.all([preloadImages(), sleep(2000)]);
