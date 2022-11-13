import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { VStack, Center, ScrollView, Text, Skeleton } from 'native-base'

import { ScreenHeader } from '@components/ScreenHeader'
import { UserPhoto } from '@components/UserPhoto'

const PHOTO_SIZE = 33;

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false)

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <ScrollView>
      <Center mt={5} px={10}>
        {
          photoIsLoading ?
            <Skeleton 
              w={PHOTO_SIZE} 
              h={PHOTO_SIZE} 
              rounded="full" 
              startColor="gray.500"
              endColor="gray.400"
            />
            :
            <UserPhoto 
              source={{ uri: 'https://github.com/humbertoromanojr.png' }}
              alt="Imagem do usuário"
              size={PHOTO_SIZE} 
              mr={4}
            />
        }

        <TouchableOpacity>
          <Text color="gray.200" fontWeight="bold" fontSize="md" mb={8} mt={2}>
            Alterar foto
          </Text>
        </TouchableOpacity>
      </Center>
      </ScrollView>
    </VStack>
  )
}