import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Screens/Pages/Home";
import Welcome from "./Screens/Pages/Welcome";
import Login from "./Screens/AuthScreens/Login";
import Register from "./Screens/AuthScreens/Register";

import BottomBar from "./Components/BottomBar";
import All from "./Components/All";
import Details from "./Screens/Pages/Details";
import Checkout from "./Components/Checkout";
const index = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={Welcome}
      name="Welcome"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen component={Welcome} name="Welcome" />
      <Stack.Screen component={Login} name="Login" />
      <Stack.Screen component={Register} name="Register" />
      <Stack.Screen component={Home} name="Home" />
      <Stack.Screen component={BottomBar} name="BottomBar" />
      <Stack.Screen component={All} name="All" />
      <Stack.Screen component={Details} name="Details" />
      <Stack.Screen component={Checkout} name="Checkout" />
    </Stack.Navigator>
  );
};

export default index;

const styles = StyleSheet.create({});
