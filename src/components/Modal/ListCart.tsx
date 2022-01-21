import { Box, Center, Flex, Heading, Image } from "@chakra-ui/react";
import { FaTrashAlt } from "react-icons/fa";
import { theme } from "../../styles/theme";
import { useCart } from "../../context/CartContext";

export const ListCart = () => {
  const { cart, delProduct } = useCart();

  return (
    <Flex flexDirection="column">
      {cart.map((item, index) => (
        <Flex key={index}>
          <Center
            bg="gray.100"
            w="25%"
            p="10px"
            mr={4}
            mb={4}
            borderRadius="8px"
          >
            <Image src={item.url_image} alt={item.title} w="55px" h="55px" />
          </Center>
          <Flex flexDirection="column" w="70%">
            <Heading fontSize="md">{item.title}</Heading>
          </Flex>
          <Box w="5%">
            <FaTrashAlt
              color={theme.colors.gray[300]}
              onClick={() => delProduct(item.id)}
            />
          </Box>
        </Flex>
      ))}
    </Flex>
  );
};
