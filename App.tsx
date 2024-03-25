import { MD3DarkTheme, MD3LightTheme } from 'react-native-paper';
import { BottomNavigation } from './src/components/BottomNavigation';
// import do navegador bpttom
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {ThemeContextProvider, useTheme} from './src/context/ThemeContext';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppState } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import { createStackNavigator } from '@react-navigation/stack';
// rota para signin
import SignIn from './src/screens/sign/SignIn';
const App = () => {
  const { themeType } = useTheme(); // Use o hook useTheme para obter o tipo ade tema atual

  return (
    // Atribuir a theme a MD3DarkTheme no modo escuro, e MD3LightTheme no modo claro
    <ThemeContextProvider>

          <BottomNavigation />
      
      {/* Atribuir a style=light no modo escuro, e dark no modo claro */}
      <StatusBar style={themeType === 'dark' ? 'light' : 'dark'} />
    </ThemeContextProvider>
  );
}

function telas() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App