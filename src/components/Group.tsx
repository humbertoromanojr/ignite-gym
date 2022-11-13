import { Text, Pressable, IPressableProps } from 'native-base'

type Props = IPressableProps & {
  name: string;
  isActive: boolean;
}

export function Group({ name, isActive, ...rest }: Props) {
  return (
    <Pressable
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
      bg="gray.600"
      rounded="md"
      isPressed={isActive}
      _pressed={{
        borderColor: "green.500",
        borderWidth: 1
      }}
      mr={3}
      w={24}
      h={10}

      {...rest}
    >
      <Text
        color={isActive ? "green.500" : "gray.200"}
        textTransform="uppercase"
        fontSize="xs"
        fontWeight="bold"
      >
        {name}
      </Text>
    </Pressable>
  )
}