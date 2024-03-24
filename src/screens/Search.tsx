import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import IconSearch from '../icons/search.svg';


const Search = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Text>Search</Text>
        <IconSearch width={100} height={100} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});


export default Search