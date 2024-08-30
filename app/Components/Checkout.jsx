import {
  FlatList,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import { Alert } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import card from "../Components/Card.json";
const Checkout = () => {
    const [isAlertShown, setIsAlertShown] = useState(false);

    const showAlert = () => {
      Alert.alert(
        "Payment",
        "Order sent Successfully.",
        [
          {
            text: "Cancel",
            
            style: "cancel"
          },
          { text: "OK", onPress: () => setIsAlertShown(true) }
        ],
        { cancelable: false }
      );
    };
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

          <Text style={{ color: "white" }}>Checkout</Text>

          <View style={styles.notificationButton}>
            <Ionicons name="notifications" size={25} color={"white"} />
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 15,
        }}
      >
        <Text style={{ fontWeight: "bold", color: "black" }}>Address</Text>
        <Text style={{ fontWeight: "bold", color: "green" }}>Add New</Text>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.addressContainer}>
          <View style={{ flexDirection: "row", margin: 10 }}>
            <View style={styles.check}>
              <Ionicons name="checkmark" color={"white"} size={20} />
            </View>
            <Text>Home</Text>
          </View>
          <Ionicons name="pencil-outline" size={25} />
        </View>
        <Text>123 Maple Street Springfield, IL 62704 USA</Text>
      </View>
      <View style={styles.mainContainer1}>
        <View style={styles.addressContainer1}>
          <View style={{ flexDirection: "row", margin: 10 }}>
            <View style={styles.check1}></View>
            <Text>Office</Text>
          </View>
          <Ionicons name="pencil-outline" size={25} />
        </View>
        <Text>456 Oak Avenue Fairview, TX 75069 USA</Text>
      </View>
      <View style={styles.payment}>
        <Text style={{ fontWeight: "bold", color: "black", fontSize: 18 }}>
          Payment
        </Text>
        <Text style={{ fontWeight: "bold", color: "Green", fontSize: 18 }}>
          Add New
        </Text>
      </View>
      <FlatList
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={card}
        renderItem={({ item }) => (
          <View style={styles.categoryContainer}>
            <View style={styles.category}>
              <View style={styles.curvedImage}>
                <Image
                  source={{ uri: item.image }}
                  style={{ width: 70, height: 70 }}
                  resizeMode="contain"
                />
              </View>
              <Text style={{ paddingTop: 10 }}>{item.name}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => `${item.id}-${index}`}
      />

      <TouchableOpacity
        style={styles.btn}
        onPress={showAlert}
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
  );
};

export default Checkout;

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
  check: {
    width: 20,
    height: 20,
    backgroundColor: "green",
    borderRadius: 5,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  check1: {
    width: 20,
    height: 20,
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 5,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  mainContainer: {
    alignSelf: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,

    width: 300,
  },
  mainContainer1: {
    alignSelf: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,

    width: 300,
  },
  addressContainer: {
    alignItems: "center",

    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: 300,
  },
  addressContainer1: {
    alignItems: "center",

    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: 300,
  },
  payment: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  curvedImage: {
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    height: 70,
    backgroundColor: "green",
  },
  categoryContainer: {
    alignItems: "center",
    marginHorizontal: 10,
    padding: 10,

    borderRadius: 25,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.2)",
    width: 120,
    height: 160,
  },
  btn: {
    alignSelf: "center",
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
