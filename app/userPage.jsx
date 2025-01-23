import { View, Text, StyleSheet, Image, ImageBackground, FlatList } from "react-native";
import { Link } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { stackItems } from '@/constants/stackExample'

const profile = () => {

    return(
        <GestureHandlerRootView>
            <SafeAreaProvider>
                <SafeAreaView style={styles.container}>
                    <ImageBackground 
                    source={require('@/assets/images/imagenesPrueba/fondoProfile.jpg')}
                    style={styles.namePhoto}>
                        <View style={styles.userPhotoBox}>
                            <Image 
                                source={require('@/assets/images/UserPhoto.png')}
                                style={styles.userPhoto}
                            />
                        </View>
                        <View style={styles.userNameBox}>
                            <Text style={styles.followersText}>Followers: 15k</Text>
                            <Text style={styles.nameText}>Borja3268</Text>
                        </View> 
                    </ImageBackground>
                    <View style={styles.listBox}>
                    <FlatList
                        data={stackItems}
                        keyExtractor={ (item) => item.id.toString()}
                        numColumns={2}
                        renderItem={({item}) => (
                            <ImageBackground
                                source={require('@/assets/images/imagenesPrueba/backgroundBooks.jpg')} 
                                style={styles.stackBox}>
                            <Text style={styles.stackText}>Recomendación {item.tipo}</Text>
                            </ImageBackground>
                        )}
                    />
                    </View>
                    
                </SafeAreaView>
            </SafeAreaProvider>
        </GestureHandlerRootView>

    );
}
export default profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    namePhoto:{
        height: 175,
        flexDirection: 'row',
        backgroundColor: 'green',
        resizeMode: 'cover'
    },
    userPhotoBox: {
        height: 150,
        width: 150,
        backgroundColor: 'grey',
        borderRadius: 150/2,
        margin: 15,
        overflow: 'hidden'
    },
    userPhoto: {
        height: 150,
        width: 150,
        resizeMode: 'cover'
    },
    userNameBox: {
        flex: 1,
        flexDirection: 'column',
        position: 'relative'
    },
    followersText: {
        color: 'white',
        fontSize: 24,
        marginTop: 40,
        fontWeight: 'bold'
    },
    nameText: {
        position: 'absolute',
        color: 'white',
        fontSize: 32,
        fontFamily: 'IrishGrover',
        marginTop: 125
    },
    listBox: {
        height: '77%'
    },
    stackBox: {
        height: 180,
        width: 180,
        backgroundColor: 'red',
        borderRadius: 20,
        margin: 15,
        overflow: 'hidden',
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'center'
    },
    stackText: {
        fontSize: 20,
        color: 'black',
        alignSelf: 'center',
        fontWeight: 'bold',
        textAlign: 'center'
    },

})