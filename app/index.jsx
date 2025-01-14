import { View, Text, StyleSheet, Dimensions, ActivityIndicator, TouchableOpacity} from 'react-native'
import { Link } from 'expo-router'

const app = () => {
  const { height } = Dimensions.get('window');
  return (
    <View style={{backgroundColor: 'black',flex:1}}>
      <View style={styles.containerLogo}>
        <View style={styles.rectanguloLogo}>
          <Text style={styles.textoPrueba}>RecoMe</Text>
        </View>
      </View>
      <ActivityIndicator
        style={styles.loader}
        size='large'
        color='white'
      />
      <Link href="/mainPage" replace> 
        <Text style={{color:'white', textAlign:'center',justifyContent:'center'}}>Pagina Inicio</Text>
      </Link>
    </View>
  )
}
export default app

const styles = StyleSheet.create({
  containerLogo: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rectanguloLogo: {
    width: 319,
    height: 122,
    backgroundColor: '#EC713D',
    borderRadius: 25,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: '60%'
  },
  textoPrueba: {
    color: 'white',
    fontSize: 64,
    fontFamily: 'IrishGrover',
    textAlign: 'center',
  },
  loader: {
    alignContent: 'center',
    marginTop: '20%',
    marginBottom: 100 // eliminar al final (es para hacer espacio al boton de pasar pagina)
  }
})