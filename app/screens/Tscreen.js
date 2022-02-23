import React from 'react';
import { StyleSheet, Image, ImageBackground, View } from "react-native";
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';

function Tscreen( ) {
    return (
        <ImageBackground style={styles.container} 
        Image
        style={styles.image}
         source={require("../assets/couch.jpg")}>
         <View style={styles.con}>
           <AppButton title="Login" ></AppButton>  
         </View>
         <View>
           <AppButton color='secondary' title="Signin" ></AppButton>  
         </View>
         
        
           
        

        </ImageBackground>
    );
}

const styles = StyleSheet.create({

    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        

    
},
con: {
    marginTop: 400,
    flexDirection: "row",


},
con: {
    marginTop: 500,
    flexDirection: "row",


},
image: {
   width: "100%",
height: "100%", 
}


})
export default Tscreen;