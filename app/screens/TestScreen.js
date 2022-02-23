import React from 'react';
import { View, Image, StyleSheet, Platform } from 'react-native';
import { StatusBar } from 'react-native';
import ListItem from '../components/ListItem';

function TestScreen(props) {
    return (
        <View styles>
            <View style={styles.imageContainer}>
            <Image
            style={styles.image} source={require('../assets/sis1.png')} />
        </View> 
        <ListItem 
        image={require('../assets/sis1.png')}
        title="Lindiwe"
        subTitle="5 Listing" />
        </View>
        

    );
}

const styles = StyleSheet.create({
    image: {
        overflow: "hidden",
        width: '100%',
        height: 300,
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },

    imageContainer: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    }
})

export default TestScreen;