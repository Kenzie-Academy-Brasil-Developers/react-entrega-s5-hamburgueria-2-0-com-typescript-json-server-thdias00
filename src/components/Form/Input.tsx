import { FieldError } from "react-hook-form";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputGroup,
} from "@chakra-ui/react";
import {
  useState,
  useCallback,
  useEffect,
  ForwardRefRenderFunction,
  forwardRef,
} from "react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError | null;
}

type inputVariationOptions = {
  [key: string]: string;
};

const inputVariation: inputVariationOptions = {
  error: "negative",
  default: "grat.300",
  focus: "black",
  filled: "sucess",
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, ...rest },
  ref
) => {
  const [value, setValue] = useState("");
  const [variation, setVariation] = useState("default");

  useEffect(() => {
    if (error) {
      return setVariation("error");
    }
  }, [error]);

  const handleInputFocus = useCallback(() => {
    if (!error) {
      setVariation("focus");
    }
  }, [error]);

  const handleInputBlur = useCallback(() => {
    if (value.length > 1 && !error) {
      return setVariation("filled");
    }
  }, [error, value]);

  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel color="gray.400">{label}</FormLabel>}

      <InputGroup flexDirection="column">
        <ChakraInput
          id={name}
          name={name}
          onChangeCapture={(e) => setValue(e.currentTarget.value)}
          onBlurCapture={handleInputBlur}
          onFocus={handleInputFocus}
          borderColor={inputVariation[variation]}
          color={inputVariation[variation]}
          variant="outline"
          bg="gray.0"
          _placeholder={{ color: "gray.300" }}
          _focus={{
            bg: "gray.100",
          }}
          size="lg"
          h="60px"
          ref={ref}
          {...rest}
        />

        {!!error && (
          <FormErrorMessage color="negative">{error.message}</FormErrorMessage>
        )}
      </InputGroup>
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
