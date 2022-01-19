import {
  Button,
  Flex,
  Grid,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

export const LoginForm = () => {
  return (
    <Grid
      as="form"
      border="1px solid"
      borderColor="gray.100"
      boxShadow="0px 4px 40px -20px rgba(0, 0, 0, 0.25)"
      borderRadius="5px"
      mt="4"
      p="30px 15px"
      w="90%"
    >
      <Text fontSize="md" fontWeight="bold" mb="3">
        Login
      </Text>
      <Stack spacing={3}>
        <Input
          h="60px"
          variant="outline"
          placeholder="Digite seu nome"
          color="gray.600"
          fontWeight="400"
          fontSize="md"
        />
        <Input h="60px" variant="outline" placeholder="Digite sua senha" />
      </Stack>
      <Button mt="3" bg="primary" h="60px" color="#ffffff">
        Logar
      </Button>
    </Grid>
  );
};
