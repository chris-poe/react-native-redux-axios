import landing from '../../../assets/images/landing.png';
import defaultUser from '../../../assets/images/default_user.png';

const images = {
  landing,
  defaultUser,
};

const getImage = name => images[name];

export { images, getImage };
