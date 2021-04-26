import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  Keyboard,
  TouchableOpacity,
} from "react-native";

import Loader from "./Components/Loader";

const PhoneVerifyScreen = (props) => {
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState("");
  const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);
  const [code, setCode] = useState("");

  const handleSubmitButton = () => {
    setLoading(true);
    var dataToSend = {
      email: props.data.email,
      password: props.data.password,
      name: props.data.name,
      phone: props.data.phone,
      code: code,
    };
    console.log(dataToSend);
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + "=" + encodedValue);
    }

    formBody = formBody.join("&");
    //http://localhost:6969/api/verify
    //https://unlinkedback.herokuapp.com/api/
    fetch("https://unlinkedback.herokuapp.com/api/verify", {
      method: "POST",
      body: formBody,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    })
      .then((response) => {
        setLoading(false);
        console.log(response.status);
        if (response.status == 200) {
          setLoading(false);
          setIsRegistraionSuccess(true);
          console.log("Database check succesfull, doing phone verification");
        } else {
          setLoading(false);
          setErrortext("Registration Unsuccessful");
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  };

  if (isRegistraionSuccess) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#307ecc",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../Image/success.png")}
          style={{ height: 150, resizeMode: "contain", alignSelf: "center" }}
        />
        <Text style={styles.successTextStyle}>Registration Successful!</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF1D0" }}>
      <Loader loading={loading} />
      <View style={styles.SectionStyle}>
        <Text>We've sent a verification code via SMS.</Text>
      </View>
      <View style={styles.SectionStyle}>
        <TextInput
          style={styles.inputStyle}
          onChangeText={(code) => setCode(code)}
          keyboardType="decimal-pad"
          underlineColorAndroid="#000000"
          placeholder="Enter your Verification code"
          placeholderTextColor="#000000"
          autoCapitalize="sentences"
          returnKeyType="next"
          onSubmitEditing={Keyboard.dismiss}
        />
      </View>
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={handleSubmitButton}
      ></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
    borderColor: "#DD1C1A",
    height: 40,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: "#000000",
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
  errorTextStyle: {
    color: "#DD1C1A",
    textAlign: "center",
    fontSize: 14,
  },
  successTextStyle: {
    color: "black",
    textAlign: "center",
    fontSize: 18,
    padding: 30,
  },
});

export default PhoneVerifyScreen;
