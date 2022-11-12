import { Button as NativeBaseButton, IButtonProps, Text } from 'native-base'

type Props = IButtonProps & {
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return (
    <NativeBaseButton 
      bg="green.700"
      rounded="sm"
      _pressed={{ bg: "green.500" }}
      w="90%"
      h={14}
      my={6}

      {...rest}
    >
      <Text 
        color="white" 
        fontFamily="heading" 
        fontSize="2xl"
      >
        {title}
      </Text>
    </NativeBaseButton>
  )
}