import { MD3DarkTheme } from 'react-native-paper';
import { BottomNavigation } from './src/components/BottomNavigation';
import { ThemeProvider } from 'react-native-paper';

const App = () => {
      
  return (
    <ThemeProvider theme={MD3DarkTheme}>
      <BottomNavigation />
    </ThemeProvider>
  );
}

export default App