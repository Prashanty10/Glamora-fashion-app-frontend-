import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="index" />
      <Stack.Screen name="Welcome" />
      <Stack.Screen name="Home" />
      <Stack.Screen name="User/Login" />
      <Stack.Screen name="User/Register" />
    </Stack>
  );
}