import React, { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import axios from "axios";

const API_URL = "http://192.168.0.102:5000/api/auth";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const checkLogin = async () => {
      const token = await AsyncStorage.getItem("token");

      if (!token) {
        router.replace("/Welcome");
        return;
      }

      try {
        const res = await axios.get(`${API_URL}/verify-token`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.data.valid) {
          router.replace("/tabs/Home");
        } else {
          await AsyncStorage.clear();
          router.replace("/Welcome");
        }
      } catch (err) {
        await AsyncStorage.clear();
        router.replace("/Welcome");
      }
    };

    checkLogin();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color="blue" />
    </View>
  );
}
