import React, { useState } from 'react';
import { Modal } from 'react-native';
import { colors, ModalButton } from './../styles/appStyles';
import { Feather } from '@expo/vector-icons';

const InputModal = () => {
  return (
    <>
      <ModalButton onPress={() => {}}>
        <Feather name='plus' size={30} color={colors.secondary} />
      </ModalButton>
    </>
  );
};

export default InputModal;
