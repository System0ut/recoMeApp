import { View, Text, StyleSheet, Button, Alert, Appearance, Image} from 'react-native'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Link } from 'expo-router'
import { Colors } from '@/constants/Colors';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const app = () => {
  const colorScheme = Appearance.getColorScheme()
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.logo}>
              <Text style={styles.TextLogo}>RecoMe</Text>
            </View>
            <View style={[styles.searchBox, {flexDirection: 'row'}]}>
              <View style={styles.searchTextContainer}>
                <TextInput
                  style={styles.input}
                  placeholder=""
                  placeholderTextColor="#999"
                />
              </View>
              <Icon name="search" size={30} color="black"/>
            </View>      
            <View style={styles.settingBox}>
              <Icon name="settings" size={30} color="black"/>
            </View>
          </View>
          <View style={styles.guiaLista}>

          </View>
          <View style={[
            styles.guiaBase,
            {flexDirection: 'row'}
            ]}
          >
            <View style={styles.userBox}>
              <Image 
                source={require('@/assets/images/UserPhoto.png')}
                style={styles.userImage}
              />
            </View> 
            <View style={styles.addBox}>
              <Icon name="add" size={50} color="black"/>
            </View> 
            <View style={styles.randomBox}>
            <Icon2 name="random" size={40} color="black"/>
            </View> 
          </View>
          </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  logo: {
    width: 153,
    height: 50,
    backgroundColor: '#EC713D',
    borderRadius: 25,
    marginTop: '5%',
    justifyContent: 'center'
  },
  TextLogo: {
    fontSize: 24,
    color: 'white',
    fontFamily: 'IrishGrover',
    textAlign: 'center',
  },
  searchBox: {
    width: 160,
    height: 42,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginLeft: '5%',
    marginTop: '7%',
    alignItems: 'center'
  },
  searchTextContainer: {
    width: 125,
    height: 42,
  },
  searchText: {
    width: 'auto',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  settingBox: {
    width: 50,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 50/2,
    marginTop: '6%',
    marginLeft: '3%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  userBox: {
    width: 60,
    height: 60,
    borderRadius: 60/2,
    backgroundColor: '#EC713D',
    marginLeft: '10%',
    alignSelf: 'center',
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#EC713D',
  },
  userImage: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
  },
  addBox: {
    width: 60,
    height: 60,
    borderRadius: 60/2,
    backgroundColor: '#49ee0b',
    marginLeft: '17%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  randomBox: {
    width: 60,
    height: 60,
    borderRadius: 60/2,
    backgroundColor: '#FFFFFF',
    marginLeft: '20%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  guiaLista: {
    marginTop: '5%',
    width: 'auto',
    height: '78%',
    backgroundColor: 'grey'
  },
  guiaBase: {
    flex: 1,
  },
})