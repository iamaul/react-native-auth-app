import React from 'react';
import {FormControl, IInputProps, Input, Stack} from 'native-base';

export interface FormProps extends IInputProps {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  marginBottom?: number;
}

const Form: React.FC<FormProps> = (props): JSX.Element => {
  const {
    label,
    helperText,
    errorMessage,
    marginBottom,
    isRequired,
    isDisabled,
    isReadOnly,
    paddingBottom,
    ...input
  } = props;
  return (
    <FormControl
      isRequired={isRequired}
      isInvalid={Boolean(errorMessage)}
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}>
      <Stack marginBottom={marginBottom || 4}>
        {label && <FormControl.Label>{label}</FormControl.Label>}
        <Input
          paddingX={0}
          paddingTop={0}
          paddingBottom={paddingBottom || 1}
          {...input}
        />
        {helperText && (
          <FormControl.HelperText>{helperText}</FormControl.HelperText>
        )}
        {errorMessage && (
          <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
        )}
      </Stack>
    </FormControl>
  );
};

export default Form;
