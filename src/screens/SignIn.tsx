import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon, Text, Button, MD3Colors, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '../icons/logo.svg';


const SignIn = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Logo width={150} height={150} style={styles.logo}/>
      <Text>Entrar</Text>
      <TextInput
      mode="outlined"
      label="Email"
      left={<TextInput.Icon icon="email" />}
      style={styles.input}
      />
      <TextInput
      mode="outlined"
      label="Senha"
      secureTextEntry
      left={<TextInput.Icon icon="lock" />}
      right={<TextInput.Icon icon="eye" />}
      style={styles.input}
      />
      <Text style={styles.txtleft}>Esqueceu a senha?</Text>

      <Button icon="star" mode="contained" buttonColor="" style={styles.button} >
        Entrar
      </Button>
      <Button icon="google" mode="elevated" buttonColor="" style={styles.button} >
        Entrar com Google
      </Button>
      <Button icon="account-plus" mode="outlined" buttonColor="" style={styles.button} >
        Cadastrar-se
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  logo: {
    margin: 16,
  },
  input: {
    width: '100%',

    margin: 8,
  },
  txtleft: {
    textAlign: 'left',
    width: '100%',
    marginBottom: 16,
  },
  button: {
    width: '100%',
    margin: 8,
  }
});


export default SignIn