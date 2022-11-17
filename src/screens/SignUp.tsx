import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import {VStack, Image, Text, Center, Heading, ScrollView} from 'native-base';

import {Input} from '@components/Input';
import {Button} from '@components/Button';

import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
}

export function SignUp() {
  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>();

  const navigation = useNavigation();
  function handleGoBack() {
    navigation.goBack();
  }

  function handleSignUp({ name, email, password, password_confirm }: FormDataProps) {
    
  }

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}>
      <VStack flex={1} px={10} pb={10}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          resizeMode="contain"
          position="absolute"
          alt="duas pessoas treinando na academia bicicleta"
        />

        <Center my={20}>
          <LogoSvg />

          <Text color="gray.100" fontSize="sm">
            Treine sua mente e o seu corpo
          </Text>
        </Center>

        <Center mb={6}>
          <Heading mb={6} color="gray.100">
            Crie sua conta
          </Heading>

          <Controller
            control={control}
            name="name"
            rules={{
              required: 'Informe o seu nome',
              minLength: 4,
              maxLength: 30,
            }}
            render={({field: { onChange, value }}) => (
              <Input
                placeholder="Nome"
                placeholderTextColor={errors.name?.message ? 'white' : 'gray.300'}
                keyboardType="default"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={onChange}
                value={value}
                errorMessage={errors.name?.message}
              />
            )}
          />

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

          <Controller
            control={control}
            name="password_confirm"
            rules={{
              required: 'Confirme sua senha',
              minLength: 9,
            }}
            render={({field: { onChange, value }}) => (
              <Input 
                placeholder="Confirme a senha" 
                placeholderTextColor={errors.password_confirm?.message ? 'white' : 'gray.300'}
                secureTextEntry 
                onChangeText={onChange}
                value={value}
                onSubmitEditing={handleSubmit(handleSignUp)}
                returnKeyType="send"
                errorMessage={errors.password_confirm?.message}
              />
            )}
          />  

          <Button 
            title="Criar e acessar" 
            onPress={handleSubmit(handleSignUp)} 
          />
        </Center>

        <Button
          mt={24}
          title="Voltar para o login"
          variant="outline"
          onPress={handleGoBack}
        />
      </VStack>
    </ScrollView>
  );
}
