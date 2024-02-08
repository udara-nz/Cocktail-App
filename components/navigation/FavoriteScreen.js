import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CocktailCard from "../cocktailCard/CocktailCard";

const FavoriteScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.crdContainer}>
        <CocktailCard />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  crdContainer: {},
});

export default FavoriteScreen;
