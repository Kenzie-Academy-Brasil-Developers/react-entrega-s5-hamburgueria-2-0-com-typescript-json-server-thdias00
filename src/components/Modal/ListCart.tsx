import { Box, Center, Flex, Heading, Image } from "@chakra-ui/react";
import { FaTrashAlt } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import { theme } from "../../styles/theme";

export const ListCart = () => {
  const { cart } = useAuth();

  return (
    <Flex flexDirection="column">
      {cart.map((item) => (
        <Flex key={item.id}>
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
          <Flex flexDireciton="column" w="70%">
            <Heading fontSize="md">{item.title}</Heading>
          </Flex>
          <Box w="5%">
            <FaTrashAlt color={theme.colors.gray[300]} />
          </Box>
        </Flex>
      ))}
    </Flex>
  );
};
