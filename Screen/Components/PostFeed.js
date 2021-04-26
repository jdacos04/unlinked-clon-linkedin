import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Button,
  FlatList,
  StyleSheet,
  Alert,
} from "react-native";
import asyncToken from "../../utils/token";
import Reactions from "../Components/Reactions";

const PostFeed = () => {
  const [posts, setPosts] = useState({});
  const [search, setSearch] = useState("");
  const [token, setToken] = useState("");

  const createTwoButtonAlert = () =>
    Alert.alert(
      "Error! :(",
      "Error al agregar usuario.",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );

  const LoadPosts = async () => {
    try {
      const token = await asyncToken();
      setToken(token);
      let dataToSend = { search: search };
      let formBody = [];
      for (let key in dataToSend) {
        let encodedKey = encodeURIComponent(key);
        let encodedValue = encodeURIComponent(dataToSend[key]);
        formBody.push(encodedKey + "=" + encodedValue);
      }
      formBody = formBody.join("&");
      //http://localhost:6969/
      //https://wunder-backend-movil-app.herokuapp.com/createPost
      await fetch("https://unlinkedback.herokuapp.com/api/posts", {
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
            setPosts(data);
          })
          .then((err) => {
            createTwoButtonAlert(err);
          });
      });
    } catch {
      console.log("fuck");
    }
  };
  useEffect(() => {
    LoadPosts();
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: "#eeeeee", flex: 1 }}>
      <View>
        <View>
          <FlatList
            data={posts}
            renderItem={({ item }) => (
              <View>
                <Text style={styles.container}>
                  {" "}
                  {`${item.content}`} - {`${item.post_date}`}
                </Text>
                <Reactions data={[item.posts_id, token]} />
              </View>
            )}
          ></FlatList>
        </View>
      </View>
      <Button
        onPress={LoadPosts}
        title="Click aqui para que no se carguen los posts de tus connects."
      ></Button>
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

export default PostFeed;
