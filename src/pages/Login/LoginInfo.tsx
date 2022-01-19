import { Center, Flex, Grid, Image, Text, VStack } from "@chakra-ui/react";
import Logo from "../../assets/Captura de tela de 2022-01-18 20-51-59.png";
import { FiShoppingBag } from "react-icons/fi";
import { theme } from "../../styles/theme";

export const LoginInfo = () => {
  return (
    <VStack w="90%" mt="4">
      <Image src={Logo} w="200px" h="40px" />
      <Flex
        borderRadius="5px"
        border="1px solid"
        borderColor="gray.100"
        boxShadow="0px 4px 40px -20px rgba(0, 0, 0, 0.25)"
        p="2"
        w="100%"
      >
        <Flex
          justifyContent="center"
          w="60px"
          h="60px"
          bg="#E7F5EF"
          mr="2"
          borderRadius="5px"
        >
          <Center>
            <FiShoppingBag color={theme.colors.primary} />
          </Center>
        </Flex>
        <Text w="100%" h="64px" fontSize="xs" color="gray.300">
          A vida é como um sanduíche, é preciso <br /> recheá-la com os
          <b> melhores</b> <br /> ingredientes.
        </Text>
      </Flex>
    </VStack>
  );
};
