import { View, Text, Image, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const addReco = () => {
    

    return(
        <GestureHandlerRootView>
            <SafeAreaProvider>
                <SafeAreaView style={styles.container}>
                    <View style={{flexDirection:'row',  height: '10%'}}>
                        <View style={styles.logo}>
                            <Text style={styles.TextLogo}>RecoMe</Text>
                        </View>
                        <View style={styles.posTextCancel}>
                            <Link href='/mainPage' replace>
                                <Text style={styles.textCancel}>Cancel</Text>
                            </Link>
                        </View>
                    </View>
                    <View style={styles.boxInfo}>
                        <View style={styles.sepLine} />
                        <Text style={styles.infoText}>TITLE:</Text>
                        <View style={styles.auxContainer} />
                        <View style={styles.sepLine} />
                        <Text style={styles.infoText}>RECOMANDATION:</Text>
                        <View style={styles.auxContainer2} />
                        <View style={styles.sepLine} />
                        <Text style={styles.infoText}>IMAGE (OPTIONAL):</Text>
                        <View style={styles.auxContainer} />
                        <View style={styles.sepLine} />
                        <Text style={styles.infoText}>SCORE:</Text>
                        <View style={styles.auxContainer3} />
                    </View>
                    <View style={styles.doneBox}>
                        <View style={styles.done}>
                            <Text style={styles.TextDone}>Done</Text>
                        </View>
                    </View>
                </SafeAreaView>
            </SafeAreaProvider>
        </GestureHandlerRootView>
    );
}
export default addReco;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
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
      posTextCancel: {
        paddingLeft: '35%',
        paddingBottom: '3%',
        justifyContent: 'flex-end',
      },
      textCancel: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold'
      },
      boxInfo: {
        //backgroundColor: 'blue',
        height: '80%',
        width: '100%'
      },
      sepLine: {
        backgroundColor: 'white',
        width: '95%',
        height: 3,
        alignSelf: 'center',
        marginBottom: 15,
        marginTop: 15,
      },
      infoText: {
        color: 'white',
       
        paddingLeft: 25,
        fontFamily: 'IrishGrover',
        fontWeight: 'bold',
        fontSize: 24
      },
      auxContainer: {
        //container temporal
        backgroundColor: 'blue',
        width: '90%',
        height: 50,
        alignSelf: 'center',
        marginTop: 5,
      },
      auxContainer2: {
        //container temporal
        backgroundColor: 'blue',
        width: '90%',
        height: '30%',
        alignSelf: 'center',
        marginTop: 5,
      },
      auxContainer3: {
        //container temporal
        backgroundColor: 'red',
        width: '90%',
        height: '12%',
        alignSelf: 'center',
        marginTop: 5,
      },

      doneBox: {
        flex: 1,        
        justifyContent: 'center',
        alignItems: 'center'
      },
      done: {
        width: 153,
        height: 50,
        backgroundColor: '#08D85A',
        borderRadius: 25,
        justifyContent: 'center'
      },
      TextDone: {
        fontSize: 24,
        color: 'white',
        fontFamily: 'IrishGrover',
        textAlign: 'center',
      },


})