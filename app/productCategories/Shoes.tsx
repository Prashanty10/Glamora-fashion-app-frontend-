import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

export default function Shoes() {
  const { item, category } = useLocalSearchParams();
  const product = JSON.parse(item as string);
  const router = useRouter();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      <ScrollView>
        <View
          style={{
            marginTop: responsiveHeight(2),
            paddingHorizontal: responsiveWidth(5),
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Pressable
            onPress={() => router.push(`/Categoriesdetail/Shoes`)}
            style={{
              backgroundColor: "white",
              padding: responsiveWidth(2),
              borderRadius: responsiveWidth(5),
              elevation: 3,
            }}
          >
            <Ionicons name="arrow-back" size={26} color="black" />
          </Pressable>
          <Text style={{ fontSize: responsiveWidth(4.5), fontWeight: "600" }}>
            {category} Details
          </Text>
          <Pressable
            style={{
              backgroundColor: "white",
              padding: responsiveWidth(2),
              borderRadius: responsiveWidth(5),
              elevation: 3,
            }}
          >
            <Ionicons name="heart" size={28} color="red" />
          </Pressable>
        </View>

        <View style={{ alignItems: "center", marginTop: responsiveHeight(2) }}>
          <Image
            style={{
              height: responsiveHeight(38),
              width: responsiveWidth(67),
              borderRadius: responsiveWidth(5),
              resizeMode: "contain",
            }}
            source={{ uri: product.image }}
          />
        </View>

        <View
          style={{
            marginTop: responsiveHeight(2),
            marginHorizontal: responsiveWidth(5),
            backgroundColor: "white",
            borderRadius: responsiveWidth(3),
            padding: responsiveWidth(4),
            elevation: 3,
          }}
        >
          <Text style={{ fontSize: responsiveWidth(5.5), fontWeight: "700" }}>
            {product.name}
          </Text>
          <Text
            style={{
              fontSize: responsiveWidth(3.5),
              color: "#666",
              marginTop: responsiveHeight(0.5),
            }}
          >
            ⭐ {product.rating} (25 reviews)
          </Text>

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              marginTop: responsiveHeight(1),
              gap: responsiveWidth(2),
            }}
          >
            {product.size.map((size: string, index: number) => (
              <Pressable
                key={index}
                onPress={() => setSelectedSize(size)}
                style={{
                  borderWidth: 1,
                  borderRadius: responsiveWidth(10),
                  paddingVertical: responsiveHeight(1),
                  paddingHorizontal: responsiveWidth(3),
                  backgroundColor: selectedSize === size ? "black" : "white",
                  borderColor: "black",
                }}
              >
                <Text
                  style={{
                    color: selectedSize === size ? "white" : "black",
                    fontWeight: "600",
                  }}
                >
                  {size}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>

        <View
          style={{
            marginHorizontal: responsiveWidth(5),
            marginTop: responsiveHeight(2),
            backgroundColor: "white",
            borderRadius: responsiveWidth(3),
            padding: responsiveWidth(4),
            elevation: 2,
          }}
        >
          <Text
            style={{
              fontSize: responsiveWidth(5),
              fontWeight: "700",
              marginBottom: responsiveHeight(1),
            }}
          >
            Description
          </Text>
          <Text style={{ fontSize: responsiveWidth(3.5), color: "#555" }}>
            {product.description}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: responsiveWidth(5),
            marginVertical: responsiveHeight(3),
            gap: responsiveWidth(3),
          }}
        >
          <Pressable
            style={{
              flex: 1,
              backgroundColor: "#000",
              paddingVertical: responsiveHeight(2),
              borderRadius: responsiveWidth(5),
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
              paddingVertical: responsiveHeight(2),
              borderRadius: responsiveWidth(5),
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
