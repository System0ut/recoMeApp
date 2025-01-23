import { View, Text, StyleSheet, Button, Alert,
         Appearance, Image, FlatList,  } from 'react-native'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Link } from 'expo-router'
import { Colors } from '@/constants/Colors';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import { recoItems } from '@/constants/RecomenExample'
import { recoImages } from '@/constants/recomenExampleImages'
import { hide } from 'expo-splash-screen';

const app = () => {
  const colorScheme = Appearance.getColorScheme()
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  const imageMap = {
    img0: require("@/assets/images/imagenesPrueba/libroPrueba1.jpg"),
    img1: require("@/assets/images/imagenesPrueba/peliculaPrueba1.jpg"),
    img3: require("@/assets/images/imagenesPrueba/cancionPrueba1.jpg"),
}

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
              <Link href='/settingsPage'>
                <Icon name="settings" size={40} color="black"/> 
              </Link>
            </View>
          </View>
          <View style={styles.BoxList}>
            <FlatList 
              data={recoItems}
              keyExtractor= { (item) => item.id.toString() }
              renderItem= {({ item })=> (
                <View style={styles.containerReco}> 
                  <View style={styles.containerUser1}>
                    <View style={styles.boxUserItem}>
                      <Image 
                        source={require('@/assets/images/UserPhoto.png')}
                        style={styles.userItemImage}
                      /> 
                    </View>
                    <View style={styles.textItemContainer}> 
                      <View style={styles.boxTitleItem}>
                        <Text style={styles.TextTitleItem}>{item.title}</Text> 
                      </View>
                      <View style={styles.boxCommentItem}>
                        <Text style={styles.TextTitleItem}>{item.description}</Text> 
                      </View>
                    </View>
                    <View style={styles.containerImageItem}>
                      <View style={styles.boxImagenItem}>
                        <Image 
                          source={
                            item.image.length > 0
                            ? imageMap[item.image]
                            : require('@/assets/images/imagenesPrueba/fotoEjemplo.jpg')
                          }            
                          style={styles.imageItem}                    
                        />                                               
                      </View>
                    </View>
                </View>
                <View style={styles.containerUser2}>
                  <Text style={{marginLeft:5}}>{item.hastag}</Text>
                </View>
            </View>
              )}
            /> 


            
            
          </View>
          <View style={[
            styles.guiaBase,
            {flexDirection: 'row'}
            ]}
          >
            <View style={styles.userBox}>
              <Link href='/userPage'>
                <Image 
                  source={require('@/assets/images/UserPhoto.png')}
                  style={styles.userImage}
                />
              </Link>
            </View> 
            <View style={styles.addBox}>
              <Link href='/addPage'>
                <Icon name="add" size={50} color="black"/>
              </Link>
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
    justifyContent: 'center',
    alignSelf: 'center',
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
  containerReco: {
    marginTop: '5%',
    width: '95%',
    height: 125,
    borderRadius: 5,
    backgroundColor: '#CA6F1E',
    alignSelf: 'center',
  },
  containerUser1: {
    flexDirection: 'row',
  },
  containerUser2: {
    flex: 1,
    backgroundColor: ' #e5e7e9',
    borderRadius: 5,
    alignContent:'center',
    
  },
  boxUserItem: {
    width: 65,
    height: 65,
    borderRadius: 65/2,
    margin: 5,
    overflow: 'hidden'
  },
  userItemImage: {
    width: 65,
    height: 65,
    resizeMode: 'cover'
  },
  textItemContainer: {
    width: '60%',
    height: 90,
    //backgroundColor: 'grey',
    flexDirection: 'column'
  },
  boxTitleItem: {
    width: '100%',
    height: 24,
    //backgroundColor: 'orange',
    marginTop: 5,
  },
  TextTitleItem: {
    fontSize: 12,
    color: 'black',
    textAlign: 'center',
  },
  boxCommentItem: {
    flex: 1,
    //backgroundColor: 'purple',
  },
  containerImageItem: {
    flex: 1,
    margin: 5,
    //backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 5,
  },
  boxImagenItem: { // no se usa
    flex: 1,
    margin: 5,
    //backgroundColor: 'brown',
    borderRadius: 5,
    alignSelf: 'center',
  },
  imageItem: {
    flex: 1,
    // width: 65,
    // height: 65,
    resizeMode: 'contain'
  },
  BoxList: {
    marginTop: '5%',
    width: 'auto',
    height: '78%'
  },

  guiaBase: {
    flex: 1,
  },
})