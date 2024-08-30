import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Cart = () => {
  const navigation = useNavigation();

  const category = [
    {
      id: 1,
      name: "Carrot",
      category: "Vegetables",
      price: 2.5,
      oldPrice: 3.0,
      rating: 4.5,
      kg: "1kg",
      image:
        "https://file.removal.ai/preview/a13af418-4de4-4483-83ea-472783699ef5-carrot-1694087_1280.png",
      description: "Crunchy and sweet carrots, rich in beta-carotene.",
      origin: "Netherlands",
      stock: 180,
    },
    {
      id: 2,
      name: "Broccoli",
      category: "Vegetables",
      price: 2.99,
      oldPrice: 3.49,
      rating: 4.4,
      kg: "1kg",
      image:
        "https://file.removal.ai/preview/2b277119-628d-401f-b789-09cbd37578bb-broccoli-1238250_1280.png",
      description: "Fresh green broccoli, great for steaming or stir-frying.",
      origin: "Italy",
      stock: 140,
    },
    {
      id: 3,
      name: "Milk",
      category: "Dairy",
      price: 1.5,
      oldPrice: 1.99,
      rating: 4.9,
      kg: "1L",
      image:
        "https://file.removal.ai/preview/d1a52b66-a5ef-4d8a-a849-15c253026fcf-milk-bottle-2740848_1280.png",
      description: "Organic whole milk, rich in calcium.",
      origin: "Germany",
      stock: 300,
    },
    {
      id: 4,
      name: "Cheese",
      category: "Dairy",
      price: 5.99,
      oldPrice: 6.99,
      rating: 4.8,
      kg: "500g",
      image:
        "https://file.removal.ai/preview/c98cfe49-a2ba-406d-960f-55ba1bb3fda9-cheese-5179968_1280.png",
      description: "Aged cheddar cheese with a sharp flavor.",
      origin: "France",
      stock: 80,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.appBar}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={25} color={"white"} />
          </TouchableOpacity>

          <Text style={{ color: "white" }}>Cart</Text>

          <View style={styles.notificationButton}>
            <Ionicons name="notifications" size={25} color={"white"} />
          </View>
        </View>
      </View>

      <FlatList
        data={category}
        renderItem={({ item }) => (
          <View style={styles.cartContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: item.image }}
                style={{ width: 50, height: 50 }}
              />
            </View>
            <View style={styles.cartProduct}>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                {item.name}
              </Text>
              <Text>{item.category}</Text>
              <Text style={{ color: "green", fontWeight: "bold" }}>
                ${item.price}/kg
              </Text>
            </View>
            <View style={styles.quantityContainer}>
              <TouchableOpacity style={styles.quantity}>
                <Ionicons name="remove" size={20} color={"white"} />
              </TouchableOpacity>

              <Text style={styles.quantityText}>0</Text>

              <TouchableOpacity style={styles.quantity}>
                <Ionicons name="add" size={20} color={"white"} />
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContent}
      />
  <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("Checkout")}
          >
            <Text
              style={{
                fontSize: 20,
                color: "black",
                fontWeight: "900",
                color: "white",
              }}
            >
              Check Out
            </Text>
          </TouchableOpacity>
      
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "green",
  },
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  backButton: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  cartContainer: {
    margin: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  imageContainer: {
    height: 60,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  cartProduct: {
    flex: 1,
    marginLeft: 10,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantity: {
    width: 35,
    height: 30,
    borderRadius: 5,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 18,
  },
  flatListContent: {
    paddingBottom: 100, 
  },
  btn: {
    marginHorizontal:25,
    backgroundColor: "#4CAF50",
    borderRadius: 15,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 10,
    width: 300,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
});
