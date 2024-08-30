import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Details = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params;
  console.log(item.image);

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
          <Text style={{ color: "white" }}>Details</Text>
          <View style={styles.notificationButton}>
            <Ionicons name="notifications" size={25} color={"white"} />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{ uri: item.image }}
        width={"100%"}
        height={"80%"}
        resizeMode="contain"
        style={styles.topContainer}
      ></ImageBackground>
      <View style={styles.bottomContainer}>
        <View style={styles.kg}>
          <Text style={{ fontWeight: "bold", color: "green", fontSize: 25 }}>
            {item.name}
          </Text>
          <Text style={{ fontWeight: "bold", color: "green", fontSize: 25 }}>
            {item.kg}
          </Text>
        </View>
        <Text style={{ fontWeight: "bold", color: "black", fontSize: 25 }}>
          {item.category}
        </Text>

        <View style={styles.header}>
          <View style={styles.ratePrice}>
            <Ionicons name="star-outline" />
            <Text style={{ color: "gree", fontSize: 23, fontWeight: "bold" }}>
              ${item.price}/kg
            </Text>
          </View>
          <View style={styles.quantity}>
            <TouchableOpacity style={styles.quantityContainer}>
              <Ionicons name="remove" />
            </TouchableOpacity>
            <Text>0 kg</Text>
            <TouchableOpacity style={styles.quantityContainer}>
              <Ionicons name="add" />
            </TouchableOpacity>
          </View>
        </View>
        <Text>Product Description</Text>
        <Text style={{ color: "black", fontWeight: "bold" }}>
          Origin:{"  "}
          <Text style={{ color: "green", fontWeight: "bold", fontSize: 18 }}>
            {item.origin}
          </Text>
        </Text>

        <Text style={{ color: "black", fontWeight: "bold" }}>
          In Stock:{"  "}
          <Text style={{ color: "green", fontWeight: "bold", fontSize: 18 }}>
            {item.stock}
          </Text>
        </Text>
        <Text style={{ marginTop: 10, marginBottom: 10, fontSize: 16 }}>
          {item.description}
        </Text>
        <View style={styles.addToCart}>
          <Text style={{ color: "green", fontWeight: "bold", fontSize: 25 }}>
            ${item.price}
          </Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("BottomBar")}
          >
            <Text
              style={{
                fontSize: 20,
                color: "black",
                fontWeight: "900",
                color: "white",
              }}
            >
              Add To cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
    backgroundColor: "#E5F0F4",
  },
  bottomContainer: {
    padding: 15,
    flex: 2,
    backgroundColor: "white",
  },
  topBar: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "green",
  },
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
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
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  quantity: {
    margin: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  quantityContainer: {
    width: 35,
    height: 30,
    borderRadius: 45,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
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
  addToCart: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  kg: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});
