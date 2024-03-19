import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';


const SignIn = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Text>SignIn</Text>
        <Button icon="camera">
          Press me
        </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});


export default SignIn