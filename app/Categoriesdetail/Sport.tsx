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
  description: string;
  size: string[]; // added size array
};

const sportsCloth: Product[] = [
  {
    id: "1",
    name: "Nike Pro Training T-Shirt",
    image: "https://m.media-amazon.com/images/I/51qBQiorM-L._UY1100_.jpg",
    price: "$39.99",
    rating: 4.6,
    description:
      "A lightweight, moisture-wicking Nike Pro Dri-FIT T-shirt designed for intense training sessions, keeping you cool and dry during workouts.",
    size: ["S", "M", "L", "XL"],
  },
  {
    id: "2",
    name: "Adidas 3-Stripes Shorts",
    image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/e01315b1dc63497a9927af0900ebafc6_9366/Essentials_French_Terry_3-Stripes_Shorts_Black_IC9435_01_laydown.jpg",
    price: "$29.99",
    rating: 4.5,
    description:
      "Classic Adidas shorts with iconic 3-Stripes design, breathable fabric, and an elastic waistband for maximum comfort and flexibility.",
    size: ["S", "M", "L", "XL"],
  },
  {
    id: "3",
    name: "Under Armour HeatGear Tank",
    image: "https://www.underarmour.in/media/catalog/product/cache/94aed228cda806fc9e3c8a7bf666ca42/1/3/1361522-220230712162824746.jpeg",
    price: "$34.99",
    rating: 4.4,
    description:
      "Under Armour HeatGear tank top engineered to deliver ultra-light comfort, keeping you cool, dry, and ready to push limits.",
    size: ["S", "M", "L", "XL"],
  },
  {
    id: "4",
    name: "Puma Running Jacket",
    image: "https://img.tatacliq.com/images/i20//437Wx649H/MP000000023881790_437Wx649H_202409281357051.jpeg",
    price: "$59.99",
    rating: 4.6,
    description:
      "Lightweight Puma jacket with water-repellent finish, perfect for outdoor runs and training in unpredictable weather.",
    size: ["M", "L", "XL"],
  },
  {
    id: "5",
    name: "Reebok Training Shorts",
    image: "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/16988592/2022/1/31/d821b370-7a9d-4d0f-82be-31fc1ee937191643614323131Shorts1.jpg",
    price: "$27.99",
    rating: 4.3,
    description:
      "Breathable and lightweight Reebok shorts built for movement, ideal for gym training or casual wear.",
    size: ["S", "M", "L", "XL"],
  },
  {
    id: "6",
    name: "Nike Dri-FIT Joggers",
    image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/2b43bd68-99cc-4742-bb60-18250fc05e8e/M+NK+DF+UV+PRIMARY+JOGGER+PANT.png",
    price: "$64.99",
    rating: 4.7,
    description:
      "Tapered-fit Nike Dri-FIT joggers with sweat-wicking technology, offering style and comfort for training or everyday use.",
    size: ["S", "M", "L", "XL"],
  },
  {
    id: "7",
    name: "Adidas Predator Jersey",
    image: "https://images.stockx.com/images/adidas-Predator-David-Beckham-Jersey-White-Clear-Grey.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1655827019",
    price: "$42.50",
    rating: 4.5,
    description:
      "Breathable Adidas Predator jersey designed for football training, featuring lightweight fabric for peak performance.",
    size: ["S", "M", "L", "XL"],
  },
  {
    id: "8",
    name: "Columbia Sports Hoodie",
    image: "https://img.tatacliq.com/images/i18//437Wx649H/MP000000022723872_437Wx649H_202406262121351.jpeg",
    price: "$55.00",
    rating: 4.4,
    description:
      "Soft and warm Columbia hoodie, perfect for layering during outdoor adventures and casual workouts.",
    size: ["M", "L", "XL"],
  },
  {
    id: "9",
    name: "Decathlon Kalenji Track Pants",
    image: "https://contents.mediadecathlon.com/p2157087/f6e17d7856c7ea98f662a83ffd56624b/p2157087.jpg",
    price: "$24.99",
    rating: 4.2,
    description:
      "Affordable and durable Kalenji running pants with stretchable fit, built for endurance and comfort.",
    size: ["S", "M", "L", "XL"],
  },
  {
    id: "10",
    name: "Nike Sports Bra",
    image: "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/23759626/2023/7/14/64274e3e-3cec-4548-b27c-b30ec6372ac81689330487070NikeSwooshMedium-SupportPaddedSportsBra1.jpg",
    price: "$39.99",
    rating: 4.6,
    description:
      "Medium-support Nike sports bra with padding and breathable fabric, designed for high-intensity workouts.",
    size: ["S", "M", "L"],
  },
  {
    id: "11",
    name: "Fila Disruptor II",
    image: "https://images-cdn.ubuy.co.in/6585e6c28b4c430ecd627eb9-fila-men-39-s-strada-disruptor.jpg",
    price: "$75.20",
    rating: 4.4,
    description:
      "Bold and chunky Fila Disruptor II sneakers with retro 90s vibes and a durable rubber sole.",
    size: ["8", "9", "10", "11"],
  },
  {
    id: "12",
    name: "Jordan 1 Retro High",
    image: "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/30048643/2024/6/26/4d3c1e04-b818-4d84-ab07-f1c9fab1f52d1719396470488NikeAirJordan1RetroHighOGFirstinFlightWomensShoes1.jpg",
    price: "$199.99",
    rating: 4.9,
    description:
      "The legendary Air Jordan 1 Retro High OG combines premium leather, classic basketball heritage, and unmatched style.",
    size: ["8", "9", "10", "11"],
  },
];


export default function Sports() {
  const router = useRouter();

  const renderItem: ListRenderItem<Product> = ({ item }) => (
    <Pressable
      style={styles.card}
      onPress={() =>
        router.push({
          pathname: "/productCategories/Sports",
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
        <Text style={{ fontSize: 15, fontWeight: "600" }}>Sportswear</Text>
        <Pressable>
          <Ionicons name="heart" size={30} color="red" />
        </Pressable>
      </View>

      <FlatList
        data={sportsCloth}
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
