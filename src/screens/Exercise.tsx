import { TouchableOpacity } from 'react-native'
import { VStack, HStack, Heading, Icon, Text, Image, Box } from 'native-base'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import { AppNavigatorRoutesProps } from '@routes/app.routes'

import { Button } from '@components/Button'

import BodySvg from '@assets/body.svg'
import SeriesSvg from '@assets/series.svg'
import RepetitionsSvg from '@assets/repetitions.svg'
import React from 'react'

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
          <Heading color="gray.100" fontSize="lg" fontFamily="heading" flexShrink={1} numberOfLines={1}>
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

        <Box bg="gray.600" rounded="md" pb={4} px={4}>
          <HStack alignItems="center" justifyContent="space-around" mb={6} mt={5}>
            <HStack>
              <SeriesSvg />
              <Text color="gray.200" ml={2}>
                3 séries
              </Text>
            </HStack>

            <HStack>
              <RepetitionsSvg />
              <Text color="gray.200" ml={2}>
                12 repetições
              </Text>
            </HStack>
          </HStack>

          <Button title="Marcar como realizado" />
        </Box>
      </VStack>
    </VStack>
  )
}