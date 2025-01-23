import { View, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const recomendation = () => {

    return (
        <GestureHandlerRootView>
            <SafeAreaProvider>
                <SafeAreaView style={styles.container}>

                </SafeAreaView>
            </SafeAreaProvider>
        </GestureHandlerRootView>

    );
}
export default recomendation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
})