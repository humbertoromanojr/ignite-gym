import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import {VStack, Image, Text, Center, Heading, ScrollView} from 'native-base';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

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

const signUpSchema = yup.object({
  name: yup.string().required('Informe o nome.').min(4, 'Mínimo 4 caracteres.'),
  email: yup.string().required('Informe o email.').email('Email é inválido.'),
  password: yup.string().required('Informe a senha.').min(7, 'Mínimo 7 caracteres.'),
  password_confirm: yup.string().required('Confirme a senha.').oneOf([yup.ref('password'), null], 'Senhas diferentes.')
})

export function SignUp() {
  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  });

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
          <Heading mb={6} color="gray.100" fontFamily="heading">
            Crie sua conta
          </Heading>

          <Controller
            control={control}
            name="name"
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
          mt={12}
          title="Voltar para o login"
          variant="outline"
          onPress={handleGoBack}
        />
      </VStack>
    </ScrollView>
  );
}
