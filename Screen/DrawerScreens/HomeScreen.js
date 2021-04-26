import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, Button, Pressable } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import PostCreator from "../Components/PostCreator";
import asyncToken from "../../utils/token";
import PostFeed from "../Components/PostFeed";

const HomeScreen = () => {
  const [newPost, setNewPost] = useState(false);

  const handlePostButton = () => {
    setNewPost(!newPost);
    console.log(newPost);
  };

  if (newPost) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#eeeeee",
          justifyContent: "center",
        }}
      >
        <PostCreator />
        <Button color="#ce1212" title="Done" onPress={handlePostButton}>
          Exit
        </Button>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ backgroundColor: "#eeeeee", flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <PostFeed />
        <Text>
          Aqui esta un componente personalizado que debe cargar datos del array
          con los posts pero aja yo mejor me meto a salserin.
        </Text>
        <Button
          style={{
            flex: 1,
            justifyContent: "center",
          }}
          color="#7971ea"
          title="Crear Post"
          onPress={handlePostButton}
        ></Button>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
