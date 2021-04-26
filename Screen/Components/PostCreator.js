import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Button,
  Pressable,
  StyleSheet,
  Alert,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Loader from "./Loader";
import asyncToken from "../../utils/token";

const PostCreator = () => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");

  const createOkTwoButtonAlert = () =>
    Alert.alert(
      "Error! :(",
      "Error al crear el post...",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );

  const createTwoButtonAlert = () =>
    Alert.alert(
      "Error! :(",
      "Error al crear el post...",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );

  const handlePost = async () => {
    setLoading(true);
    try {
      const token = await asyncToken();

      setLoading(true);
      let dataToSend = {
        postText: text,
      };
      console.log("enviando ");
      let formBody = [];
      for (let key in dataToSend) {
        let encodedKey = encodeURIComponent(key);
        let encodedValue = encodeURIComponent(dataToSend[key]);
        formBody.push(encodedKey + "=" + encodedValue);
      }
      formBody = formBody.join("&");

      console.log(token);
      //http://localhost:6969/

      //https://wunder-backend-movil-app.herokuapp.com/createPost
      fetch("https://unlinkedback.herokuapp.com/api/posts/create", {
        method: "POST",
        body: formBody,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          Authorization: "Bearer " + token,
        },
      })
        .then((response) => {
          setLoading(false);
          console.log(response);
          if (response.status == 200) {
            createOkTwoButtonAlert();
            console.log("algo tiene que decir que salio bien");
          } else {
            createTwoButtonAlert();
            console.log("algo tiene que decir que salio mal");
          }
        })
        .catch((error) => {
          setLoading(false);
          console.error(error);
        });
    } catch (error) {}
  };

  return (
    <SafeAreaView>
      <Loader loading={loading} />

      <View style={styles.PostContent}>
        <TextInput
          placeholder="De que me gusta vestirme?"
          style={styles.PostSize}
          multiline={true}
          onChangeText={(text) => setText(text)}
        ></TextInput>
      </View>
      <View flexDirection="row" justifyContent="space-between">
        <Button
          title="Add it up!"
          onPress={handlePost}
          color="#222831"
        ></Button>
        {/* <Button
      
        title="     Upload file    "
        onPress={handlePost}
        color="#7971ea"
       
        
      ></Button> */}
      </View>
    </SafeAreaView>
  );
};

export default PostCreator;

const styles = StyleSheet.create({
  PostName: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 5,
    margin: 5,
  },
  PostContent: {
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "flex-start",
    height: "80%",
    margin: 5,
    padding: 5,
  },
  PostSize: {
    fontSize: 25,
  },
  TitleSize: {
    fontSize: 30,
  },
});
