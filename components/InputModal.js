import React, { useState } from 'react';
import { Modal } from 'react-native';
import {
  colors,
  ModalButton,
  ModalContainer,
  ModalView,
  StyledInput,
  ModalAction,
  ModalActionGroup,
  ModalIcon,
  HeaderTitle,
} from './../styles/appStyles';
import { Feather } from '@expo/vector-icons';

const InputModal = ({
  modalVisible,
  setModalVisible,
  todoInputValue,
  setTodoInputValue,
}) => {
  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleSubmit = () => {};

  return (
    <>
      <ModalButton onPress={() => setModalVisible(true)}>
        <Feather name='plus' size={30} color={colors.secondary} />
      </ModalButton>

      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <ModalContainer>
          <ModalIcon>
            <HeaderTitle>Todos</HeaderTitle>
            <Feather name='edit-3' size={30} color={colors.tertiary} />
          </ModalIcon>

          <StyledInput
            placeholder='Add a todo'
            placeholderTextColor={colors.alternative}
            selectionColor={colors.secondary}
            onChangeText={(val) => setTodoInputValue(val)}
            value={todoInputValue}
            autoFocus={true}
            onSubmitEditing={handleSubmit}
          />
        </ModalContainer>
      </Modal>
    </>
  );
};

export default InputModal;
