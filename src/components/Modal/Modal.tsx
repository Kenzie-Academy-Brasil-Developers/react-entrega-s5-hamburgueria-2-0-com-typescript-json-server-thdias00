import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box,
} from "@chakra-ui/react";
import { BsFillCartFill } from "react-icons/bs";
import { useAuth } from "../../context/AuthContext";
import { ListCart } from "./ListCart";

export const ModalComponent = () => {
  const { products } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <BsFillCartFill color="#BDBDBD" size="23" onClick={onOpen} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius="5px">
          <ModalHeader
            borderRadius="5px"
            bg="primary"
            color="#FFFFFF"
            fontWeight="bold"
          >
            Carrinho de Compras
          </ModalHeader>
          <ModalCloseButton mt="1" color="#EEEEEE" />
          <ModalBody w="100%" p={6}>
            <ListCart />
            <Box
              w="100%"
              h="2px"
              bg="gray.100"
              borderRadius="10px"
              mt={4}
              mb={4}
            ></Box>
            <Button bg="gray.100" color="gray.300" w="100%" h="60px">
              Remover Todos
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
