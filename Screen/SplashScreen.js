import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, StyleSheet, Image } from "react-native";
import asyncToken from "../utils/token";

const SplashScreen = ({ navigation }) => {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    const getToken = async () => {
      try {
        const token = await asyncToken();
        if (token !== null) {
          //http://localhost:6969/api
          //https://unlinkedback.herokuapp.com/api/
          fetch("http://localhost:6969/api", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
              authorization: "Bearer " + token,
            },
          })
            .then((response) => {
              setAnimating(false);

              if (response.status == 200) {
                navigation.replace("DrawerNavigationRoutes");
              } else {
                navigation.replace("Auth");
              }
            })
            .catch((error) => {
              console.error(error);
              navigation.replace("Auth");
            });
        } else {
          navigation.replace("Auth");
        }
      } catch (error) {}
    };
    getToken();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../Image/logo2.png")}
        style={{ width: "100%", resizeMode: "contain", margin: 30 }}
      />
      <ActivityIndicator
        animating={animating}
        color="#393e46"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#222831",
  },
  activityIndicator: {
    alignItems: "center",
    height: 80,
  },
});
