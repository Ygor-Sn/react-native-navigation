import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';



const Profile = () => {

  return (
    <SafeAreaView style={styles.container}>
        <Text>Profile</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

const test = () => {
  return(
  <SafeAreaView style={styles.container}>
      <Text>test</Text>
  </SafeAreaView>
  )
}

export default Profile