import React, { useContext } from "react";
import { View, Text, StyleSheet, Image, ImageBackground, FlatList } from "react-native";
import { Link } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ThemeContext } from "@/context/themeContext";
import { stackItems } from '@/constants/stackExample';

const Profile = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
          <ImageBackground 
            source={require('@/assets/images/imagenesPrueba/fondoProfile.jpg')}
            style={styles.namePhoto}
          >
            <View style={styles.userPhotoBox}>
              <Image 
                source={require('@/assets/images/UserPhoto.png')}
                style={styles.userPhoto}
              />
            </View>
            <View style={styles.userNameBox}>
              <Text style={[styles.followersText, { color: 'white' }]}>Followers: 15k</Text>
              <Text style={[styles.nameText, { color: 'white' }]}>Borja3268</Text>
            </View> 
          </ImageBackground>

          <View style={styles.listBox}>
            <FlatList
              data={stackItems}
              keyExtractor={(item) => item.id.toString()}
              numColumns={2}
              renderItem={({ item }) => (
                <View style={styles.imageBox}>
                  <ImageBackground
                    source={require('@/assets/images/imagenesPrueba/backgroundBooks.jpg')} 
                    style={styles.stackBox}
                  >  
                    <Text style={[styles.stackText, { color: theme.textButton }]}>Recomendación {item.tipo}</Text>
                  </ImageBackground>
                </View>  
              )}
            />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  namePhoto: {
    height: 175,
    flexDirection: 'row',
    resizeMode: 'cover',
  },
  userPhotoBox: {
    height: 150,
    width: 150,
    borderRadius: 75, // Mitad del tamaño para hacerlo circular
    margin: 15,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#EC713D', // Color de acento
  },
  userPhoto: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  userNameBox: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 10,
  },
  followersText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  nameText: {
    fontSize: 28,
    fontFamily: 'IrishGrover',
  },
  listBox: {
    flex: 1,
    padding: 10,
  },
  imageBox:{
    height: 180,
    width: '45%', 
    borderRadius: 20,
    margin: 10,
    overflow: 'hidden',
  },
  stackBox: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stackText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Fondo semitransparente para el texto
    borderRadius: 10,
  },
});