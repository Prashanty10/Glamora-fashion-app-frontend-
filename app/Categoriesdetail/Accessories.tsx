import {
  View,
  StyleSheet,
  Image,
  Text,
  FlatList,
  Pressable,
  ListRenderItem,
} from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
  rating: number;
  description: string;
  size:string
};

const accessories: Product[] = [
  { 
    id: "1",
    name: "Ray-Ban Aviator Sunglasses",
    image: "https://assets.ajio.com/medias/sys_master/root/20231107/6NGF/654a7d95ddf779151976b50b/-473Wx593H-469567266-black-MODEL.jpg",
    price: "$150.00",
    rating: 4.8,
    description: "Classic Ray-Ban Aviators with a timeless design, lightweight frame, and UV protection for everyday style and comfort.",
    size: "Standard"
  },
  { 
    id: "2",
    name: "Gucci Leather Belt",
    image: "https://louisemporium.com/wp-content/uploads/2024/02/3699-2.webp",
    price: "$390.00",
    rating: 4.7,
    description: "Premium Gucci leather belt featuring the iconic Interlocking G buckle, crafted for elegance and luxury.",
    size: "M"
  },
  { 
    id: "3",
    name: "Prada Black Wallet",
    image: "https://cdn-images.farfetch-contents.com/19/76/12/83/19761283_44201528_600.jpg",
    price: "$420.00",
    rating: 4.6,
    description: "Sophisticated Prada wallet made with fine leather, compact yet stylish with multiple card slots for daily use.",
    size: "Standard"
  },
  { 
    id: "4",
    name: "Louis Vuitton Key Pouch",
    image: "https://blog.fashionphile.com/wp-content/uploads/2023/05/LVKeyPouches_BlogHero.jpg",
    price: "$325.00",
    rating: 4.7,
    description: "Louis Vuitton monogram canvas key pouch that doubles as a coin holder, compact and perfect for travel.",
    size: "Standard"
  },
  { 
    id: "5",
    name: "Armani Silk Tie",
    image: "https://cdn-images.farfetch-contents.com/28/97/36/30/28973630_58260697_600.jpg",
    price: "$120.00",
    rating: 4.5,
    description: "Elegant Armani silk tie designed for formal occasions, made from high-quality silk for a refined look.",
    size: "One Size"
  },
  { 
    id: "6",
    name: "Hermès Silk Scarf",
    image: "https://assets.hermes.com/is/image/hermesproduct/le-sacre-des-saisons-scarf-90--003903S%2001-worn-1-0-0-800-800_g.jpg",
    price: "$480.00",
    rating: 4.9,
    description: "Luxurious Hermès silk scarf with artistic prints, a timeless accessory for elegance and sophistication.",
    size: "One Size"
  },
  { 
    id: "7",
    name: "Burberry Checkered Cap",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7mDFK_DQQr3X4Gt3IBu1w0n3h4HcHE1JLmw&s",
    price: "$210.00",
    rating: 4.6,
    description: "Burberry classic checkered cap crafted from durable cotton, blending casual style with luxury branding.",
    size: "Standard"
  },
  { 
    id: "8",
    name: "Michael Kors Bracelet",
    image: "https://images-cdn.ubuy.co.in/667cb3636034ea51dc115c4d-michael-kors-gold-tone-bracelet-for.jpg",
    price: "$140.00",
    rating: 4.5,
    description: "Stylish Michael Kors bracelet with elegant finishing, perfect for adding charm to casual or formal outfits.",
    size: "M"
  },
  { 
    id: "9",
    name: "Coach Leather Wallet",
    image: "https://louisemporium.com/wp-content/uploads/2024/01/photo_2024-01-18_15-29-28-2.jpg",
    price: "$175.00",
    rating: 4.4,
    description: "Coach leather wallet designed with durability and multiple compartments, balancing functionality and elegance.",
    size: "Standard"
  },
  { 
    id: "10",
    name: "Fossil Brown Belt",
    image: "https://media-us.landmarkshops.in/cdn-cgi/image/h=550,w=550,q=85,fit=cover/lifestyle/1000009286217-Brown-Brown-1000009286217_01-2100.jpg",
    price: "$65.00",
    rating: 4.3,
    description: "Casual Fossil brown belt crafted from genuine leather with a sturdy buckle, perfect for daily wear.",
    size: "L"
  },
];




export default function Accessories() {
  const router = useRouter();

  const renderItem: ListRenderItem<Product> = ({ item }) => (
    <Pressable style={styles.card}
    onPress={() =>
        router.push({
          pathname: "/productCategories/Access",
          params: { item: JSON.stringify(item) }, 
        })
      }>
      <Image style={styles.image} source={{ uri: item.image }} />
      <Text style={styles.name}>{item.name}</Text>
      <Text>
        {item.price} | <Text style={styles.star}>⭐</Text>{" "}
        <Text style={styles.rating}>{item.rating}</Text>
      </Text>
      <Pressable>
        <Text style={styles.buyBtn}>Buy Now</Text>
      </Pressable>
    </Pressable>
  );

  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          marginTop: 10,
        }}
      >
        <Pressable onPress={() => router.push("/tabs/Home")}>
          <Ionicons name="arrow-back" size={26} color="black" />
        </Pressable>
        <Text style={{ fontSize: 15, fontWeight: "600" }}>Accessories</Text>
        <Pressable>
          <Ionicons name="heart" size={30} color="red" />
        </Pressable>
      </View>

      <FlatList
        data={accessories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    flex: 1,
    gap: responsiveHeight(1.5),
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveHeight(3),
    backgroundColor: "white",
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: responsiveWidth(3),
    margin: responsiveWidth(2),
  },
  image: {
    height: responsiveHeight(20),
    width: responsiveWidth(40),
    resizeMode: "contain",
    borderRadius: responsiveWidth(2),
    alignItems: "center",
  },
  name: {
    flex: 1,
    fontSize: 15,
    textAlign: "center",
    fontWeight: "600",
  },
  star: {
    color: "gold",
    fontSize: 16,
  },
  rating: {
    color: "#444",
    fontWeight: "600",
  },
  buyBtn: {
    color: "white",
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: responsiveWidth(10),
    overflow: "hidden",
  },
});
