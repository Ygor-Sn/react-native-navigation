import { StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { BottomNavigation } from './src/components/BottomNavigation';


const App = () => {
      
  return (
    <PaperProvider>
        <BottomNavigation />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});


export default App