import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { Heading, Image, HStack, VStack, Text, Icon } from 'native-base'
import { Entypo } from '@expo/vector-icons'

type Props = TouchableOpacityProps & {

}

export function ExerciseCard({...rest}: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack bg="gray.500" alignItems="center" p={2} pr={4} rounded="md" mb={3}>
        <Image 
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH3nymzg_sWcIlh58heTh2cYoa2KKashsuA5YKP9QPHmni-1sRfSXXtd7E17FUs8iNZLY&usqp=CAU' }}
          alt="Ilustração de como se deve malhar remada unilateral"
          rounded="md"
          resizeMode="center"
          mr={4}
          w={16}
          h={16}
        />

        <VStack flex={1}>
          <Heading fontSize="lg" color="white" fontFamily="heading">
            Remada unilateral
          </Heading>
          <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2}>
            3 séries X 12 repetições 
          </Text>
        </VStack>

        <Icon as={Entypo} name="chevron-thin-right" color="gray.300" />
      </HStack>
    </TouchableOpacity>
  )
}