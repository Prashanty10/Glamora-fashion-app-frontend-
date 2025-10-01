import React, { Component, useEffect } from "react";
import { Text, View, Dimensions, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
const { width, height } = Dimensions.get("window");
import { 
  widthPercentageToDP as wp, 
  heightPercentageToDP as hp 
} from 'react-native-responsive-screen';



export default function Welcome() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/User/Login");
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <LinearGradient
        colors={["#1F1F1F", "#1F1F1F"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}
      >
        <Text style={styles.title}>Glamora</Text>
        <Text style={styles.subtitle}>Glow in Every Outfit</Text>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 40,
    fontWeight: "600",
  },
  subtitle: {
    color: "white",
    fontSize: 12,
    fontWeight: "500",
  },
});
