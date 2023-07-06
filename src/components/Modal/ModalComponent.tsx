import React from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { ModalComponentProps } from './ModalComponentProps.model';


const ModalComponent: React.FunctionComponent<ModalComponentProps> = (props) => {
  const {
    modalButton,
    modalTitle,
    modalBody,
    execute,
    cancel,
    buttonTheme,
    modalFunction,
  } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        colorScheme={buttonTheme}
        onClick={onOpen}>
        {modalButton}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {modalBody}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='red' mr={3} onClick={onClose}>
              {cancel}
            </Button>
            <Button variant='ghost' onClick={modalFunction}>{execute}</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalComponent;