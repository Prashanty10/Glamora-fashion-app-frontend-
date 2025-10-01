import React, { useState } from "react";
import { View, TextInput, Text, Pressable, StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { registerUser, login } from "../../api/auth"; 
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function Register() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const handleRegister = async () => {
    if (!username.trim() || !email.includes("@") || !password) {
      alert("All fields are required and email must be valid");
      return;
    }

    try {
      await registerUser(username, email, password);
      const loginRes = await login(email, password);
      await AsyncStorage.setItem("token", loginRes.data.token);
      await AsyncStorage.setItem("username", username); 
      await AsyncStorage.setItem("isLoggedIn", "true");
      router.replace("/tabs/Home"); 
    } catch (err: unknown) {
      const e = err as any;
      const serverMsg =
        (e.response && e.response.data && e.response.data.message) ||
        "Register failed";
      setMessage(serverMsg);
    }
  };


  return (
    <ImageBackground
      source={{ uri: "https://images.unsplash.com/photo-1555529771-835f59fc5efe?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Register</Text>

          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#ffffffff"
            value={username}
            onChangeText={setUsername}
            onFocus={() => setFocusedInput("username")}
            onBlur={() => setFocusedInput(null)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#ffffffff"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            onFocus={() => setFocusedInput("email")}
            onBlur={() => setFocusedInput(null)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#ffffffff"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            onFocus={() => setFocusedInput("password")}
            onBlur={() => setFocusedInput(null)}
          />

          <Pressable onPress={handleRegister} style={styles.buttonWrapper}>
            <LinearGradient
              colors={["#FF6B6B", "#FF8E53"]}
              style={styles.buttonContainer}
            >
              <Text style={styles.buttonText}>Register</Text>
            </LinearGradient>
          </Pressable>

          {message ? <Text style={styles.message}>{message}</Text> : null}
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
    paddingHorizontal: wp("5%"),
  },
  innerContainer: {
    width: "100%",
    alignItems: "center",
    gap: 20,
    backgroundColor: "rgba(255,255,255,0.05)",
    paddingVertical: hp("5%"),
    borderRadius: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#f9f8f7ff",
  },
  input: {
    width: wp("80%"),
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderWidth: 1.5,
    borderRadius: wp("15%"),
    color: "#FFFFFF",
    fontSize: 16,
    borderColor:"white"
  },
  buttonWrapper: {
    width: "80%",
    marginTop: 10,
    borderRadius: wp("20%"),
    overflow: "hidden",
  },
  buttonContainer: {
    paddingVertical: 14,
    borderRadius: wp("20%"),
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
  message: {
    color: "#FF5252",
    fontSize: 14,
    marginTop: 10,
    textAlign: "center",
  },
});
