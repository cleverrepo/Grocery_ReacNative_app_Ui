import {
  ScrollView,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import PopularProduct from "../../Components/PopularProduct";
import { useNavigation } from "@react-navigation/native";
const Home = () => {
  const navigation = useNavigation();
  const category = [
    {
      id: 1,
      name: "Veggies",
      image:
        "https://file.removal.ai/preview/9ed3f368-bea6-45da-b23c-804ef6e9e7bb-3773052_1997693.png",
    },
    {
      id: 2,
      name: "Fruits",
      image:
        "https://file.removal.ai/preview/d8986a93-c6c6-4014-94c8-0ee1c3aabc36-13802625_5367798.png",
    },
    {
      id: 3,
      name: "Meat",
      image:
        "https://file1.removal.ai/preview/16644e13-0d16-402f-b454-acecb158d049_24084903_0xk5_v8ti_211027.png",
    },
    {
      id: 4,
      name: "Dairy",
      image:
        "https://file.removal.ai/preview/f479c591-9339-43da-a01e-94f72bb5f49e-87969277_sncb_jfrx_231017.png",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.appBar}>
          <View style={styles.backButton}>
            <Ionicons name="arrow-back" size={25} color={"white"} />
          </View>
          <View style={styles.centerContainer}>
            <Ionicons name="location" size={25} color={"white"} />
            <Text style={{ color: "white" }}>Location</Text>
          </View>
          <View style={styles.notificationButton}>
            <Ionicons name="notifications" size={25} color={"white"} />
          </View>
        </View>
        <Text style={{ textAlign: "center", color: "white", fontSize: 20 }}>
          Istanbul, Turkey
        </Text>
        <View style={styles.inputContainer}>
          <TextInput placeholder="search" style={styles.input} />
          <Ionicons name="search-outline" size={20} />
        </View>
      </View>

      <LinearGradient
        colors={["#4CAF50", "rgba(255, 255, 255, 0.2)"]}
        style={styles.gradientContainer}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.advert}>
          <View style={styles.discount}>
            <Text style={{ textAlign: "justify" }}>
              Get 40% discount {"\n"} on your first order from {"\n"} the app
            </Text>
            <View style={styles.shopNow}>
              <Text>Shop Now</Text>
            </View>
          </View>
          <Image
            onError={(error) => console.log("Image Load Error:", error)}
            style={styles.image}
            source={{
              uri: "https://file.removal.ai/preview/532d9948-a061-4cf2-9f65-7c1fb815f1a5-fruit.png",
            }}
          />
        </View>
      </LinearGradient>

      <Text style={{ padding: 15 }}>Categories</Text>
      <FlatList
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={category}
        renderItem={({ item }) => (
          <View style={styles.categoryContainer}>
            <View style={styles.category}>
              <View style={styles.curvedImage}>
                <Image
                  source={{ uri: item.image }}
                  style={{ width: 30, height: 30 }}
                />
              </View>
              <Text style={{ paddingTop: 10 }}>{item.name}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />

      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          margin: 10,
        }}
      >
        <Text style={{ padding: 15 }}>Popular</Text>
        <TouchableOpacity onPress={() => navigation.navigate("All")}>
          <Text style={{ padding: 15, color: "green" }}>See All</Text>
        </TouchableOpacity>
      </View>

      <View style={{ padding: 15 }}>
        <PopularProduct />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  centerContainer: {
    flexDirection: "row",
  },
  gradientContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
    width: 350,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  inputContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    width: 300,
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginLeft: 10,
  },
  input: { width: 250 },
  advert: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  shopNow: {
    backgroundColor: "white",
    padding: 10,
    width: 100,
    borderRadius: 10,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 135,
    height: 130,
    opacity: 0.7,
  },
  curvedImage: {
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 60,
    height: 50,
    backgroundColor: "green",
  },
  categoryContainer: {
    alignItems: "center",
    marginHorizontal: 10,
    padding: 10,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.2)",
    width: 79,
    height: 100,
  },
});
