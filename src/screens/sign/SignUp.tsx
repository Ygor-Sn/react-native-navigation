import React from 'react';
import { Platform, ScrollView, StyleSheet, View } from 'react-native';
import { Icon, Text, Button, MD3Colors, TextInput, Menu, Divider, Provider, IconButton } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '../../icons/logo.svg';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';


const SignIn = () => {
  const [visible, setVisible] = React.useState(false);
  const [value, setValue] = React.useState('');

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const [date, setDate] = React.useState(new Date());
  const [show, setShow] = React.useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{alignItems: 'center'}} style={styles.container_scrool}>


      <Logo width={150} height={150} style={styles.logo}/>
      <Text style={styles.txt_h1}>Cadastrar-se</Text>
      <TextInput
      mode="outlined"
      label="Nome"
      left={<TextInput.Icon icon="account" />}
      style={styles.input}
      />
      <TextInput
      mode="outlined"
      label="Usuário"
      left={<TextInput.Icon icon="at" />}
      style={styles.input}
      />
      <TextInput
        mode="outlined"
        label="Gênero"
        value={value}
        editable={false}
        left={<TextInput.Icon icon="human" />}
        right={<TextInput.Icon icon="menu-down" onPress={openMenu} />}
        style={styles.input}
      />

      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Text onPress={openMenu} style={styles.hideit} >Show menu</Text>}
      >
        <Menu.Item onPress={() => {setValue('Masculino'); closeMenu();}} title="Masculino" />
        <Menu.Item onPress={() => {setValue('Feminino'); closeMenu();}} title="Feminino" />
        <Divider />
        <Menu.Item onPress={() => {setValue('Não Binário'); closeMenu();}} title="Não Binário" />
        <Menu.Item onPress={() => {setValue('Outro'); closeMenu();}} title="Outro" />
      </Menu>

      
      <TextInput
      mode="outlined"
      label="Data de Nascimento"
      left={<TextInput.Icon icon="calendar" />}
      value={format(date, 'dd/MM/yyyy', { locale: ptBR })}
      style={styles.input}
      editable={false}
      />
      <Button onPress={showDatepicker}>Selecionar data</Button>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'date'}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      

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
      <Button icon="account-plus" mode="outlined" buttonColor="" style={styles.ult_button} >
        Cadastrar-se
      </Button>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  container_scrool: {
    padding: 20,
  },
  txt_h1: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  logo: {
    margin: 16,
  },
  input: {
    width: '100%',
    margin: 8,
  },
  hideit: {
    fontSize: 1,
  },
  txtleft: {
    textAlign: 'left',
    width: '100%',
    marginBottom: 16,
  },
  button: {
    width: '100%',
    margin: 8,
  },
  ult_button: {
    width: '100%',
    margin: 8,
    marginBottom: 32,
  }
});


export default SignIn