import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box,
  Flex,
  Text,
  Center,
  Heading,
} from "@chakra-ui/react";
import { BsFillCartFill } from "react-icons/bs";
import { useCart } from "../../context/CartContext";
import { ListCart } from "./ListCart";

export const ModalComponent = () => {
  const { total, removeAll } = useCart();
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
            {total > 0 ? (
              <>
                <ListCart />
                <Flex w="100%" justifyContent="space-between">
                  <Text fontSize="md" fontWeight="bold">
                    Total
                  </Text>
                  <Text color="gray.300">R$: {total.toFixed(2)}</Text>
                </Flex>
                <Box
                  w="100%"
                  h="2px"
                  bg="gray.100"
                  borderRadius="10px"
                  mt={4}
                  mb={4}
                ></Box>
                <Button
                  bg="gray.100"
                  color="gray.300"
                  w="100%"
                  h="60px"
                  onClick={removeAll}
                >
                  Remover Todos
                </Button>
              </>
            ) : (
              <Center p={10} textAlign="center">
                <Flex flexDirection="column">
                  <Heading mb={4} fontSize="xl">
                    Sua sacola está vazia
                  </Heading>
                  <Text fontSize="md" color="gray.300">
                    Adicione itens
                  </Text>
                </Flex>
              </Center>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
