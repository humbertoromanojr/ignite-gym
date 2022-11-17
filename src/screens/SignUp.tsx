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
  const { control, handleSubmit } = useForm<FormDataProps>();

  const navigation = useNavigation();
  function handleGoBack() {
    navigation.goBack();
  }

  function handleSignUp({ name, email, password, password_confirm }: FormDataProps) {
    console.log(data);
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
            render={({field: { onChange, value }}) => (
              <Input
                placeholder="Nome"
                keyboardType="default"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({field: { onChange, value }}) => (
              <Input
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({field: { onChange, value }}) => (
              <Input 
                placeholder="Senha" 
                secureTextEntry 
                onChangeText={onChange}
                value={value}
              />
            )}
          />          

          <Controller
            control={control}
            name="password_confirm"
            render={({field: { onChange, value }}) => (
              <Input 
                placeholder="Confirme a senha" 
                secureTextEntry 
                onChangeText={onChange}
                value={value}
                onSubmitEditing={handleSubmit(handleSignUp)}
                returnKeyType="send"
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
