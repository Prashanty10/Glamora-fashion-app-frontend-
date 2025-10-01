import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function RootLayout(){
  return(
    <Tabs screenOptions={{headerShown:false,title:""}}>
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: () => (
            <Ionicons name="home" size={32} color={"#000000ff"} />
          ),
          tabBarStyle: {
            paddingHorizontal: 10,
            paddingVertical: 10,
          },
          tabBarLabelStyle:{
            fontSize:15,
            fontWeight:700,
            
          },
        }}
      />

      <Tabs.Screen
        name="Cart"
        options={{
          tabBarIcon: () => (
            <Ionicons name="cart" size={32} color={"#040404ff"} />
          ),
          tabBarStyle: {
            paddingHorizontal: 10,
            paddingVertical: 10,
          },
          tabBarLabelStyle:{
            fontSize:15,
            fontWeight:700,
            
          },
        }}
      />


      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: () => (
            <Ionicons name="person-circle" size={33} color={"#000000ff"} />
          ),
          
           tabBarLabelStyle:{
            fontSize:15,
            fontWeight:700,
            
          }
        }}
      />
    </Tabs>
  )
}