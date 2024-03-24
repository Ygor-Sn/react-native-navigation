import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';


const SignUp = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Text>SignUp</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});


export default SignUp