import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Button,
  Alert,
  ScrollView,
} from "react-native";
import EditProfile from "../Components/EditProfile";
import asyncToken from "../../utils/token";

const Profile = () => {
  const [edit, setEdit] = useState(false);
  const [profileData, setProfile] = useState({});

  const handleEditButton = () => {
    setEdit(!edit);
  };

  const createTwoButtonAlert = (error) =>
    Alert.alert(
      "Error! :(" + error,
      "Error al cargar el usuario.",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );

  useEffect(() => {
    const getData = async () => {
      try {
        console.log("s");
        const token = await asyncToken();
        //http://localhost:6969/
        //https://wunder-backend-movil-app.herokuapp.com/createPost

        await fetch("http://localhost:6969/api/get", {
          method: "POST",

          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            Authorization: "Bearer " + token,
          },
        }).then((response) => {
          if (response.status == !200) {
            createTwoButtonAlert();
            return 0;
          }
          response
            .json()
            .then((data) => {
              setProfile(data.data);
              console.log(data.data);
              console.log(profileData);
            })
            .then((err) => {
              createTwoButtonAlert(err);
            });
        });
      } catch {
        console.log(err);
      }
    };
    getData();
  }, []);

  if (edit) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#eeeeee",
          justifyContent: "center",
        }}
      >
        <EditProfile />
        <Button color="#ce1212" title="Done" onPress={handleEditButton}>
          Exit
        </Button>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ backgroundColor: "#222831" }}>
        <View style={{ flex: 1, padding: 10 }}>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 100,
            }}
          >
            <Image
              style={{
                width: 200,
                height: 200,
                borderRadius: 300,
                backgroundColor: "#7971ea",
              }}
              source={require("../DrawerScreens/aku.png")}
            />
          </View>
          <View
            style={{
              width: 350,
              height: 50,
              flex: 1,
              marginTop: 20,
              backgroundColor: "#393e46",
              borderRadius: 300,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 40,
                color: "#eeeeee",
              }}
            >
              {profileData.name}
            </Text>
          </View>
          <ScrollView
            style={{
              siez: 100,
              marginTop: 10,
              backgroundColor: "#393e46",
              borderRadius: 10,
            }}
          >
            <View style={{ flex: 1, marginTop: 20 }}>
              <Text style={styles.textinfo}> Age:{profileData.age}</Text>
              <Text style={styles.textinfo}> Skills:{profileData.skills}</Text>
              <Text style={styles.textinfo}> Email:{profileData.email}</Text>
              <Text style={styles.textinfo}>
                {" "}
                Country:{profileData.country}
              </Text>
              <Text style={styles.textinfo}>
                {" "}
                Postal Code:{profileData.postal_code}
              </Text>
              <Text style={styles.textinfo}>
                {" "}
                Phone Contact:{profileData.phone}
              </Text>
            </View>
            <Button
              title="Update Profile"
              onPress={handleEditButton}
              color="#222831"
            ></Button>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  textinfo: {
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 20,
    color: "#eeeeee",
  },
  intotexinfo: {
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 14,
    color: "#eeeeee",
  },
});
