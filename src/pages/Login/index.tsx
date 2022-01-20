import { Center, Flex, useToast } from "@chakra-ui/react";
import { LoginForm } from "./LoginForm";
import { LoginInfo } from "./LoginInfo";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";

interface SignInData {
  email: string;
  password: string;
}

export const Login = () => {
  const { signIn } = useAuth();

  const history = useHistory();

  const loginSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignInData>({
    resolver: yupResolver(loginSchema),
  });

  const toast = useToast();

  const handleSignIn = (data: SignInData) => {
    signIn(data)
      .then((response) => history.push("/dashboard"))
      .catch((err) => {
        toast({
          title: "Usuário ou senha inválidos",
          status: "error",
          isClosable: true,
        });
      });
  };

  return (
    <Flex
      flexDirection={["column", "column", "row-reverse", "row-reverse"]}
      justifyContent="center"
      w="100%"
      h="100vh"
    >
      <Center>
        <LoginInfo />
      </Center>
      <Center>
        <LoginForm
          errors={errors}
          handleSignIn={handleSubmit(handleSignIn)}
          register={register}
        />
      </Center>
    </Flex>
  );
};
