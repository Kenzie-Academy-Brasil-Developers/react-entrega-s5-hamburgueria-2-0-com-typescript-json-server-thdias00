import { Center, Flex } from "@chakra-ui/react";
import { LoginForm } from "./LoginForm";
import { LoginInfo } from "./LoginInfo";

export const Login = () => {
  return (
    <Flex flexDirection="column" w="100%" h="100vh">
      <Center>
        <LoginInfo />
      </Center>
      <Center>
        <LoginForm />
      </Center>
    </Flex>
  );
};
