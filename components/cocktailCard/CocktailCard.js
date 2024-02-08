import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const DATA = [
  {
    id: 1,
    title: "Aperol Spritz",
    image: require("../cocktailCard/cocktailImg/cocktail_pic_1_portrait.png"),
  },
  {
    id: 2,
    title: "Mojito Recipe",
    image: require("../cocktailCard/cocktailImg/cocktail_pic_2_portrait.png"),
  },
  {
    id: 3,
    title: "Mulled Gin",
    image: require("../cocktailCard/cocktailImg/cocktail_pic_3_portrait.png"),
  },
  {
    id: 4,
    title: "Blackberry Vodka",
    image: require("../cocktailCard/cocktailImg/cocktail_pic_4_portrait.png"),
  },
  {
    id: 5,
    title: "Pink Gin Spritz",
    image: require("../cocktailCard/cocktailImg/cocktail_pic_5_portrait.png"),
  },
  {
    id: 6,
    title: "Singapore Sling",
    image: require("../cocktailCard/cocktailImg/cocktail_pic_6_portrait.png"),
  },
];

const Item = ({ image, title }) => (
  <View style={styles.item}>
    <View>
      <Image source={image} style={styles.image} />
    </View>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const CocktailCard = () => {
  const renderItem = ({ item }) => (
    <Item image={item.image} title={item.title} />
  );
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
        />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    width: 175,
    height: 160,
    backgroundColor: "rgba(0,0,255,0.1)",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
  image: {
    width: 145,
    height: 105,
    marginBottom: 5,
    borderRadius: 7,
  },
});

export default CocktailCard;
