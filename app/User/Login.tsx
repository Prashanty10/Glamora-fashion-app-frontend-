import React, { useState } from "react";
import { View, TextInput, Text, Pressable, StyleSheet, ImageBackground } from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { login } from "../../api/auth"; 
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    if (!email.includes("@") || !password) {
      alert("Please enter valid email and password");
      return;
    }

    try {
      const res = await login(email, password);
      await AsyncStorage.setItem("token", res.data.token);
      setMessage(res.data.message || "Login successful");
      router.replace("/tabs/Home"); 
    } catch (err: unknown) {
      const e = err as any;
      const serverMsg =
        (e.response && e.response.data && e.response.data.message) || "Login failed";
      setMessage(serverMsg);
    }
  };

  return (
    <ImageBackground
      source={{ uri: "https://images.unsplash.com/photo-1603400521630-9f2de124b33b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Login</Text>

          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#CCCCCC"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#CCCCCC"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <Pressable style={styles.buttonContainer} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>

          {message ? <Text style={styles.message}>{message}</Text> : null}

          <Pressable onPress={() => router.push("/User/Register")}>
            <Text style={styles.registerLink}>Don't have an account? Register</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.65)",
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    width: wp("90%"),
    alignItems: "center",
    gap: hp("2%"),
  },
  title: {
    fontSize: wp("8%"),
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: hp("2%"),
  },
  input: {
    width: wp("80%"),
    paddingVertical: hp("1.5%"),
    paddingHorizontal: wp("3%"),
    borderWidth: 1.5,
    borderColor: "#FFFFFF",
    borderRadius: wp("15%"),
    color: "#FFFFFF",
    fontSize: wp("4%"),
  },
  buttonContainer: {
    marginTop: hp("2%"),
    backgroundColor: "#ffa46bff",
    paddingVertical: hp("1.5%"),
    paddingHorizontal: wp("10%"),
    borderRadius: wp("20%"),
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: wp("4.5%"),
    fontWeight: "600",
    textAlign: "center",
  },
  message: {
    color: "#FFD700",
    fontSize: wp("4%"),
    marginTop: hp("1%"),
  },
  registerLink: {
    color: "#ffdbb6ff",
    fontSize: wp("4%"),
    marginTop: hp("1.5%"),
    textDecorationLine: "underline",
  },
});