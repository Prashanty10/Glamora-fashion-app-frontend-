import { useRouter } from "expo-router";
import { View, StyleSheet, Image, Text, FlatList, Pressable, ListRenderItem } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
  rating: string;
  description: string;
  size:string
};

const products: Product[] = [
  {
    id: "1",
    name: "H&M Hoodie",
    price: "$100",
    size: "M",
    image: "https://assets.ajio.com/medias/sys_master/root/20240913/HDXy/66e468d16f60443f317a06b7/-1117Wx1400H-700420474-white-MODEL.jpg",
    rating: "4.1",
    description: "A cozy H&M hoodie crafted from a premium cotton blend with ribbed cuffs and an adjustable drawstring hood. Perfect for layering during chilly days while keeping a stylish casual look.",
  },
  {
    id: "2",
    name: "Nike Air Max",
    price: "$150",
    size: "9",
    image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/1531a2b7-4f30-4018-a481-4041fd70180d/NIKE+AIR+MAX+1+%2786+OG+G.png",
    rating: "4.5",
    description: "Iconic Nike Air Max sneakers designed for ultimate comfort and style. Featuring visible Air cushioning, durable material, and a sleek sporty silhouette suitable for everyday wear.",
  },
  {
    id: "3",
    name: "Adidas T-Shirt",
    price: "$60",
    size: "L",
    image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/b0bafb81206a485c918d3d5ca7ca7d8c_9366/3-Stripes_Tee_White_IR8051_01_laydown.jpg",
    rating: "4.3",
    description: "Classic Adidas T-shirt with the signature 3-stripes design. Made with breathable cotton fabric for comfort, ideal for workouts, sports, or casual outings.",
  },
  {
    id: "4",
    name: "Levi’s Denim Jacket",
    price: "$120",
    size: "M",
    image: "https://www.houseoffraser.co.uk/images/imgzoom/60/60535518_xxl.jpg",
    rating: "4.6",
    description: "A timeless Levi’s denim jacket featuring durable stitching, button closures, and a rugged yet stylish design. Perfect for layering and everyday wear.",
  },
  {
    id: "5",
    name: "Zara Casual Shirt",
    price: "$75",
    size: "M",
    image: "https://static.zara.net/assets/public/2ead/01f0/37584e71adeb/d6919a4456d5/00526460800-p/00526460800-p.jpg?ts=1735217398112&w=560",
    rating: "4.0",
    description: "Lightweight and breathable casual shirt from Zara, ideal for both work and weekend wear. Features a clean cut with a modern slim fit.",
  },
  {
    id: "6",
    name: "Puma Sports Shorts",
    price: "$45",
    size: "M",
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/582838/01/mod01/fnd/IND/fmt/png/Modern-Sports-Men's-Shorts",
    rating: "4.2",
    description: "Puma sports shorts designed for active lifestyles. Quick-dry fabric with elastic waistband ensures comfort and flexibility during workouts or casual wear.",
  },
  {
    id: "7",
    name: "Gucci Sunglasses",
    price: "$220",
    size: "Standard",
    image: "https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1718124352/733368_J1691_1012_003_100_0000_Light-oversized-rectangular-sunglasses.jpg",
    rating: "4.7",
    description: "Premium Gucci oversized sunglasses with rectangular frames. Crafted with luxury materials for durability and a bold fashion-forward statement.",
  },
  {
    id: "8",
    name: "Tommy Hilfiger Polo",
    price: "$85",
    size: "L",
    image: "https://cdn18.nnnow.com/web-images/large/styles/CUY1OQ8TVSF/1737528736280/1.jpg",
    rating: "4.4",
    description: "Classic Tommy Hilfiger polo shirt featuring a signature embroidered logo and a soft cotton pique fabric. A wardrobe staple for casual elegance.",
  },
  {
    id: "9",
    name: "Converse Chuck Taylor",
    price: "$70",
    size: "10",
    image: "https://converse.static.n7.io/media/catalog/product/cache/c2eb1f0db702462ce5dab3d57b75c6e4/m/9/m9622_e_107x1378.jpg",
    rating: "4.5",
    description: "The iconic Converse Chuck Taylor sneakers with a timeless canvas upper and durable rubber sole. A must-have streetwear essential since decades.",
  },
  {
    id: "10",
    name: "Louis Vuitton Backpack",
    price: "$350",
    size: "Standard",
    image: "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-christopher-mm--M43735_PM2_Front%20view.jpg",
    rating: "4.8",
    description: "Luxury Louis Vuitton backpack featuring premium leather craftsmanship and a spacious interior. A stylish yet practical accessory for daily use.",
  },
  {
    id: "11",
    name: "Uniqlo Winter Coat",
    price: "$180",
    size: "L",
    image: "https://www.uniqlo.com/jp/ja/contents/feature/catalog-2021fw/common/img/all/technology-for-winter/item-02-01.jpg?20210820",
    rating: "4.6",
    description: "Uniqlo’s insulated winter coat designed with Heattech technology. Lightweight yet warm, perfect for harsh winter conditions without compromising style.",
  },
  {
    id: "12",
    name: "Under Armour Cap",
    price: "$35",
    size: "Standard",
    image: "https://hatstore.imgix.net/194513883073_1.jpg",
    rating: "4.2",
    description: "Durable Under Armour cap featuring moisture-wicking fabric and breathable panels. Provides comfort and sun protection for outdoor activities.",
  },
  {
    id: "13",
    name: "Adidas Jacket",
    price: "$199",
    size: "M",
    image: "https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/U53829s.jpg?im=Resize,width=750",
    rating: "4.7",
    description: "A stylish Adidas jacket designed with performance fabric for warmth and breathability. Ideal for casual wear or training sessions in cooler weather.",
  },
  {
    id: "14",
    name: "Casual Black Blazer",
    price: "$250",
    size: "L",
    image: "https://media.istockphoto.com/id/1154938567/photo/black-men-jacket.jpg?s=612x612&w=0&k=20&c=iKfOz0jW0m15EMCbNFBlkClHUk1v5RJ0iRYAUludZQw=",
    rating: "4.5",
    description: "Elegant black blazer tailored for a sleek fit. Perfect for formal events, office wear, or smart-casual outings, adding sophistication to any outfit.",
  },
  {
    id: "15",
    name: "Armani Suit",
    price: "$500",
    size: "L",
    image: "https://assets.armani.com/image/upload/f_auto,q_auto:best,ar_4:5,w_1350,c_fill/8WGAV007_T003K_U8NL_F_FW2025.jpg",
    rating: "4.9",
    description: "Luxury Armani suit tailored from fine Italian fabric. Known for its perfect cut and refined design, making it an essential choice for special occasions.",
  },
  {
    id: "16",
    name: "Navy Blue Suit",
    price: "$500",
    size: "L",
    image: "https://media.istockphoto.com/id/1347568249/photo/blank-blue-blazer-mockup-mens-grey-suit-front-view.jpg?s=612x612&w=0&k=20&c=CYPM-WaabwIFvGxfb7KhR_JcvY5D3ujBj0i1YUznDP0=",
    rating: "4.9",
    description: "Sophisticated navy blue suit crafted for modern gentlemen. Featuring a tailored slim fit and premium fabric, suitable for weddings, business, or formal events.",
  },
];



export default function Account() {
  const router = useRouter();

  const renderItem: ListRenderItem<Product> = ({ item }) => (
    <Pressable
      style={styles.card}
      onPress={() =>
        router.push({
          pathname: "/components/Productdetails",
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
    <View style={{ flex: 1, backgroundColor: "#F8F8F8" }}>
      <Text
        style={{
          marginTop: hp("3%"),
          marginLeft: wp("3%"),
          fontSize: wp("4.5%"),
          fontWeight: "600",
        }}
      >
        Products Promo
      </Text>

      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    gap: hp("1.5%"),
    paddingHorizontal: wp("4%"),
    paddingVertical: hp("3%"),
    backgroundColor: "white",
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: wp("3%"),
    margin: wp("2%"),
  },
  image: {
    height: hp("20%"),
    width: wp("40%"),
    resizeMode: "contain",
    borderRadius: wp("2%"),
    alignItems: "center",
  },
  name: {
    flex: 1,
    fontSize: wp("3.5%"),
    textAlign: "center",
    fontWeight: "600",
  },
  star: {
    color: "gold",
    fontSize: wp("4%"),
  },
  rating: {
    color: "#444",
    fontWeight: "600",
  },
  buyBtn: {
    color: "white",
    backgroundColor: "black",
    paddingVertical: hp("1.5%"),
    paddingHorizontal: wp("3%"),
    borderRadius: wp("10%"),
    overflow: "hidden",
  },
});