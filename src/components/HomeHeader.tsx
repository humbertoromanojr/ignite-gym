import { HStack, VStack,  Heading, Text } from 'native-base'

export function HomeHeader() {
  return (
    <HStack bg="gray.600" alignItems="center" pt={16} pb={5} px={8}>
      <VStack>
        <Text color="gray.100" fontSize="md">
          Olá
        </Text>

        <Heading color="gray.100" fontSize="md">
          Humberto Jr
        </Heading>
      </VStack>
    </HStack>
  )
}