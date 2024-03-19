import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './src/screens/Home';
import Next from './src/screens/Next';
import Search from './src/screens/Search';
import { BottomNavigation } from './src/components/BottomNavigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <BottomNavigation />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});


export default App