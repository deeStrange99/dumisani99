

import React from "react";
import { View, Image, StyleSheet, StatusBar, Platform } from "react-native";
import { SafeAreaView } from "react-native";
import AppText from "../components/AppText";

import ListItem from "../components/ListItem";
import colors from "../config/colors";

function ListingDetailsScreen(props) {
  return (
    <SafeAreaView>
      <Image style={styles.image} source={require("../assets/T-shirt2.png")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Jesus T-Shirt</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/sis1.jpg")}
            title="Lindiwe"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    marginTop:Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;