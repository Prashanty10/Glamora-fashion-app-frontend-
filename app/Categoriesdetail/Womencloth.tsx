import {
  View,
  StyleSheet,
  Image,
  Text,
  FlatList,
  Pressable,
  ListRenderItem,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { useLocalSearchParams, useRouter } from "expo-router";
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

const womensCloth: Product[] = [
  {
    id: "1",
    name: "Zara Floral Midi Dress",
    image: "https://static.zara.net/assets/public/794d/7071/ee6f4ddc82eb/892b3521a013/08620134330-p/08620134330-p.jpg?ts=1753885471554&w=744&f=auto",
    price: "$49.99",
    rating: 4.5,
    description:
      "A breezy floral midi dress from Zara, perfect for casual outings or a chic summer look. Lightweight fabric with a modern silhouette that ensures all-day comfort.",
    size: ["S", "M", "L"]
  },
  {
    id: "2",
    name: "H&M White Blouse",
    image: "https://image.hm.com/assets/hm/b9/ff/b9fff1b03cf23c4608ffffc054c807d350170aa0.jpg?imwidth=2160",
    price: "$19.99",
    rating: 4.2,
    description:
      "Classic white blouse by H&M, a wardrobe essential that pairs effortlessly with jeans, skirts, or formal trousers.",
    size: ["XS", "S", "M", "L"]
  },
  {
    id: "3",
    name: "Forever 21 Blue Denim Jacket",
    image: "https://assets.ajio.com/medias/sys_master/root/20240610/g5mV/6666dfa616fd2c6e6a6bd977/-1117Wx1400H-461329865-blue-MODEL.jpg",
    price: "$39.50",
    rating: 4.1,
    description:
      "Trendy denim jacket from Forever 21, featuring a versatile blue wash. Ideal for layering and everyday wear.",
    size: ["S", "M", "L"]
  },
  {
    id: "4",
    name: "Gucci Black Handbag",
    image: "https://cdn-images.farfetch-contents.com/23/86/67/26/23866726_53968519_600.jpg",
    price: "$1240.00",
    rating: 4.8,
    description:
      "Luxury Gucci Marmont mini bag in black leather, designed with signature matelassé stitching and gold hardware.",
    size: ["One Size"]
  },
  {
    id: "5",
    name: "Prada Beige Overcoat",
    image: "https://vspconsignment.com/cdn/shop/products/Prada-Beige-Revere-Collar-Trench-Coat-0083_2400x.jpg?v=1671740506",
    price: "$980.75",
    rating: 4.9,
    description:
      "Elegant Prada overcoat in beige, tailored for a premium finish. Perfect for both professional and casual layering.",
    size: ["S", "M", "L", "XL"]
  },
  {
    id: "6",
    name: "Levi's Skinny Blue Jeans",
    image: "https://m.media-amazon.com/images/I/91O-HsYuTHL._UY1100_.jpg",
    price: "$45.60",
    rating: 4.3,
    description:
      "Classic Levi’s skinny jeans in a versatile blue wash. Comfortable fit with stretch, designed for everyday style.",
    size: ["26", "28", "30", "32"]
  },
  {
    id: "7",
    name: "Nike Pink Running Shoes",
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1d1a23f8-16be-4813-9e58-75812246ba62/W+AIR+ZOOM+PEGASUS+41.png",
    price: "$68.90",
    rating: 4.6,
    description:
      "Stylish Nike Revolution 7 pink running shoes. Lightweight cushioning and breathable material built for performance.",
    size: ["6", "7", "8", "9"]
  },
  {
    id: "8",
    name: "Adidas Black Leggings",
    image: "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/30380857/2024/9/13/a95270e3-d016-4775-b3f5-5f65393151f71726208139493-ADIDAS-Women-Tights-2691726208138889-1.jpg",
    price: "$32.40",
    rating: 4.4,
    description:
      "Comfortable Adidas black leggings made with soft stretch fabric. Perfect for workouts or casual wear.",
    size: ["S", "M", "L"]
  },
  {
    id: "9",
    name: "Calvin Klein Red Bodycon Dress",
    image: "https://assets.ajio.com/medias/sys_master/root/20240615/QZtI/666d27e41d763220fabea238/-473Wx593H-469478226-red-MODEL.jpg",
    price: "$87.20",
    rating: 4.7,
    description:
      "Elegant Calvin Klein red bodycon dress designed to accentuate curves. A statement piece for parties and evening wear.",
    size: ["S", "M", "L"]
  },
  {
    id: "10",
    name: "Uniqlo Beige Cardigan",
    image: "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/451684/sub/goods_451684_sub14_3x4.jpg?width=600",
    price: "$28.15",
    rating: 4.0,
    description:
      "Cozy Uniqlo beige cardigan made with soft knit fabric. A versatile layering piece for all seasons.",
    size: ["S", "M", "L", "XL"]
  },
  {
    id: "11",
    name: "Mango Black Leather Jacket",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPGTjPt09hZNQLvQB62yqzIhtpRqQrFP4gtw&s",
    price: "$120.30",
    rating: 4.5,
    description:
      "Chic black leather jacket by Mango, offering a bold and edgy look. Ideal for pairing with jeans or dresses.",
    size: ["S", "M", "L"]
  },
  {
    id: "12",
    name: "H&M Pleated Skirt",
    image: "https://image.hm.com/assets/hm/83/1b/831b9ef34ca733cb725a005f71b56e05a8101893.jpg",
    price: "$24.60",
    rating: 4.1,
    description:
      "Stylish pleated skirt from H&M, lightweight and flowy for casual or semi-formal looks.",
    size: ["S", "M", "L"]
  },
  {
    id: "13",
    name: "Under Armour Sports Bra",
    image: "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019995410_437Wx649H_202311090040113.jpeg",
    price: "$29.99",
    rating: 4.3,
    description:
      "Supportive sports bra from Under Armour, engineered for comfort and flexibility during workouts.",
    size: ["S", "M", "L"]
  },
  {
    id: "14",
    name: "Ralph Lauren White Polo Dress",
    image: "https://rustans.com/cdn/shop/products/29993253.jpg?v=1677117337&width=540",
    price: "$110.45",
    rating: 4.6,
    description:
      "Timeless white polo dress by Ralph Lauren, blending sporty elegance with a flattering fit.",
    size: ["S", "M", "L"]
  },
];


export default function Womencloth() {
  const router = useRouter();

  const renderItem: ListRenderItem<Product> = ({ item }) => (
    <Pressable
      style={styles.card}
      onPress={() =>
        router.push({
          pathname: "/productCategories/Womens",
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
    <>
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
          <Text style={{ fontSize: 15, fontWeight: 600 }}>Women, Wear</Text>
          <Pressable>
            <Ionicons name="heart" size={30} color="red" />
          </Pressable>
        </View>

        <FlatList
          data={womensCloth}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      </SafeAreaView>
    </>
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
