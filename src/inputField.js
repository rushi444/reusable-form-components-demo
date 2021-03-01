import { useController } from "react-hook-form";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const useMetaError = ({ invalid, isTouched }) => {
  const errorMessage = (isTouched && invalid?.message) || "";
  return {
    errorMessage,
    hasError: !!errorMessage,
  };
};

export const InputField = (props) => {
  const { type = "text", label } = props;
  const { field, meta } = useController(props);
  const { errorMessage, hasError } = useMetaError(meta);
  return (
    <div>
      <FormControl isInvalid={hasError}>
        <FormLabel>{label}</FormLabel>
        <Input {...field} type={type} />
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      </FormControl>
    </div>
  );
};
