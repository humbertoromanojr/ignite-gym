import { useNavigation } from '@react-navigation/native'
import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base'

import { Input } from '@components/Input'
import { Button } from '@components/Button'

import LogoSvg from '@assets/logo.svg'
import BackgroundImg from '@assets/background.png'

export function SignUp() {
  
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <ScrollView 
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={10} pb={10}>
        <Image 
          source={BackgroundImg} 
          resizeMode='contain' 
          position="absolute"
          alt="duas pessoas treinando na academia bicicleta" 
        />

        <Center my={20}>
          <LogoSvg/>

          <Text color="gray.100" fontSize="sm">
            Treine sua mente e o seu corpo
          </Text>
        </Center>

        <Center mb={6}>
          <Heading mb={6} color="gray.100">
            Crie sua conta
          </Heading>

          <Input 
            placeholder='Nome' 
            keyboardType="default"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Input 
            placeholder='Email' 
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Input 
            placeholder='Senha' 
            secureTextEntry
          />

          <Button title="Criar e acessar" />
        </Center>

        <Button 
          mt={24}
          title="Voltar para o login" 
          variant="outline" 
          onPress={handleGoBack} 
        />
      </VStack>
    </ScrollView>
  )
}