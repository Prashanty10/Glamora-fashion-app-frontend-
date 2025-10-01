import {
  View,
  StyleSheet,
  Image,
  Text,
  FlatList,
  Pressable,
  ListRenderItem,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
  rating: number;
};

const shoes: (Product & { description: string; size: number[] })[] = [
  {
    id: "1",
    name: "Nike Air Max 270",
    image: "https://cdn-images.farfetch-contents.com/12/83/31/75/12833175_21352537_1000.jpg",
    price: "$129.99",
    rating: 4.8,
    description:
      "Nike Air Max 270 features a large air unit for maximum comfort, modern styling, and lightweight cushioning for all-day wear.",
    size: [6, 7, 8, 9, 10, 11, 12]
  },
  {
    id: "2",
    name: "Adidas Ultraboost 22",
    image: "https://cdn-images.farfetch-contents.com/12/83/31/75/12833175_21352537_1000.jpg",
    price: "$149.99",
    rating: 4.7,
    description:
      "The Adidas Ultraboost 22 delivers responsive energy return, Primeknit comfort, and a sleek design for performance and lifestyle use.",
    size: [6, 7, 8, 9, 10, 11]
  },
  {
    id: "3",
    name: "Puma RS-X",
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/369666/02/sv01/fnd/IND/fmt/png/RS-X-Shoes",
    price: "$109.50",
    rating: 4.6,
    description:
      "Chunky retro-inspired Puma RS-X sneakers with bold design and superior cushioning for casual streetwear lovers.",
    size: [6, 7, 8, 9, 10]
  },
  {
    id: "4",
    name: "Reebok Classic Leather",
    image: "https://imagescdn.reebok.in/img/app/product/3/39672881-13656145.jpg?auto=format&w=390",
    price: "$89.99",
    rating: 4.5,
    description:
      "Timeless Reebok Classic Leather sneakers, offering premium comfort, soft leather, and iconic retro style.",
    size: [6, 7, 8, 9, 10, 11]
  },
  {
    id: "5",
    name: "Converse Chuck Taylor",
    image: "https://www.converse.in/media/catalog/product/1/6/162050c_g_107x1.jpg",
    price: "$65.00",
    rating: 4.4,
    description:
      "Iconic Converse Chuck Taylor sneakers with canvas upper and rubber sole, a versatile wardrobe essential.",
    size: [5, 6, 7, 8, 9, 10]
  },
  {
    id: "6",
    name: "Vans Old Skool Black",
    image: "https://m.media-amazon.com/images/I/81I8fSOAXkL._UY1000_.jpg",
    price: "$59.95",
    rating: 4.6,
    description:
      "Classic Vans Old Skool in black with signature side stripe, durable suede-canvas construction, and skate-ready style.",
    size: [6, 7, 8, 9, 10]
  },
  {
    id: "7",
    name: "New Balance 574",
    image: "https://cdn-images.farfetch-contents.com/19/92/17/65/19921765_44683734_600.jpg",
    price: "$84.99",
    rating: 4.7,
    description:
      "New Balance 574 offers retro looks with premium comfort, ENCAP cushioning, and versatile everyday wear.",
    size: [6, 7, 8, 9, 10, 11, 12]
  },
  {
    id: "8",
    name: "Skechers D’Lites",
    image: "https://www.skechers.in/on/demandware.static/-/Sites-skechers_india/default/dwe800bcc7/images/large/195204881354-1.jpg",
    price: "$72.40",
    rating: 4.3,
    description:
      "Skechers D’Lites feature lightweight cushioning and a sporty chunky design for comfort and style.",
    size: [6, 7, 8, 9, 10]
  },
  {
    id: "9",
    name: "Fila Disruptor II",
    image: "https://images-cdn.ubuy.co.in/6585e6c28b4c430ecd627eb9-fila-men-39-s-strada-disruptor.jpg",
    price: "$75.20",
    rating: 4.4,
    description:
      "Bold and chunky Fila Disruptor II sneakers with retro 90s vibes and a durable rubber sole.",
    size: [6, 7, 8, 9, 10]
  },
  {
    id: "10",
    name: "Jordan 1 Retro High",
    image: "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/30048643/2024/6/26/4d3c1e04-b818-4d84-ab07-f1c9fab1f52d1719396470488NikeAirJordan1RetroHighOGFirstinFlightWomensShoes1.jpg",
    price: "$199.99",
    rating: 4.9,
    description:
      "The legendary Air Jordan 1 Retro High OG combines premium leather, classic basketball heritage, and unmatched style.",
    size: [6, 7, 8, 9, 10, 11]
  },
];


export default function Shoes() {
  const router = useRouter();

  const renderItem: ListRenderItem<Product> = ({ item }) => (
    <Pressable
      style={styles.card}
      onPress={() =>
        router.push({
          pathname: "/productCategories/Shoes",
          params: { item: JSON.stringify(item) },
        })
      }
    >
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
        <Text style={{ fontSize: 15, fontWeight: "600" }}>Shoes</Text>
        <Pressable>
          <Ionicons name="heart" size={30} color="red" />
        </Pressable>
      </View>

      <FlatList
        data={shoes}
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
