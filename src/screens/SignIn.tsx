import { useNavigation } from '@react-navigation/native'
import {useForm, Controller} from 'react-hook-form';
import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base'

import { AuthNavigatorRoutesProps } from '@routes/auth.routes'

type FormDataProps = {
  email: string;
  password: string;
}

import { Input } from '@components/Input'
import { Button } from '@components/Button'

import LogoSvg from '@assets/logo.svg'
import BackgroundImg from '@assets/background.png'

export function SignIn() {
  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>();

  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  function handleNewAccount() {
    navigation.navigate('signUp')
  }

  function handleSignIn({ email, password }: FormDataProps) {
    
  }

  return (
    <ScrollView 
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={10} pb={10}>
        <Image 
          source={BackgroundImg} 
          defaultSource={BackgroundImg}
          resizeMode='contain' 
          position="absolute"
          alt="duas pessoas treinando na academia bicicleta" 
        />

        <Center my={24}>
          <LogoSvg/>

          <Text color="gray.100" fontSize="sm">
            Treine sua mente e o seu corpo
          </Text>
        </Center>

        <Center mb={10}>
          <Heading mb={6} color="gray.100">
            Acesse sua conta
          </Heading>

          <Controller
            control={control}
            name="email"
            rules={{
              required: 'Informe seu email',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'E-mail inválido',
              }
            }}
            render={({field: { onChange, value }}) => (
              <Input
                placeholder="Email"
                placeholderTextColor={errors.email?.message ? 'white' : 'gray.300'}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={onChange}
                value={value}
                errorMessage={errors.email?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            rules={{
              required: 'Informe sua senha',
              minLength: 9,
            }}
            render={({field: { onChange, value }}) => (
              <Input 
                placeholder="Senha"
                placeholderTextColor={errors.password?.message ? 'white' : 'gray.300'} 
                secureTextEntry 
                onChangeText={onChange}
                value={value}
                errorMessage={errors.password?.message}
              />
            )}
          /> 

          <Button 
            title="Acessar" 
            onPress={handleSubmit(handleSignIn)} 
          />
        </Center>

        <Center mt={28} justifyContent="flex-end">
          <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">
            Ainda não tem acesso?
          </Text>

          <Button 
            title="Criar conta" 
            variant="outline" 
            onPress={handleNewAccount} 
          />
        </Center>
      </VStack>
    </ScrollView>
  )
}