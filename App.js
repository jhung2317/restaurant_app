import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import TabNav from './App/Navigations/TabNav';

export default function App() {
  return (
    <View style={styles.container}>
     <NavigationContainer>
        <TabNav/>
     </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
    
  },
});
