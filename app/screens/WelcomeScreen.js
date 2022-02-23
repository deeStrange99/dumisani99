import React from 'react';
import { Image, Text, ImageBackground, StyleSheet, StatusBar, Platform, View } from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        blurRadius={2}
        style={styles.background}
        source={require("../assets/click.png")}>
            <View style={styles.logoContainer}>
                <Image
                
                resizeMode= 'contain'
                 
            style={styles.logo}
            resizeMode='contain'
            source={require('../assets/d.png')}/>
            </View>
            <View 
            style={styles.buttonsContainer}>
             <AppButton title='Login' />
             <AppButton title='Register' color="secondary" />   
            </View>
            
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    buttonsContainer: {
        padding: 100,
        alignItems: 'center',
        justifyContent: "center",
        width: "100%",
        borderRadius: 5,
        marginTop: 300,
    },
    logo: {
        width: 300,
        height: 300,
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
        position: "absolute",
        top: 200,
        textShadowColor: "yellow",

    },
    title: {
        position: 'absolute',
        top: 70,
        alignItems: "center",
        
        
    },
    logoContainer: {
        position: 'absolute',
        top: -50,
        alignItems: "center",
    },
    
})


export default WelcomeScreen;