// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/
// Import React and Component
import React, { useState, createRef } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

import AsyncStorage from "@react-native-community/async-storage";

import Loader from "./Components/Loader";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState("");

  const passwordInputRef = createRef();

  const handleSubmitPress = () => {
    setErrortext("");
    if (!email) {
      alert("Please fill Email");
      return;
    }
    if (!password) {
      alert("Please fill Password");
      return;
    }
    setLoading(true);
    let dataToSend = { email: email, password: password };
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    //http://localhost:6969/api/login
    //https://unlinkedback.herokuapp.com/api/
    
    fetch("https://unlinkedback.herokuapp.com/api/login", {
      method: "POST",
      body: formBody,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((responseJSON) => {
        if (responseJSON !== undefined) {
          AsyncStorage.setItem("token", responseJSON.token);
          navigation.replace("DrawerNavigationRoutes");
        } else {
          setLoading(false);
          setErrortext("Please check your email id or password");
        }
      })

      .catch((error) => {
        console.error(error);
        setLoading(false);
        setErrortext("Please check your email id or password");
      });
  };

  return (
    <View style={styles.mainBody}>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <View>
          <KeyboardAvoidingView enabled  > 
            <View style={{ alignItems: "center" }}>
              <Image
                source={require("../Image/logo.png")}
                style={{
                  width: "50%",
                  height: 200,
                  resizeMode: "contain",
                  margin: 30,
                  borderRadius:100
                }}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserEmail) => setEmail(UserEmail)}
                placeholder="Enter Email"
                placeholderTextColor="#000000"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current && passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(password) => setPassword(password)}
                placeholder="Enter Password"
                placeholderTextColor="#000000"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
            {errortext != "" ? (
              <Text style={styles.errorTextStyle}> {errortext} </Text>
            ) : null}
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}
            >
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
            </TouchableOpacity>
            <Text
              style={styles.registerTextStyle}
              onPress={() => navigation.navigate("RegisterScreen")}
            >
              New Here ? Register
            </Text>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f3f4ed",
    alignContent: "center",
  },
  SectionStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: "#7971ea",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#7971ea",
    height: 40,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: "#000000",
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#7971ea",
  },
  registerTextStyle: {
    color: "#000000",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
    alignSelf: "center",
    padding: 10,
  },
  errorTextStyle: {
    color: "#dd1c1a",
    textAlign: "center",
    fontSize: 14,
  },
});
