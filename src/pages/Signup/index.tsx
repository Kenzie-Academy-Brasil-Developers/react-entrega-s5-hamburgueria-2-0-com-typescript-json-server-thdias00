import { Center, Flex, useToast } from "@chakra-ui/react";
import { SignUpForm } from "./SignUpForm";
import { SignUpInfo } from "./SignUpInfo";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";

interface SignUnData {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

export const Signup = () => {
  const { signUp } = useAuth();

  const history = useHistory();

  const signUpSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatória"),
    confirm_password: yup
      .string()
      .required("Confirmação de senha obrigatória")
      .oneOf([yup.ref("password")], "Senhas diferentes"),
  });

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignUnData>({
    resolver: yupResolver(signUpSchema),
  });

  const toast = useToast();

  const handleSignUp = (data: SignUnData) => {
    signUp(data)
      .then((response) => history.push("/"))
      .catch((err) => {
        toast({
          title: "Email já cadastrado",
          status: "error",
          isClosable: true,
        });
      });
  };

  return (
    <Flex
      flexDirection={["column", "column", "row", "row"]}
      justifyContent="center"
      w="100%"
      h={["100%", "100%", "100vh", "100vh"]}
    >
      <Center>
        <SignUpInfo />
      </Center>
      <Center>
        <SignUpForm
          errors={errors}
          handleSignUp={handleSubmit(handleSignUp)}
          register={register}
        />
      </Center>
    </Flex>
  );
};
