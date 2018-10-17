import React from 'react';
import { Modal as RNModal } from 'react-native';

const Modal = ({ animationType, visable, transparent, ...props }) => (
  <RNModal
    animationType={animationType || 'slide'}
    onRequestClose={() => null}
    visable={visable}
    transparent={transparent}
    {...props}
  />
);

export default Modal;
