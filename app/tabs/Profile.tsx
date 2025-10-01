import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export const profileMenu: {
  id: string;
  name: string;
  icon: IconName;
  showArrow: boolean;
  arrowIcon?: IconName;
}[] = [
  { id: "1", name: "My Profile", icon: "person-outline", showArrow: true, arrowIcon: "chevron-forward" },
  { id: "2", name: "My Address", icon: "location-outline", showArrow: true, arrowIcon: "chevron-forward" },
  { id: "3", name: "My Orders", icon: "cart-outline", showArrow: true, arrowIcon: "chevron-forward" },
  { id: "4", name: "Settings", icon: "settings-outline", showArrow: true, arrowIcon: "chevron-forward" },
  { id: "5", name: "Logout", icon: "log-out-outline", showArrow: false },
];

export type IconName = keyof typeof Ionicons.glyphMap;

export default function Profile() {
  return (
    <SafeAreaView>
      <View style={styles.user}>
        <Text style={{ marginTop: hp("2%"), fontSize: wp("4.5%") }}>Profile</Text>
        <Image
          style={styles.image}
          source={{
            uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
          }}
        />
        <Text style={{ fontSize: wp("5%"), fontWeight: "700" }}>Hello, prashant</Text>
        <Text style={{ fontSize: wp("3.5%") }}>prashant@gmail.com</Text>
      </View>

      <Pressable>
        {profileMenu.map((item) => (
          <View key={item.id} style={styles.list}>
            <Ionicons name={item.icon} size={wp("5%")} color="black" />
            <Text style={{ fontSize: wp("3.5%") }}>{item.name}</Text>
            {item.showArrow && item.arrowIcon && (
              <Ionicons name={item.arrowIcon} size={wp("5%")} color="#999" />
            )}
          </View>
        ))}
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  user: {
    alignItems: "center",
    gap: hp("1%"),
  },

  image: {
    marginTop: hp("3%"),
    height: hp("20%"),
    width: wp("40%"),
    borderRadius: wp("20%"), // circle
  },

  list: {
    marginTop: hp("3%"),
    flexDirection: "row",
    marginLeft: wp("5%"),
    gap: wp("3%"),
    alignItems: "center",
  },
});
