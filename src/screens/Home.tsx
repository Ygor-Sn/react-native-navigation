import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';


function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
        <Text>Home</Text>
        <Button icon="camera" onPress={() => navigation.navigate('SignIn')}>
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


export default Home