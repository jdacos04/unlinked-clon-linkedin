import React, { useState, createRef } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import PhoneVerifyScreen from "./PhoneVerifyScreen";
import Loader from "./Components/Loader";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState("");
  const [PhoneVerification, setPhoneVerification] = useState(null);
  const emailInputRef = createRef();
  const passwordRef = createRef();
  const nameInputRef = createRef();

  const handleSubmitButton = () => {
    setErrortext("");
    if (!userEmail) {
      alert("Please fill in your Email.");
      return;
    }
    if (!password) {
      alert("Please Enter your Password.");
      return;
    }
    if (password != passwordCheck) {
      alert("Please Check your Password");
      return;
    }
    if (!name) {
      alert("Please enter your Full Name.");
      return;
    }
    if (phone.length < 5) {
      alert("Please enter a valid phone number");
      return;
    }

    setLoading(true);

    var dataToSend = {
      password: password,
      email: userEmail,
      name: name,
      phone: phone,
    };

    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + "=" + encodedValue);
    }

    formBody = formBody.join("&");

    fetch("http://localhost:6969/api/create", {
      method: "POST",
      body: formBody,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    })
      .then((response) => {
        setLoading(false);
        if (response.status == 200) {
          setPhoneVerification(dataToSend);
          console.log("Database check succesfull, doing phone verification");
        } else {
          setLoading(false);
          setErrortext("Registration Unsuccessful. Email already in use.");
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  };

  if (PhoneVerification !== null) {
    return <PhoneVerifyScreen data={PhoneVerification}></PhoneVerifyScreen>;
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF1D0" }}>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../Image/wunderapp.png")}
            style={{
              width: "50%",
              height: 100,
              resizeMode: "contain",
              margin: 30,
            }}
          />
        </View>
        <KeyboardAvoidingView enabled>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserEmail) => setUserEmail(UserEmail)}
              underlineColorAndroid="#000000"
              placeholder="Enter Email"
              placeholderTextColor="#000000"
              keyboardType="email-address"
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordRef.current && passwordRef.current.focus()
              }
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
              underlineColorAndroid="#000000"
              placeholder="Enter your secret password"
              placeholderTextColor="#000000"
              ref={passwordRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                nameInputRef.current && nameInputRef.current.focus()
              }
              blurOnSubmit={true}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              secureTextEntry={true}
              onChangeText={(passwordCheck) => setPasswordCheck(passwordCheck)}
              underlineColorAndroid="#000000"
              placeholder="Enter your secret password"
              placeholderTextColor="#000000"
              ref={passwordRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                nameInputRef.current && nameInputRef.current.focus()
              }
              blurOnSubmit={true}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(name) => setName(name)}
              underlineColorAndroid="#000000"
              placeholder="Enter your Full Name."
              placeholderTextColor="#000000"
              autoCapitalize="sentences"
              ref={nameInputRef}
              returnKeyType="next"
              onSubmitEditing={Keyboard.dismiss}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(phone) => setPhone(phone)}
              keyboardType="decimal-pad"
              underlineColorAndroid="#000000"
              placeholder="Enter your Phone Number"
              placeholderTextColor="#000000"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={Keyboard.dismiss}
            />
          </View>
          {errortext != "" ? (
            <Text style={styles.errorTextStyle}> {errortext} </Text>
          ) : null}
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitButton}
          >
            <Text style={styles.buttonTextStyle}>REGISTER</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default RegisterScreen;

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
    backgroundColor: "#DD1C1A",
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
    borderColor: "#07A0C3",
  },
  errorTextStyle: {
    color: "DD1C1A",
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
