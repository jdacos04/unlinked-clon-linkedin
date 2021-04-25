import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Button,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Loader from "./Loader";
import asyncToken from "../../utils/token";

const EditProfile = () => {
  const [profileName, setName] = useState("");
  const [education, setEducation] = useState("");
  const [skills, setSkills] = useState("");
  const [country, setCountry] = useState("");
  const [age, setAge] = useState("");
  const [postal, setPostal] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);

  const createOkTwoButtonAlert = () =>
    Alert.alert(
      "Perfil actualizado :)",
      "a",

      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: true }
    );

  const createTwoButtonAlert = () =>
    Alert.alert(
      "Error! :(",
      "Error al actualizar el usuario.",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );

  const editProfile = async () => {
    setLoading(true);
    try {
      const token = await asyncToken();

      setLoading(true);
      let dataToSend = {
        education: education,
        skills: skills,
        name: profileName,
        country: country,
        postal_code: postal,
        age: age,
        pass: pass,
      };
      console.log("enviando");
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
      fetch("http://localhost:6969/api/modify", {
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
    <SafeAreaView style={{ flex: 1 }}>
      <Loader loading={loading} />
      <ScrollView
        style={{
          siez: 100,
          marginTop: 10,
          backgroundColor: "#393e46",
          borderRadius: 10,
        }}
      >
        <TextInput
          placeholder="Name:"
          style={styles.textinfo}
          multiline={true}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          placeholder="Age:"
          keyboardType="decimal-pad"
          style={styles.textinfo}
          multiline={true}
          onChangeText={(text) => setAge(text)}
        />
        <TextInput
          placeholder="Skills:"
          style={styles.textinfo}
          multiline={true}
          onChangeText={(text) => setSkills(text)}
        />
        <TextInput
          placeholder="Education:"
          style={styles.textinfo}
          multiline={true}
          onChangeText={(text) => setEducation(text)}
        />

        <TextInput
          placeholder="Country:"
          style={styles.textinfo}
          multiline={true}
          onChangeText={(text) => setCountry(text)}
        />
        <TextInput
          placeholder="Postal Code:"
          style={styles.textinfo}
          multiline={true}
          onChangeText={(text) => setPostal(text)}
        />
        <TextInput
          placeholder="Confirm Password:"
          style={styles.textinfo}
          multiline={true}
          onChangeText={(text) => setPass(text)}
        />
        <Button title="Update!" onPress={editProfile} color="#222831"></Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfile;

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
