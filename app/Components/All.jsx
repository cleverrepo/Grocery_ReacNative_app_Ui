import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import products from "../Components/Products.json";
import { useNavigation } from "@react-navigation/native";
const All = () => {
    const navigation = useNavigation();
    const renderStars = (rating) => {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <Ionicons
                    key={i}
                    name={i <= rating ? "star" : "star-outline"}
                    size={18}
                    color={i <= rating ? "gold" : "gray"}
                />
            );
        }
        return stars;
    };

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <View style={styles.appBar}>
                    <TouchableOpacity style={styles.backButton} onPress={()=>navigation.goBack()}>
                        <Ionicons name="arrow-back" size={25} color={"white"} />
                    </TouchableOpacity>
                    <Text style={{ color: "white" }}>All</Text>
                    <View style={styles.notificationButton}>
                        <Ionicons name="notifications" size={25} color={"white"} />
                    </View>
                </View>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                numColumns={2}
                data={products}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={()=>navigation.navigate("Details",{item})}>
                         <View style={styles.products}>
                        <View style={styles.productImageContainer}>
                            <Image
                                source={{ uri: item.image }}
                                style={styles.productImage}
                                resizeMode="cover"
                            />
                            <View style={styles.fav}>
                                <Ionicons name="heart-outline" size={20} color="red" />
                            </View>
                        </View>
                        <Text style={styles.productName}>{item.name}</Text>
                        <View style={styles.starsContainer}>
                            {renderStars(item.rating)}
                        </View>
                        <Text style={styles.priceText}>
                            ${item.price}{" "}
                            <Text style={styles.oldPriceText}>
                                ${item.oldPrice}
                            </Text>
                        </Text>
                    </View>
                   </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default All;

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
    products: {
        width: 160,
        marginHorizontal: 10,
        justifyContent: "space-around",
        alignItems: "center",
        marginBottom: 20,
        padding: 10,
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    productImageContainer: {
        position: "relative",
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
        height: 160,
        borderRadius: 10,
        overflow: "hidden",
        marginBottom: 10,
        backgroundColor: "#E5F0F4",
    },
    productImage: {
        width: "100%",
        height: "100%",
    },
    fav: {
        position: "absolute",
        right: 5,
        top: 5,
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        backgroundColor: "#CEFAD7",
    },
    productName: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
    },
    starsContainer: {
        flexDirection: "row",
        marginVertical: 5,
    },
    priceText: {
        fontWeight: "bold",
        color: "green",
    },
    oldPriceText: {
        color: "black",
        textDecorationLine: "line-through",
        fontWeight: "normal",
    },
});
