import { HStack, VStack,  Heading, Text } from 'native-base'
import { UserPhoto } from './UserPhoto'

export function HomeHeader() {
  return (
    <HStack bg="gray.600" alignItems="center" pt={16} pb={5} px={8}>
      <UserPhoto 
        source={{ uri: 'https://github.com/humbertoromanojr.png' }}
        size={16} 
        mr={4}
        alt="Imagem do usuário"
      />
      <VStack>
        <Text color="gray.100" fontSize="md">
          Olá
        </Text>

        <Heading color="gray.100" fontSize="md">
          Humberto Jr
        </Heading>

        <Text color="gray.100" fontSize="sm">
          Bem vindo(a) de volta
        </Text>
      </VStack>
    </HStack>
  )
}