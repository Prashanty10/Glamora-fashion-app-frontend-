import { useRouter } from "expo-router";
import { Text, View, StyleSheet, ScrollView, Image, Pressable } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const product = [
  {
    id: "1",
    name: "Men",
    image: "https://www.shutterstock.com/image-vector/stylish-man-fashionable-clothes-on-600nw-2493022819.jpg",
    address: "/Categoriesdetail/Menscloth",
  },
  {
    id: "2",
    name: "Women",
    image: "https://img.freepik.com/premium-vector/women-blue-jeans-pink-pullover-standing-no-face-cartoon-illustration-white-background_257455-730.jpg",
    address: "/Categoriesdetail/Womencloth",
  },
  {
    id: "3",
    name: "Kids",
    image: "https://t3.ftcdn.net/jpg/08/12/26/16/360_F_812261607_ZGfhj0GmaXS4NWusO6Pwoeu1E8qbABXc.jpg",
    address: "/Categoriesdetail/Kidcloth",
  },
  {
    id: "4",
    name: "Shoes",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnqm1Et4KRwJDpflSKujgrrD1K9VhnXP0-aA&s",
    address: "/Categoriesdetail/Shoes",
  },
  {
    id: "5",
    name: "Accessories",
    image: "https://www.shutterstock.com/image-vector/kids-jewelry-cartoon-drawing-bracelet-600nw-2254000673.jpg",
    address: "/Categoriesdetail/Accessories",
  },
  {
    id: "6",
    name: "Bags",
    image: "https://img.freepik.com/premium-vector/school-bag-icon-cartoon-style-white-background_96318-14721.jpg",
    address: "/Categoriesdetail/Bags",
  },
  {
    id: "7",
    name: "Watches",
    image: "https://img.freepik.com/premium-vector/hand-drawn-watch-cartoon-vector-illustration-clipart-white-background_191095-43849.jpg",
    address: "/Categoriesdetail/Watch",
  },
  {
    id: "8",
    name: "Sports wear",
    image: "https://static.vecteezy.com/system/resources/previews/053/256/616/non_2x/versatile-t-shirt-mockup-free-vector.jpg",
    address: "/Categoriesdetail/Sport",
  },
  {
    id: "9",
    name: "Formal Wear",
    image: "https://st5.depositphotos.com/72519400/66171/v/450/depositphotos_661719316-stock-illustration-stylish-man-fashionable-clothes-white.jpg",
    address: "/Categoriesdetail/Formal",
  },
];

export default function Categories() {
  const router = useRouter();

  return (
    <>
      <Text style={{ fontSize: wp("5%"), marginLeft: wp("2%"), fontWeight: "700" }}>
        Categories
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.wrapper}>
          {product.map((item) => (
            <Pressable
              key={item.id}
              style={styles.card}
              onPress={() => router.push(item.address as any)}
            >
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.name}>{item.name}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    gap: wp("4%"),
    paddingHorizontal: wp("3%"),
  },
  card: {
    gap: hp("0.5%"),
    backgroundColor: "white",
    alignItems: "center",
    elevation: 1,
    borderRadius: wp("3%"),
    padding: wp("2%"),
  },
  image: {
    height: hp("12%"),
    width: wp("20%"),
    resizeMode: "contain",
  },
  name: {
    fontSize: wp("3.5%"),
    fontWeight: "600",
  },
});
