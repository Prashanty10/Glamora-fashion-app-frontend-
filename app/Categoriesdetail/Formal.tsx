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
  size: string[]; // now an array of sizes
};

const formalCloth: Product[] = [
  {
    id: "1",
    name: "Raymond Slim Fit Suit",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTpRaICRmyt9nBV1_bFADRNrPL1E_RW4bzDVqZ9YrhEtkeIWnECllfMBP-HDDRf9qil9nOEvfEgCA1kCb4nHsB1cIhvqXu6_9419ACCx0vQfnLF8O-m4gCxOA",
    price: "$249.99",
    rating: 4.6,
    description:
      "A premium Raymond Slim Fit Suit crafted with fine fabric, offering modern tailoring for business and formal events. Lightweight, breathable, and styled for sophistication.",
    size: ["S", "M", "L", "XL"],
  },
  {
    id: "2",
    name: "Van Heusen White Shirt",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSh8k8njQZil_9a9MQGiszXaFS000ggNypTWJdRPYMhz-SIreFnig621ZqtJivUCJLTcyqHKFrUZcTT8qDlXJpyVKJqPRTeWPME0Es_MHkEtRxK76e1qcF0Rg",
    price: "$49.99",
    rating: 4.4,
    description:
      "A crisp Van Heusen White Shirt made with wrinkle-resistant cotton blend. Ideal for office wear and versatile enough for evening events.",
    size: ["M", "L", "XL"],
  },
  {
    id: "3",
    name: "Allen Solly Black Blazer",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSh8k8njQZil_9a9MQGiszXaFS000ggNypTWJdRPYMhz-SIreFnig621ZqtJivUCJLTcyqHKFrUZcTT8qDlXJpyVKJqPRTeWPME0Es_MHkEtRxK76e1qcF0Rg",
    price: "$180.50",
    rating: 4.5,
    description:
      "This Allen Solly Black Blazer is tailored for comfort and class. Its structured design and smooth finish make it perfect for meetings, dinners, and formal occasions.",
    size: ["S", "M", "L"],
  },
  {
    id: "4",
    name: "Arrow Formal Trousers",
    image: "https://m.media-amazon.com/images/I/81i91kI1bPL._UY1100_.jpg",
    price: "$75.00",
    rating: 4.3,
    description:
      "Arrow Formal Trousers with a sharp fit, designed for long-lasting comfort. Perfect for professional environments and business casual looks.",
    size: ["M", "L", "XL"],
  },
  {
    id: "5",
    name: "Peter England Blue Shirt",
    image:
      "https://imagescdn.peterengland.com/img/app/product/3/39831756-19499222.jpg?auto=format&w=390",
    price: "$55.00",
    rating: 4.4,
    description:
      "Peter England Blue Shirt crafted from high-quality cotton. Lightweight, breathable, and ideal for daily office wear with a touch of style.",
    size: ["S", "M", "L"],
  },
  {
    id: "6",
    name: "Louis Philippe Navy Suit",
    image:
      "https://imagescdn.louisphilippe.com/img/app/product/8/805317-9546192.jpg?auto=format&w=390",
    price: "$320.00",
    rating: 4.7,
    description:
      "Louis Philippe Navy Suit featuring timeless elegance. Premium wool blend, slim fit tailoring, and unmatched sophistication for business and weddings.",
    size: ["M", "L", "XL"],
  },
  {
    id: "7",
    name: "Park Avenue Grey Blazer",
    image:
      "https://imagescdn.louisphilippe.com/img/app/product/8/805317-9546192.jpg?auto=format&w=390",
    price: "$210.00",
    rating: 4.5,
    description:
      "Park Avenue Grey Blazer with a refined look and versatile design. Pairs well with shirts and trousers for semi-formal or corporate events.",
    size: ["S", "M", "L"],
  },
  {
    id: "8",
    name: "Zara Slim Fit Shirt",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTjJui6UxD_BLDqSIOslVyF8ERkKcqhkvIWPvIkoYQQFvtYcZLUOf24XhoPhr1XwEwU5Ep12ueaqCv3gVWjVrYu4D-t7hDrasjHZT3ApfaZzRyP7FvlIfef-dA",
    price: "$69.90",
    rating: 4.2,
    description:
      "Zara Slim Fit Shirt designed for a contemporary look. Comfortable fabric and minimalistic design make it a wardrobe essential.",
    size: ["M", "L", "XL"],
  },
  {
    id: "9",
    name: "Marks & Spencer Tie Set",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRqXeW_ZnMZJxodkM7wHyEFqyfPBEHbFpNBEZGQvXUsRNaC73VbO_qsb-Hx2ZuWmz5crketSNd3XYjhLwhT1CnfNkDkqrWlTEDXR4N2ve2Ne_wTzf_CmUq1",
    price: "$39.99",
    rating: 4.3,
    description:
      "Marks & Spencer Tie Set with premium finish. Adds the perfect finishing touch to any suit or shirt for formal occasions.",
    size: ["Standard"],
  },
  {
    id: "10",
    name: "Hugo Boss Formal Shoes",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRqXeW_ZnMZJxodkM7wHyEFqyfPBEHbFpNBEZGQvXUsRNaC73VbO_qsb-Hx2ZuWmz5crketSNd3XYjhLwhT1CnfNkDkqrWlTEDXR4N2ve2Ne_wTzf_CmUq1",
    price: "$270.00",
    rating: 4.6,
    description:
      "Hugo Boss Formal Shoes crafted with genuine leather. Durable, stylish, and comfortable for long office hours and events.",
    size: ["8", "9", "10", "11"],
  },
];

export default function Formal() {
  const router = useRouter();

  const renderItem: ListRenderItem<Product> = ({ item }) => (
    <Pressable
      style={styles.card}
      onPress={() =>
        router.push({
          pathname: "/productCategories/Formal",
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
        <Text style={{ fontSize: 15, fontWeight: "600" }}>Formal Wear</Text>
        <Pressable>
          <Ionicons name="heart" size={30} color="red" />
        </Pressable>
      </View>

      <FlatList
        data={formalCloth}
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
