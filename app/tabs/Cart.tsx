import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
};

const cart: Product[] = [
  {
    id: "1",
    name: "Nike Air Max",
    price: 120.0,
    quantity: 2,
    size: "M",
    image:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/fa167834-731f-47d5-bdc3-8578415c02df/custom-nike-air-max-97-shoes-by-you.png",
  },
  {
    id: "2",
    name: "Adidas Hoodie",
    price: 60.0,
    quantity: 1,
    size: "L",
    image:
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/59460fb0bd584daa88fe9a383d088a9b_9366/Z.N.E._Hoodie_White_JF2454_21_model.jpg",
  },
  {
    id: "3",
    name: "Ray-Ban Sunglasses",
    price: 150.0,
    quantity: 1,
    size: "Standard",
    image:
      "https://himalayaoptical.com/cdn/shop/products/805289304456_1_1024x.jpg?v=1713765412",
  },
  {
    id: "4",
    name: "Levi's Jeans",
    price: 80.0,
    quantity: 1,
    size: "32",
    image:
      "https://levi.in/cdn/shop/files/182981492_02_Front_b9b774f4-b6a2-4d14-9c7a-9cdf57b6877f.jpg?v=1740488438",
  },
  {
    id: "5",
    name: "Puma Sneakers",
    price: 100.0,
    quantity: 1,
    size: "9",
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/374915/01/sv01/fnd/IND/fmt/png/Suede-Classic-XXI-Sneakers",
  },
];

export default function Cart() {
  const renderItem = ({ item }: { item: Product }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.size}>Size: {item.size}</Text>
        <Text style={styles.quantity}>Qty: {item.quantity}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      </View>
      <Pressable>
  <Ionicons name="trash-outline" size={24} color="red" />
</Pressable>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Cart</Text>
      </View>

      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ padding: wp("5%") }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    paddingVertical: hp("2%"),
    backgroundColor: "#fff",
    elevation: 3,
  },
  headerText: {
    fontSize: wp("5%"),
    fontWeight: "700",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: wp("3%"),
    marginBottom: hp("2%"),
    elevation: 2,
    padding: wp("3%"),
  },
  image: {
    width: wp("30%"),
    height: hp("15%"),
    borderRadius: wp("2%"),
    resizeMode: "contain",
  },
  details: {
    flex: 1,
    marginLeft: wp("4%"),
    justifyContent: "space-around",
  },
  name: {
    fontSize: wp("4%"),
    fontWeight: "600",
  },
  size: {
    fontSize: wp("3.5%"),
    color: "#555",
  },
  quantity: {
    fontSize: wp("3.5%"),
    color: "#555",
  },
  price: {
    fontSize: wp("4%"),
    fontWeight: "700",
    color: "#000",
  },
});
