import { Button, Flex, Grid, Link, Stack, Text } from "@chakra-ui/react";
import { DeepMap, FieldError, UseFormRegister } from "react-hook-form";
import { FieldValues } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Input } from "../../components/Form/Input";

interface SignUpData {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

interface SignUpFormProps {
  handleSignUp: () => void;
  errors: DeepMap<FieldValues, FieldError>;
  register: UseFormRegister<SignUpData>;
}

export const SignUpForm = ({
  handleSignUp,
  errors,
  register,
}: SignUpFormProps) => {
  const history = useHistory();

  return (
    <Grid
      onSubmit={handleSignUp}
      as="form"
      border="1px solid"
      borderColor="gray.100"
      boxShadow="0px 4px 40px -20px rgba(0, 0, 0, 0.25)"
      borderRadius="5px"
      mt="4"
      p="30px 15px"
      w="90%"
    >
      <Flex justifyContent="space-between">
        <Text fontSize="md" fontWeight="bold" mb="3">
          Cadastro
        </Text>
        <Link href="/">Retornar para o Login</Link>
      </Flex>
      <Stack spacing={3}>
        <Input
          placeholder="Digite seu nome"
          label="Nome"
          error={errors.name}
          {...register("name")}
        />
        <Input
          placeholder="Digite seu email"
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
        <Input
          placeholder="Confrime sua senha"
          type="password"
          label="Confrimar Senha"
          error={errors.confirm_password}
          {...register("confirm_password")}
        />
      </Stack>
      <Button type="submit" mt="3" bg="gray.0" h="60px" color="#999999">
        Cadastrar
      </Button>
    </Grid>
  );
};
