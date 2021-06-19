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
import { Feather, Ionicons } from '@expo/vector-icons';

const InputModal = ({
  todos,
  modalVisible,
  setModalVisible,
  todoInputValue,
  setTodoInputValue,
  handleAddTodo,
}) => {
  const handleSubmit = () => {
    handleAddTodo({
      title: todoInputValue,
      date: new Date().toUTCString(),
      key: `${
        (todos[todos.length - 1] && +todos[todos.length - 1].key + 1) || 1
      }`,
    });
    setTodoInputValue('');
  };

  const handleCloseModal = () => {
    setTodoInputValue('');
    setModalVisible(false);
  };

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
          <ModalView>
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

            <ModalActionGroup>
              <ModalAction onPress={handleCloseModal} color={colors.primary}>
                <Ionicons name='ios-close' size={28} color={colors.tertiary} />
              </ModalAction>
              <ModalAction onPress={handleSubmit} color={colors.tertiary}>
                <Ionicons
                  name='ios-checkmark'
                  size={28}
                  color={colors.secondary}
                />
              </ModalAction>
            </ModalActionGroup>
          </ModalView>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default InputModal;
