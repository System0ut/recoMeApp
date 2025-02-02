import React, { useState, useContext, useCallback } from "react";
import { View, Text, Image, StyleSheet, ScrollView, Alert } from "react-native";
import { Link } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { TextInput } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from "expo-file-system";
import { ThemeContext } from "@/context/themeContext";
import Button2 from "@/components/Button";

import { Button, Provider as PaperProvider } from 'react-native-paper';

const addReco = () => {

  const { theme } = useContext(ThemeContext);
  const [inputTitle, setInputTitle] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const [inputScore, setInputScore] = useState('');
  const [inputHashtag, setInputHashtag] = useState('');
  const [imageUri, setImageUri] = useState(null);

  const pickImage = useCallback(async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert("Permiso denegado", "Necesitas permitir el acceso a la galería para seleccionar una imagen.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImageUri(result.uri);
    }
  }, []);

  const saveInfo = useCallback(async () => {
    if (!inputTitle || !inputDescription || !inputScore || !inputHashtag) {
      Alert.alert("Error", "Por favor, completa todos los campos obligatorios.");
      return;
    }

    if(inputScore>10 || inputScore<0){
      Alert.alert("Error", "Por favor, ingrese un valor entre 0 y 10")
      return;
    }

    try {
      const path = FileSystem.documentDirectory + 'recoData.json';
      const fileExists = await FileSystem.getInfoAsync(path);
      const existingData = fileExists.exists ? JSON.parse(await FileSystem.readAsStringAsync(path)) : [];

      const newData = {
        id: existingData.length + 1,
        user: 'User1',
        title: inputTitle,
        description: inputDescription,
        score: parseFloat(inputScore),
        hashtag: inputHashtag.split(' ').map(tag => tag.trim()),
        image: imageUri || "",
      };

      existingData.push(newData);
      await FileSystem.writeAsStringAsync(path, JSON.stringify(existingData, null, 2));
      Alert.alert("Éxito", "Datos guardados correctamente.");
    } catch (error) {
      console.error('Error al guardar los datos:', error);
      Alert.alert("Error", "Hubo un problema al guardar los datos.");
    }
  }, [inputTitle, inputDescription, inputScore, inputHashtag, imageUri]);


  // function color score
  const getScoreColor = (value) => {
    const numericValue = parseFloat(value);
    if (numericValue >= 0 && numericValue <= 4) {
      return "red"; // Rojo para valores entre 0 y 4
    } else if (numericValue >= 5 && numericValue <= 7) {
      return "orange"; // Amarillo para valores entre 5 y 7
    } else if (numericValue >= 8 && numericValue <= 10) {
      return "green"; // Verde para valores entre 8 y 10
    } else {
      return theme.text; // Color por defecto del tema si no está en los rangos
    }
  };


  return(
    <PaperProvider>
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <SafeAreaView style={{flex: 1, backgroundColor: theme.background}}>
        <View style={[styles.topBox, { backgroundColor: theme.containerUser }]}>
          <Link href='/mainPage' replace>
            <Icon name="arrow-back" size={40} color={theme.text} />
          </Link>
          <Text style={[styles.topTitleText, { color: theme.text }]}>Create Post</Text>
        </View>
        <View style={[styles.sepLine, { backgroundColor: theme.border }]} />
          <ScrollView contentContainerStyle={{padding: 16}}>
            <Text style={[styles.contentTitle, { color: theme.text }]}>Title</Text>
            <TextInput
              style={[styles.response1, { backgroundColor: theme.search, color: theme.textHolder }]}
              placeholder="Enter Title"
              placeholderTextColor={theme.placeholder}
              onChangeText={setInputTitle}
            />
            <Text style={[styles.contentTitle, { color: theme.text }]}>Information</Text>
            <TextInput
              style={[styles.response2, { backgroundColor: theme.search, color: theme.textHolder }]}
              placeholder="Enter post information"
              placeholderTextColor={theme.placeholder}
              multiline
              onChangeText={setInputDescription}
            />
            <Text style={[styles.contentTitle, { color: theme.text }]}>Score</Text>
            <View style={styles.responseBox3}>
              <TextInput
                style={[styles.response3, { backgroundColor: theme.search, color: getScoreColor(inputScore)}]}
                placeholder="0"
                placeholderTextColor={theme.placeholder}
                keyboardType="number-pad"
                onChangeText={setInputScore}
                
              />
              <View style={[styles.scoreNumBox, { backgroundColor: theme.containerUser }]}>
                <Text style={[styles.scoreNum, { color: theme.text }]}>/ 10</Text>
              </View>
            </View>
            <Text style={[styles.contentTitle, { color: theme.text }]}>Hashtags</Text>
            <TextInput
              style={[styles.response1, { backgroundColor: theme.search, color: theme.textHolder }]}
              placeholder="Enter Hashtags"
              placeholderTextColor={theme.placeholder}
              onChangeText={setInputHashtag}
            />
            <Text style={[styles.contentTitle, { color: theme.text }]}>Image (optional)</Text>
            <View style={styles.imageContainer}>
              <View style={[styles.imageBox, { backgroundColor: theme.search }]}>
                {imageUri ? (
                  <Image source={{ uri: imageUri }} style={styles.image} />
                ) : (
                  <Image source={require('@/assets/images/imageIcon.png')} style={styles.image} />
                )}
              </View>
              <Button2 title="Upload Image" onPress={pickImage} style={[styles.uploadBox,{color: 'red'}]} />
            </View>
          </ScrollView>
          <View style={[styles.sepLine, { backgroundColor: theme.border }]} />
          <View style={[styles.doneContainer, { backgroundColor: theme.containerUser }]}>
            {/* <Button2 title="Done" onPress={saveInfo} style={styles.done} />  */}
            <Button 
              mode="contained" 
              buttonColor="#5664F5"
              //dark
              >
                Done
              </Button>
          </View>
    </SafeAreaView>
    </SafeAreaProvider>
    </GestureHandlerRootView>
    </PaperProvider>
  );
};


export default addReco;

const styles = StyleSheet.create({
  
  topBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  topTitleText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  sepLine: {
    height: 1,
    width: '100%',
  },
  contentTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 16,
  },
  response1: {
    height: 50,
    borderRadius: 8,
    padding: 8,
    marginTop: 8,
    fontWeight: 'bold'
  },
  response2: {
    height: 150,
    borderRadius: 8,
    padding: 8,
    marginTop: 8,
    fontWeight: 'bold'
  },
  responseBox3: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  response3: {
    height: 50,
    width: 80,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    padding: 8,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
  scoreNumBox: {
    height: 50,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  scoreNum: {
    fontSize: 18,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  imageBox: {
    width: 100,
    height: 100,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  uploadBox: {
    marginLeft: 16,
    padding: 8,
    borderRadius: 8,
  },
  doneContainer: {
    padding: 16,
    height: '10%',
    justifyContent: 'center',
    
  },

  done: {
    width: '100%',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },

})