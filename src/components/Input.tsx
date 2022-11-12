import { Input as NativeBaseInput, IInputProps } from 'native-base'

export function Input({...rest}: IInputProps) {
  return (
    <NativeBaseInput 
      bg="gray.700"
      borderWidth={0}
      fontSize="md"
      color="white"
      fontFamily="body"
      placeholderTextColor="gray.300"
      _focus={{
        bg: "gray.700",
        borderWidth: 2,
        borderColor: 'green.500',
      }}
      h={14}
      mx={4}
      mb={4}

      {...rest}
    />
  )
}