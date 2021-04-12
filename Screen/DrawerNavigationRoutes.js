// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React
import React from "react";

// Import Navigators from React Navigation
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Import Screens
import HomeScreen from "./DrawerScreens/HomeScreen";
import Profile from "./DrawerScreens/Profile";
import Posts from "./DrawerScreens/Posts"
import CustomSidebarMenu from "./Components/CustomSidebarMenu";
import NavigationDrawerHeader from "./Components/NavigationDrawerHeader";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const homeScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Home",
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#393e46",
          },
          headerTintColor: "#000000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
};

const profileStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#393e46",
          },
          headerTintColor: "#000000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
};

const postStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen
        name="Posts"
        component={Posts}
        options={{
          title: "Posts",
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#393e46",
          },
          headerTintColor: "#000000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
};



const DrawerNavigatorRoutes = (props) => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: "#eeeeee",
        color: "#393e46",
        itemStyle: { marginVertical: 5, color: "#eeeeee" },
        labelStyle: {
          color: "#eeeeee",
        },
      }}
      screenOptions={{ headerShown: false }}
      drawerContent={CustomSidebarMenu}
    >
      <Drawer.Screen
        name="homeScreenStack"
        options={{ drawerLabel: "Home " }}
        component={homeScreenStack}
      />
      <Drawer.Screen
        name="Profile"
        options={{ drawerLabel: "Profile" }}
        component={profileStack}
      />
            <Drawer.Screen
        name="Posts"
        options={{ drawerLabel: "Posts" }}
        component={postStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;
