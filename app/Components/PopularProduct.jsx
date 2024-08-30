import { ScrollView, FlatList, Image, StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import React from 'react'
import Data from '../Components/PopularProducts.json'
import { Ionicons } from "@expo/vector-icons";
import Products from '../Components/Products.json'
import { useNavigation } from "@react-navigation/native";
const PopularProduct = () => {
    const navigation = useNavigation();
  return (
    
      <FlatList
          showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id.toString()}
    data={Data}
    horizontal
          renderItem={({ item }) => (
        
         <TouchableOpacity onPress={() => navigation.navigate("Details", { item })}>
      <View style={styles.productContainer}>
        <View style={styles.products}>
        
                <View style={styles.favorite}>
                <Ionicons
            name="heart-outline"
            size={24}
            color="white"
            style={styles.favoriteIcon}
          />
         </View>
          
          <Image source={{ uri: item.image }} style={styles.productImage} />
        </View>
        <Text style={{ paddingTop:10 }}>{item.name}</Text>
        <Text style={{ color:"green",fontWeight:"bold" }}>
          ${item.price}/kg{"   "}
          <Text style={{ textDecorationLine: "line-through", color:"black",fontWeight:"normal" }}>
            ${item.oldPrice}
          </Text>
        </Text>
                  </View>
                  </TouchableOpacity>
    )}
  />
   
  )
}

export default PopularProduct

const styles = StyleSheet.create({
    productContainer: {
        
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        backgroundColor: '#fff',
        position: 'relative', 
      },
      products: {
      
        width: 150,
        height: 100,
        marginBottom: 10,
        position: 'relative', 
      },
      productImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 10,
    },
    favorite: {
        width: 35,
        height: 35,
        backgroundColor: 'green',
        top: 2,
        left:100,
      
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
     
    },
   
})