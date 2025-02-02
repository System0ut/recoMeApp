import { View, Text, StyleSheet, Button, Alert,
  Appearance, Image, FlatList, TextInput } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import { Colors } from '@/constants/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { recoItems } from '@/constants/RecomenExample';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, useEffect } from 'react';

import { ThemeContext } from "@/context/themeContext";

const app = () => {
  //const colorScheme = Appearance.getColorScheme();
  //const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  const { theme } = useContext(ThemeContext);

  const imageMap = {
    img0: require("@/assets/images/imagenesPrueba/libroPrueba1.jpg"),
    img1: require("@/assets/images/imagenesPrueba/peliculaPrueba1.jpg"),
    img3: require("@/assets/images/imagenesPrueba/cancionPrueba1.jpg"),
  }

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: theme.background }}>
      <SafeAreaProvider>
        <SafeAreaView style={[styles.container, {backgroundColor: theme.background}]}>
          {/* Header */}
          <View style={{width:1,height: 5}} />
          <View style={styles.header}>
            <View style={styles.logo}>
              <Text style={styles.textLogo}>RecoMe</Text>
            </View>
            <View style={[styles.searchBox, {backgroundColor: theme.search}]}>
              <TextInput style={styles.input} placeholder="Buscar..." placeholderTextColor="#999" />
              <Icon name="search" size={24} color={theme.icon} style={styles.searchIcon} />
            </View>
            <Link href='/settingsPage'>
              <Icon name="settings" size={40} color={theme.iconSettings} style={styles.settingIcon} />
            </Link>
          </View>

          {/* Lista de Recomendaciones */}
          <View style={{width:1,height: 20}} />
          <FlatList 
            style={{paddingHorizontal: 15}}
            data={recoItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={[styles.containerReco,{backgroundColor: theme.containerUser}]}> 
                <View style={styles.containerUser1}>
                  <Image source={require('@/assets/images/UserPhoto.png')} style={styles.userItemImage} />
                  <View style={styles.textItemContainer}> 
                    <Text style={[styles.textTitle,{color: theme.text}]}>{item.title}</Text> 
                    <Text style={styles.textDescription}>
                      {item.description.length > 50 
                      ? `${item.description.substring(0, 50)}...` 
                      : item.description}</Text> 
                  </View>
                  <Image 
                  
                    source={
                      item.image.length > 0
                        ? imageMap[item.image]
                        : require('@/assets/images/imagenesPrueba/fotoEjemplo.jpg')
                    }            
                    style={styles.imageItem}

                    //  source={item.image ? require(`@/assets/images/${item.image}`) : require('@/assets/images/imagenesPrueba/fotoEjemplo.jpg')}
                    //  style={styles.imageItem} 
                  />
                </View>
                {/* <Text style={styles.textHashtag}>{item.hastag}</Text> */}
                <View style={styles.hashtagContainer}>
                  <Text style={styles.textHashtag}>
                    {item.hastag.map(word => `#${word}`).join(' ')}
                  </Text>
                </View>




              </View>
            )}
          /> 
          {/* <View style={styles.themeToggleButton}>
            <Button title="Cambiar Tema" onPress={toggleTheme} />
          </View> */}

          {/* Barra de Navegación */}
          <View style={[styles.navBar, {backgroundColor: theme.background}]}>
            <Link href='/userPage'>
              <Image source={require('@/assets/images/UserPhoto.png')} style={styles.navIcon} />
            </Link>
            <Link href='/addPage'>
              <View style={styles.addIcon}>
                <Icon name="add-circle" size={50} color={theme.randomIcon} />
              </View>
            </Link>
            <Link href='/recomPage'>
              <Icon2 name="random" size={40} color={theme.randomIcon} />
            </Link>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
  }

export default app;

const styles = StyleSheet.create({
container: {
flex: 1,
//paddingHorizontal: 15,
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
marginVertical: 10,
paddingHorizontal: 15,
},
logo: {
  width: 140,
  height: 40,
  backgroundColor: '#EC713D',
  borderRadius: 25,
  //marginTop: '5%',
  justifyContent: 'center',
  
},
textLogo: {
fontSize: 24,
color: 'white',
fontWeight: 'bold',
alignSelf: 'center'
},
searchBox: {
flexDirection: 'row',
borderRadius: 10,
paddingHorizontal: 10,
alignItems: 'center',
flex: 1,
marginHorizontal: 10,
},
input: {
flex: 1,
paddingVertical: 5,
fontSize: 16,
color: 'black',
},
searchIcon: {
marginLeft: 5,
},
settingIcon: {
padding: 5,
},
containerReco: {
paddingHorizontal: 15,
backgroundColor: '#2C2C2C',
borderRadius: 8,
padding: 10,
marginBottom: 10,
},
containerUser1: {
flexDirection: 'row',
alignItems: 'center',
},
userItemImage: {
width: 50,
height: 50,
borderRadius: 25,
marginRight: 10,
},
textItemContainer: {
flex: 1,
},
textTitle: {
fontSize: 16,
fontWeight: 'bold',
color: 'white',
},
textDescription: {
fontSize: 14,
color: 'gray',
},
hashtagContainer:{
  padding: 5,
  borderRadius: 8,
  //marginTop: 5,
  alignSelf: 'flex-start',
},
textHashtag: {
fontSize: 18,
color: '#EC713D',
marginTop: 5,
fontWeight: 'bold'
},
imageItem: {
width: 60,
height: 60,
borderRadius: 5,
},
navBar: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
backgroundColor: '#1C1C1C',
paddingVertical: 10,
},
navIcon: {
width: 50,
height: 50,
borderRadius: 25,
},
addIcon:{
  width: 50,
  height: 50,
  borderRadius: 25,
}
});
