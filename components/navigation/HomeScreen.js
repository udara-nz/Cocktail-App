import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import CocktailCard from "../cocktailCard/CocktailCard";

const menu = require("../headerImg/menu.png");
const avatar = require("../headerImg/avatar.png");
const magnifier = require("../headerImg/magnifier.png");

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.hContainer}>
          <View style={styles.hSection_1}>
            <Image source={menu} resizeMode="contain" style={styles.menuIcon} />
          </View>
          <View style={styles.hSection_2}>
            <Image
              source={avatar}
              resizeMode="contain"
              style={styles.avatarIcon}
            />
          </View>
        </View>
        <View style={styles.hMainTitle}>
          <Text style={styles.hTitle}>
            Find the best{"\n"}cocktails with Cokee...
          </Text>
        </View>
        <View style={styles.searchContainer}>
          <View style={styles.searchPallet}>
            <TextInput
              style={styles.searchInput}
              placeholder="Find your cocktail..."
            />
            <TouchableOpacity>
              <View style={styles.searchIconArea}>
                <Image
                  source={magnifier}
                  resizeMode="contain"
                  style={styles.magnifierIcon}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.crdContainer}>
          <CocktailCard />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  hMainTitle: {
    marginTop: 20,
    paddingTop: 20,
    marginBottom: 15,
  },
  hTitle: {
    // fontFamily: "Roboto",
    fontSize: 30,
    fontStyle: "italic",
    fontWeight: "500",
  },
  hContainer: {
    flex: 1,
    marginTop: 15,
    paddingLeft: 30,
    paddingRight: 30,
  },
  crdContainer: {
    marginTop: 20,
    paddingTop: 10,
  },
  hSection_1: {
    height: 30,
    // backgroundColor: "#2596be",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  hSection_2: {
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  menuIcon: {
    width: 90,
    height: 90,
  },
  avatarIcon: {
    width: 45,
    height: 45,
    borderRadius: 5,
  },
  searchContainer: {
    marginTop: 7,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "center",
  },
  searchPallet: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    borderRadius: 8,
    width: "100%",
    height: 40,
  },
  searchInput: {
    height: 40,
    width: 320,
  },
  searchIconArea: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  magnifierIcon: {
    width: 30,
    height: 30,
    marginTop: 10,
    paddingTop: 10,
    marginRight: -10,
    // backgroundColor: "red",
  },
});

export default HomeScreen;
