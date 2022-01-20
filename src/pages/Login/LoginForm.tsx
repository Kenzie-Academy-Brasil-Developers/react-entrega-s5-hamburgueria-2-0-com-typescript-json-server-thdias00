import { Button, Grid, Stack, Text } from "@chakra-ui/react";
import { DeepMap, FieldError, UseFormRegister } from "react-hook-form";
import { FieldValues } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Input } from "../../components/Form/Input";

interface SignInData {
  email: string;
  password: string;
}

interface LoginFormProps {
  handleSignIn: () => void;
  errors: DeepMap<FieldValues, FieldError>;
  register: UseFormRegister<SignInData>;
}

export const LoginForm = ({
  handleSignIn,
  errors,
  register,
}: LoginFormProps) => {
  const history = useHistory();

  return (
    <Grid
      onSubmit={handleSignIn}
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
          placeholder="Digite seu login"
          type="email"
          label="Login"
          error={errors.email}
          {...register("email")}
        />
        <Input
          placeholder="Digite sua senha"
          type="password"
          label="Senha"
          error={errors.password}
          {...register("password")}
        />
      </Stack>
      <Button type="submit" mt="3" bg="primary" h="60px" color="#ffffff">
        Logar
      </Button>
      <Text mt="3" color="gray.300" fontSize="xs" textAlign="center">
        Crie sua conta para saborear muitas delícias e matar sua fome!
      </Text>
      <Button
        mt="3"
        bg="gray.0"
        h="60px"
        color="#999999"
        onClick={() => history.push("/signup")}
      >
        Cadastrar
      </Button>
    </Grid>
  );
};
