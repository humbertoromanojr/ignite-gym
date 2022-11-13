import { TouchableOpacity } from 'react-native'
import { VStack, HStack, Heading, Icon, Text, Image } from 'native-base'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import { AppNavigatorRoutesProps } from '@routes/app.routes'

import BodySvg from '@assets/body.svg'

export function Exercise() {
  const navigation = useNavigation<AppNavigatorRoutesProps>()
  
  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <VStack flex={1}>
      <VStack px={8} bg="gray.600" pt={12}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={Feather} name="arrow-left" color="green.500" size={6} />
        </TouchableOpacity>

        <HStack justifyContent="space-between" alignItems="center" mt={4} mb={4}>
          <Heading color="gray.100" fontSize="lg" flexShrink={1} numberOfLines={1}>
            Puxada frontal
          </Heading>

          <HStack alignItems="center">
            <BodySvg />

            <Text color="gray.200" ml={1} textTransform="capitalize">
              Costas
            </Text>
          </HStack>
        </HStack>
      </VStack>

      <VStack p={8}>
        <Image 
          w="full" h={80}
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH3nymzg_sWcIlh58heTh2cYoa2KKashsuA5YKP9QPHmni-1sRfSXXtd7E17FUs8iNZLY&usqp=CAU' }}
          alt="Ilustração de como se deve malhar remada unilateral"
          mb={3}
          resizeMode="cover"
          rounded="lg"
        />
      </VStack>
    </VStack>
  )
}