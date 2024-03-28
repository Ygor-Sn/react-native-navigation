import { MD3DarkTheme, MD3LightTheme } from 'react-native-paper';
import { BottomNavigation } from './src/components/BottomNavigation';
import {ThemeContextProvider, useTheme} from './src/context/ThemeContext';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppState } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from './src/screens/sign/SignIn';

const App = () => {
  const { themeType } = useTheme(); // Use o hook useTheme para obter o tipo de tema atual

  return (
    // Atribuir a theme a MD3DarkTheme no modo escuro, e MD3LightTheme no modo claro
    <ThemeContextProvider>

          <BottomNavigation />
      
      {/* Atribuir a style=light no modo escuro, e dark no modo claro */}
      <StatusBar style={themeType === 'dark' ? 'light' : 'dark'} />
    </ThemeContextProvider>
  );
}


//test
import { createStackNavigator, createAppContainer } from 'react-navigation';

const mainNavigation = createStackNavigator({
  SignIn,
});

export default createAppContainer(mainNavigation);


