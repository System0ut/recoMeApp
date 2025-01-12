import { View, Text, StyleSheet, Button, Alert, Appearance } from 'react-native'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Link } from 'expo-router'
import { Colors } from '@/constants/Colors';

const app = () => {
  const colorScheme = Appearance.getColorScheme()
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={{paddingBottom: 10}}>
          <Text style={{color: 'white', alignContent: 'center'}}>Pagina principal</Text>
        </View>
        <Button  
          title='I am a button'
          onPress={() => {Alert.alert('Button pressed')}}
        />
        </SafeAreaView>
    </SafeAreaProvider>
  );
}
export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black'
  }
})