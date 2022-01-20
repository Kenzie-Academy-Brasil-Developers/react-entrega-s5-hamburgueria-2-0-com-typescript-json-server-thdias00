import {
  Box,
  Center,
  Flex,
  Grid,
  Image,
  SkeletonCircle,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import Logo from "../../assets/Captura de tela de 2022-01-18 20-51-59.png";
import { FiShoppingBag } from "react-icons/fi";
import { theme } from "../../styles/theme";

export const SignUpInfo = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <VStack
      w={["90%", "90%", "100%", "100%"]}
      mt="4"
      justifyContent="center"
      alignItems={["center", "center", "flex-start", "flex-start"]}
    >
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
      {isWideVersion && (
        <Box w="100%" display="flex" justifyContent="start">
          <Flex w="35%" flexWrap="wrap">
            {[
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            ].map((_) => (
              <SkeletonCircle
                size="3"
                startColor="gray.6"
                endColor="gray.6"
                mr="3"
                mb="3"
              />
            ))}
          </Flex>
        </Box>
      )}
    </VStack>
  );
};
