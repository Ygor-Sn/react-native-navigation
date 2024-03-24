import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';


const Notifications = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Text>Notifications</Text>
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


export default Notifications