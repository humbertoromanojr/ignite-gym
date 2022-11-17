import { Input as NativeBaseInput, IInputProps, FormControl, Text } from 'native-base'

type Props = IInputProps & {
  errorMessage?: string | null;
}

export function Input({ errorMessage = null, isInvalid, ...rest }: Props) {
  const invalid = !!errorMessage || isInvalid

  return (
    <FormControl isInvalid={invalid} mb={4}>
      <NativeBaseInput 
        bg="gray.700"
        borderWidth={0}
        fontSize="md"
        color="white"
        fontFamily="body"
        placeholderTextColor="gray.300"
        isInvalid={invalid}
        _invalid={{
          bg:'red.500',
          borderColor:'red.500',
          borderWidth: 2,
          color:'white',
        }}
        _focus={{
          bg: "gray.700",
          borderWidth: 2,
          borderColor: 'green.500',
        }}
        w="full" 
        h={14}
        mt={2}

        {...rest}
      />

      <FormControl.ErrorMessage> 
        <Text fontSize={16} fontWeight="bold" color="green.500">{errorMessage}</Text>
      </FormControl.ErrorMessage>
    </FormControl>
  )
}