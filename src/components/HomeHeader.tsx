import { TouchableOpacity } from 'react-native'
import { HStack, VStack,  Heading, Text, Icon } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'

import { UserPhoto } from './UserPhoto'

export function HomeHeader() {
  return (
    <HStack bg="gray.600" alignItems="center" pt={16} pb={5} px={8}>
      <UserPhoto 
        source={{ uri: 'https://github.com/humbertoromanojr.png' }}
        alt="Imagem do usuário"
        size={16} 
        mr={4}
      />

      <VStack flex={1}> 
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

      <TouchableOpacity>
        <Icon 
          as={MaterialIcons}
          name="logout"
          color="gray.100"
          size={8}
        />
      </TouchableOpacity>
    </HStack>
  )
}