import * as React from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, { ICarouselInstance, Pagination } from "react-native-reanimated-carousel";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";

const posterdata = [
  {
    id: "1",
    title: "Special Offer",
    title2: "Get 30% OFF",
    title3: "New Arrival",
    image: "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    title: "Summer Sale",
    title2: "Flat 40% OFF",
    title3: "On All Items",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1544&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    title: "Trending Now",
    title2: "Best Picks",
    title3: "Just For You",
    image: "https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "4",
    title: "Limited Time",
    title2: "Buy 1 Get 1",
    title3: "Hurry Up!",
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const width = Dimensions.get("window").width;

export default function Offer() {
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Carousel
          ref={ref}
          width={wp("95%")}
          height={hp("32%")}
          data={posterdata}
          onProgressChange={progress}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image style={styles.posterimage} source={{ uri: item.image }} />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.discount}>{item.title2}</Text>
                <Text style={styles.subtitle}>{item.title3}</Text>
              </View>
            </View>
          )}
        />

        <Pagination.Basic
          progress={progress}
          data={posterdata}
          dotStyle={{ backgroundColor: "rgba(0,0,0,0.3)", borderRadius: 50, width: wp("2.5%"), height: wp("2.5%") }}
          activeDotStyle={{ backgroundColor: "#da831f", width: wp("3%"), height: wp("3%") }}
          containerStyle={{ gap: wp("2%"), marginTop: hp("1.5%") }}
          onPress={onPressPagination}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    overflow: "hidden",
    borderRadius: wp("5%"),
    marginHorizontal: wp("1%"),
  },
  textContainer: {
    position: "absolute",
    top: hp("8%"),
    left: wp("5%"),
  },
  title: {
    color: "white",
    fontSize: wp("5%"),
    fontWeight: "700",
  },
  discount: {
    color: "white",
    fontSize: wp("6%"),
    fontWeight: "800",
    marginVertical: hp("0.5%"),
  },
  subtitle: {
    color: "white",
    fontSize: wp("4.5%"),
    fontWeight: "700",
  },
  posterimage: {
    height: hp("32%"),
    width: wp("95%"),
    borderRadius: wp("5%"),
    resizeMode: "cover",
  },
});
