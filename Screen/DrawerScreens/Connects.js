import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Button,
  FlatList,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";
import asyncToken from "../../utils/token";
import ConnectButtons from "../Components/ConnectButtons";

const Connects = () => {
  const [searchData, setSearchData] = useState({});
  const [search, setSearch] = useState("");
  const [token, setToken] = useState("");

  const createTwoButtonAlert = () =>
    Alert.alert(
      "Error! :(",
      "Error al agregar usuario.",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );

  const searchFunction = async () => {
    try {
      const token = await asyncToken();
      //http://localhost:6969/
      //https://wunder-backend-movil-app.herokuapp.com/createPost

      let dataToSend = { search: search };
      let formBody = [];
      for (let key in dataToSend) {
        let encodedKey = encodeURIComponent(key);
        let encodedValue = encodeURIComponent(dataToSend[key]);
        formBody.push(encodedKey + "=" + encodedValue);
      }
      formBody = formBody.join("&");

      await fetch("https://unlinkedback.herokuapp.com/api/connect/search", {
        method: "POST",
        body: formBody,
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
            console.log(data.data);
            setSearchData(data.data);
            setToken(token);
          })
          .then((err) => {
            createTwoButtonAlert(err);
          });
      });
    } catch {
      console.log("fuck");
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#eeeeee", flex: 1 }}>
      <View>
        <View>
          <TextInput
            onChangeText={(search) => setSearch(search)}
            placeholder="Search for connects here!"
          ></TextInput>
          <Button onPress={searchFunction} title="Search" />
        </View>
        <View>
          <FlatList
            data={searchData}
            renderItem={({ item }) => (
              <View>
                <Text style={styles.container}>
                  {" "}
                  {`${item.profile_id}`} - {`${item.name}`}
                </Text>
                <ConnectButtons data={[item, token]} />
              </View>
            )}
          ></FlatList>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default Connects;
