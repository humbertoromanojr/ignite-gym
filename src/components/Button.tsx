import { Button as NativeBaseButton, IButtonProps, Text } from 'native-base'

type Props = IButtonProps & {
  title: string;
  variant?: 'outline' | 'solid';
}

export function Button({ title, variant = 'solid', ...rest }: Props) {
  return (
    <NativeBaseButton 
      bg={variant === "outline" ? "transparent" : "green.700"}
      borderWidth={variant === "outline" ? 2 : 0}
      borderColor="green.500"
      rounded="sm"
      _pressed={{ bg: variant === "outline" ? "gray.500" : "green.500" }}
      w="90%"
      h={14}

      {...rest}
    >
      <Text 
        color={variant === "outline" ? "green.500" : "white"} 
        fontFamily="heading" 
        fontSize="md"
      >
        {title}
      </Text>
    </NativeBaseButton>
  )
}