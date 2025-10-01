import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Productdetails() {
  const { item } = useLocalSearchParams();
  const product = JSON.parse(item as string);
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      <ScrollView>
        <View
          style={{
            marginTop: hp("2%"),
            paddingHorizontal: wp("5%"),
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Pressable
            onPress={() => router.push("/tabs/Home")}
            style={{
              backgroundColor: "white",
              padding: wp("2%"),
              borderRadius: wp("5%"),
              elevation: 3,
            }}
          >
            <Ionicons name="arrow-back" size={26} color="black" />
          </Pressable>
          <Text style={{ fontSize: wp("4.5%"), fontWeight: "600" }}>Details</Text>
          <Pressable
            style={{
              backgroundColor: "white",
              padding: wp("2%"),
              borderRadius: wp("5%"),
              elevation: 3,
            }}
          >
            <Ionicons name="heart" size={28} color="red" />
          </Pressable>
        </View>
        <View style={{ alignItems: "center", marginTop: hp("2%") }}>
          <Image
            style={{
              height: hp("38%"),
              width: wp("67%"),
              borderRadius: wp("5%"),
              resizeMode: "contain",
            }}
            source={{ uri: product.image }}
          />
        </View>
        <View
          style={{
            marginTop: hp("2%"),
            marginHorizontal: wp("5%"),
            backgroundColor: "white",
            borderRadius: wp("3%"),
            padding: wp("4%"),
            elevation: 3,
          }}
        >
          <Text style={{ fontSize: wp("5.5%"), fontWeight: "700" }}>
            {product.name}
          </Text>
          <Text style={{ fontSize: wp("3.5%"), color: "#666", marginTop: hp("0.5%") }}>
            ⭐ {product.rating} (25 reviews)
          </Text>
          <Text
            style={{
              fontSize: wp("3.5%"),
              color: "#444",
              marginTop: hp("1%"),
            }}
          >
            Size: {product.size}
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: wp("5%"),
            marginTop: hp("2%"),
            backgroundColor: "white",
            borderRadius: wp("3%"),
            padding: wp("4%"),
            elevation: 2,
          }}
        >
          <Text style={{ fontSize: wp("5%"), fontWeight: "700", marginBottom: hp("1%") }}>
            Description
          </Text>
          <Text style={{ fontSize: wp("3.5%"), color: "#555" }}>
            {product.description}
          </Text>
        </View>

        {/* Action Buttons */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: wp("5%"),
            marginVertical: hp("3%"),
            gap: wp("3%"),
          }}
        >
          <Pressable
            style={{
              flex: 1,
              backgroundColor: "#000",
              paddingVertical: hp("2%"),
              borderRadius: wp("5%"),
              alignItems: "center",
              elevation: 3,
            }}
          >
            <Text style={{ color: "white", fontWeight: "700" }}>Buy Now</Text>
          </Pressable>
          <Pressable
            style={{
              flex: 1,
              backgroundColor: "#ff6b6b",
              paddingVertical: hp("2%"),
              borderRadius: wp("5%"),
              alignItems: "center",
              elevation: 3,
            }}
          >
            <Text style={{ color: "white", fontWeight: "700" }}>Add to Cart</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
