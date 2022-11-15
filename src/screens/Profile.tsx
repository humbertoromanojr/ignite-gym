import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { VStack, Center, ScrollView, Text, Skeleton, Heading } from 'native-base'
import * as ImagePicker from 'expo-image-picker'

import { ScreenHeader } from '@components/ScreenHeader'
import { UserPhoto } from '@components/UserPhoto'
import { Input } from '@components/Input';
import { Button } from '@components/Button';

const PHOTO_SIZE = 33;

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false)
  const [userPhoto, setUserPhoto] = useState('https://github.com/humbertoromanojr.png')

  async function handleUserPhotoSelect() {
    setPhotoIsLoading(true)
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4,4],
        allowsEditing: true,
      })
  
      if (photoSelected.canceled) {
        return 
      }

      if (photoSelected.uri) {
        setUserPhoto(photoSelected.uri)
      }
      
    } catch (error) {
      console.log('== Profile - handleUserPhotoSelect ==> ', error);
    
    } finally {
      setPhotoIsLoading(false)
    }
    
  }

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />

      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center mt={5} px={6}>
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
                source={{ uri: userPhoto }}
                alt="Imagem do usuário"
                size={PHOTO_SIZE} 
                mr={4}
              />
          }

          <TouchableOpacity onPress={handleUserPhotoSelect}>
            <Text color="gray.200" fontWeight="bold" fontSize="md" mb={8} mt={2}>
              Alterar foto
            </Text>
          </TouchableOpacity>

          <Input 
            bg="gray.600"
            placeholder='Nome'
          />
          <Input 
            bg="gray.600"
            value='seuemail@gmail.com'
            isDisabled
          />

          <Heading color="gray.200" alignSelf="flex-start" fontSize="md" mb={2} px={1} mt={6}>
            Alterar senha
          </Heading>

          <Input 
            bg="gray.600"
            placeholder="Senha antiga"
            secureTextEntry
          />

          <Input 
            bg="gray.600"
            placeholder="Nova senha"
            secureTextEntry
          />

          <Input 
            bg="gray.600"
            placeholder="Confirme a nova senha"
            secureTextEntry
          />

          <Button title="Atualizar" />
        </Center>
      </ScrollView>
    </VStack>
  )
}