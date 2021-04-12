
// Import React and Component
import React from "react";
import { View, Text, Alert, StyleSheet, Image } from "react-native";
import logo from "./icon.png";

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import AsyncStorage from "@react-native-community/async-storage";

const CustomSidebarMenu = (props) => {
  return (
    <View style={stylesSidebar.sideMenuContainer}>
      <View style={stylesSidebar.profileHeader}>
        <View >
          <Image style={stylesSidebar.profileHeaderPicCircle} source={logo} />
          <Text style={{ fontSize: 25, color: "#eeeeee" }}></Text>
        </View>
        <Text style={stylesSidebar.profileHeaderText}>UNLINKED</Text>
      </View>
      <View style={stylesSidebar.profileHeaderLine} />

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label={({ color }) => (
            <Text style={{ color: "#ce1212" }}>Logout</Text>
          )}
          onPress={() => {
            props.navigation.toggleDrawer();
            Alert.alert(
              "Logout",
              "Are you sure? You want to logout?",
              [
                {
                  text: "Cancel",
                  onPress: () => {
                    return null;
                  },
                },
                {
                  text: "Confirm",
                  onPress: () => {
                    AsyncStorage.removeItem("token");
                    props.navigation.replace("Auth");
                  },
                },
              ],
              { cancelable: false }
            );
          }}
        />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomSidebarMenu;

const stylesSidebar = StyleSheet.create({
  sideMenuContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#222831",
    paddingTop: 40,
    color: "white",
  },
  profileHeader: {
    flexDirection: "row",
    backgroundColor: "#222831",
    padding: 15,
    textAlign: "center",
  },
  profileHeaderPicCircle: {
    width: 100,
    height: 100,
    borderRadius: 200,
   
    backgroundColor: "#7971ea",
    
    justifyContent: "center",
    alignItems: "center",
  },
  profileHeaderText: {
    color: "#eeeeee",
    alignSelf: "center",
    paddingHorizontal: 5,
    fontWeight: "bold",
  },
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: "#eeeeee",
    marginTop: 15,
  },
});
