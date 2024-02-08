import { StyleSheet, FlatList, View, Platform, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./components/navigation/HomeScreen";
import FavoriteScreen from "./components/navigation/FavoriteScreen";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import CartScreen from "./components/navigation/CartScreen";
import { Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: true,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    elevation: 0,
    height: 60,
    background: "#fff",
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <AntDesign name="home" size={25} color="black" />
                  <Text style={{ fontSize: 11, color: "#5f6a8d" }}></Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{
                    top: Platform.OS == "ios" ? -10 : -20,
                    width: Platform.OS == "ios" ? 50 : 60,
                    height: Platform.OS == "ios" ? 50 : 60,
                    borderRadius: Platform.OS == "ios" ? 25 : 30,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#5f6a8d",
                  }}
                >
                  <Entypo name="plus" size={25} color="black" />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Favorite"
          component={FavoriteScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <MaterialIcons
                    name="favorite-border"
                    size={25}
                    color="black"
                  />
                  <Text style={{ fontSize: 11, color: "#5f6a8d" }}></Text>
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    alignItems: "center",
    justifyContent: "center",
  },
});
