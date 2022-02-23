import React from "react";

import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import MessagesScreen from "./app/screens/MessagesScreen"
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { Switch } from "react-native";
import LoginScreen from "./app/screens/LoginScreen";
import Tscreen from "./app/screens/Tscreen";

import * as ImagePicker from 'expo-image-picker';

import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

export default function App() {
  return <WelcomeScreen/>
}


