import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Pressable,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Categories from "../components/Categories";
import Product from "../components/Product";
import Offer from "../components/Offer";

export default function Home() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchUsername = async () => {
      const storedUsername = await AsyncStorage.getItem("username");
      if (storedUsername) setUsername(storedUsername);
    };
    fetchUsername();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <Ionicons name="person-circle" size={wp("10%")} color="grey" />
            <Text style={{fontSize:16}}>{username}</Text>
          </View>
          <Pressable>
            <Ionicons name="cart" size={wp("7%")} color="black" />
          </Pressable>
        </View>

        <View style={styles.search}>
          <Ionicons
            name="search"
            size={wp("6%")}
            color="black"
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search"
            style={styles.searchInput}
            placeholderTextColor="grey"
          />
        </View>
        <View>
          <Offer />
        </View>
        <View>
          <Categories />
        </View>
        <View>
          <Product />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    marginBottom: hp("1.8%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: wp("3%"),
  },
  headerText: {
    fontSize: wp("5.5%"),
    fontWeight: "700",
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: wp("6%"),
    height: hp("6%"),
    marginHorizontal: wp("3%"),
    paddingHorizontal: wp("3%"),
    backgroundColor: "#f9f9f9",
  },
  searchIcon: {
    marginRight: wp("2%"),
  },
  searchInput: {
    flex: 1,
    fontSize: wp("4%"),
  },
});
