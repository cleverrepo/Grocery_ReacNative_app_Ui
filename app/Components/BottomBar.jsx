import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Ionicons } from "@expo/vector-icons";
import Home from '../Screens/Pages/Home';
import Profile from '../Screens/Pages/Profile';
import Cart from '../Screens/Pages/Cart';
import Favorite from '../Screens/Pages/Favorite';
const BottomBar = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#4CAF50',
      tabBarInactiveTintColor: 'gray',
     
    }}>
      <Tab.Screen component={Home} name='Home' options={{
         tabBarIcon: ({ focused }) => (
          <Ionicons name={ focused?"home":"home-outline"} size={25} color={"#4CAF50"}/>
      )
      }}/>
      <Tab.Screen component={Favorite} name='Favorite' options={{
        
         tabBarIcon: ({ focused }) => (
          <Ionicons name={ focused?"heart":"heart-outline"} size={25} color={"#4CAF50"}/>
      )
      }} />
      <Tab.Screen component={Cart} name='Cart' options={{
        tabBarBadge: 0,
        
         tabBarIcon: ({ focused }) => (
          <Ionicons name={ focused?"cart":"cart-outline"} size={25} color={"#4CAF50"}/>
      )
      }}/>
  <Tab.Screen component={Profile}name='Profile' options={{
         tabBarIcon: ({ focused }) => (
          <Ionicons name={ focused?"person":"person-outline"} size={25} color={"#4CAF50"}/>
      )
      }}/>
  
  
    </Tab.Navigator>
  )
}

export default BottomBar

const styles = StyleSheet.create({})