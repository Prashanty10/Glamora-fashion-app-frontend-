import {
  View,
  StyleSheet,
  Image,
  Text,
  FlatList,
  Pressable,
  ListRenderItem,
  SafeAreaView,
} from "react-native";
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
  size: string[];
};

const kidsCloth: Product[] = [
  {
    id: "1",
    name: "Carter’s Yellow T-Shirt",
    image: "https://punkrockshop.co.uk/cdn/shop/products/PHD12716.jpg?v=1623283993",
    price: "$12.99",
    rating: 4.4,
    description:
      "Bright and cheerful Carter’s yellow T-shirt made from soft cotton. Comfortable for everyday play and casual wear.",
    size: ["2T", "3T", "4T", "5T"],
  },
  {
    id: "2",
    name: "H&M Kids Blue Jeans",
    image: "https://image.hm.com/assets/hm/42/3e/423ef5aba6bb8fd1fd63c3bb469e2ffb6d0c006c.jpg?imwidth=2160",
    price: "$19.50",
    rating: 4.2,
    description:
      "Durable and stylish blue jeans by H&M, designed for comfort and long-lasting wear for kids.",
    size: ["2T", "3T", "4T", "5T", "6T"],
  },
  {
    id: "3",
    name: "Nike Kids Sneakers",
    image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/2e73e441-6923-463e-83e8-536fb536de5b/FLEX+RUNNER+3+%28GS%29.png",
    price: "$49.99",
    rating: 4.7,
    description:
      "Sporty and lightweight Nike sneakers built with cushioning for active kids who love running and playing.",
    size: ["10", "11", "12", "13", "1", "2"],
  },
  {
    id: "4",
    name: "Adidas Kids Tracksuit",
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/157bf586b7794435b732ac8200bc7039_9366/Adicolor_SST_Tracksuit_Black_GN8441_01_laydown.jpg",
    price: "$45.30",
    rating: 4.5,
    description:
      "Classic Adidas tracksuit with signature 3-stripe design, offering comfort for sports and casual outings.",
    size: ["4T", "5T", "6T", "7T", "8T"],
  },
  {
    id: "5",
    name: "Puma Kids Hoodie",
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/632396/01/mod01/fnd/IND/fmt/png/PUMA-x-HOT-WHEELS-Boys%E2%80%99-Monster-Trucks-Hoodie",
    price: "$29.99",
    rating: 4.3,
    description:
      "Warm and stylish Puma hoodie made from soft fabric. Great for layering during colder days.",
    size: ["2T", "3T", "4T", "5T", "6T"],
  },
  {
    id: "6",
    name: "Gap Kids Denim Jacket",
    image: "https://assets.ajio.com/medias/sys_master/root/20230901/D0VG/64f1cbd0afa4cf41f59c9281/-473Wx593H-442252551-denimblue-MODEL.jpg",
    price: "$35.75",
    rating: 4.6,
    description:
      "Trendy Gap denim jacket that adds a cool edge to kids’ outfits while being versatile and durable.",
    size: ["4T", "5T", "6T", "7T", "8T"],
  },
  {
    id: "7",
    name: "Levi’s Kids Overalls",
    image: "https://lsco.scene7.com/is/image/lsco/372310073-front-pdp?fmt=jpeg&qlt=70&resMode=sharp2&fit=crop,1&op_usm=0.6,0.6,8&wid=2000&hei=2500",
    price: "$32.80",
    rating: 4.2,
    description:
      "Classic Levi’s denim overalls for kids, combining style with everyday comfort and durability.",
    size: ["2T", "3T", "4T", "5T", "6T"],
  },
  {
    id: "8",
    name: "OshKosh Striped Dress",
    image: "https://images-cdn.ubuy.co.in/655247ca946db960ae617609-oshkosh-b-39-gosh-toddler.jpg",
    price: "$22.40",
    rating: 4.5,
    description:
      "Cute and colorful striped dress from OshKosh, perfect for special occasions and casual days.",
    size: ["2T", "3T", "4T", "5T"],
  },
  {
    id: "9",
    name: "Zara Kids Bomber Jacket",
    image: "https://static.zara.net/assets/public/884f/6600/3e6043f6a7c8/2c0774b04784/04323771818-e1/04323771818-e1.jpg?ts=1757074939565&w=352&f=auto",
    price: "$39.99",
    rating: 4.4,
    description:
      "Trendy bomber jacket by Zara, designed for a stylish and warm layer during cooler weather.",
    size: ["4T", "5T", "6T", "7T", "8T"],
  },
  {
    id: "10",
    name: "Uniqlo Kids Sweater",
    image: "https://image.uniqlo.com/UQ/ST3/us/imagesgoods/478142/item/usgoods_69_478142_3x4.jpg?width=250",
    price: "$18.60",
    rating: 4.0,
    description:
      "Cozy knit sweater by Uniqlo, lightweight yet warm, making it ideal for everyday winter wear.",
    size: ["2T", "3T", "4T", "5T", "6T"],
  },
  {
    id: "11",
    name: "Columbia Kids Rain Jacket",
    image: "https://content.steepandcheap.com/images/items/large/COL/COL00LC/COLNAVB.jpg",
    price: "$55.40",
    rating: 4.7,
    description:
      "Waterproof Columbia rain jacket designed to keep kids dry and comfortable on rainy days.",
    size: ["4T", "5T", "6T", "7T", "8T"],
  },
  {
    id: "12",
    name: "The Children’s Place Pajama Set",
    image: "https://images-cdn.ubuy.co.in/67aef0043964d03d7a5f9e4d-the-children-39-s-place-girls-39-long.jpg",
    price: "$15.99",
    rating: 4.3,
    description:
      "Soft and cute pajama set from The Children’s Place. Comfortable for a restful night’s sleep.",
    size: ["2T", "3T", "4T", "5T"],
  },
  {
    id: "13",
    name: "Disney Frozen T-Shirt",
    image: "https://m.media-amazon.com/images/I/616RScNkiNL._UY1100_.jpg",
    price: "$14.20",
    rating: 4.6,
    description:
      "Adorable Frozen-themed T-shirt for kids featuring Elsa and Anna. A must-have for Disney fans.",
    size: ["2T", "3T", "4T", "5T", "6T"],
  },
  {
    id: "14",
    name: "Peppa Pig Printed Dress",
    image: "https://www.jiomart.com/images/product/original/420326381_aqua/peppa-pig-print-dress-with-briefs-model-420326381_aqua-0-202305120303.jpg?im=Resize=(500,630)",
    price: "$19.40",
    rating: 4.4,
    description:
      "Fun and playful Peppa Pig printed dress for kids, perfect for casual wear and themed parties.",
    size: ["2T", "3T", "4T", "5T"],
  },
];


export default function Kidcloth() {
  const router = useRouter();

  const renderItem: ListRenderItem<Product> = ({ item }) => (
    <Pressable
      style={styles.card}
      onPress={() =>
        router.push({
          pathname: "/productCategories/Kids",
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
        <Text style={{ fontSize: 15, fontWeight: "600" }}>Kids, Wear</Text>
        <Pressable>
          <Ionicons name="heart" size={30} color="red" />
        </Pressable>
      </View>

      <FlatList
        data={kidsCloth}
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
