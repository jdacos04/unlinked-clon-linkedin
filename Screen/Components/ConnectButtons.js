import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Button,
  Pressable,
  TouchableOpacity,
  StyleSheet,
  Alert,
  TextInput,
} from "react-native";
import asyncToken from "../../utils/token";

const ConnectButtons = (props) => {
  const ConnectsAccept = () => {
    var dataToSend = {
      connectId: props.data.profile_id,
    };

    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + "=" + encodedValue);
    }

    formBody = formBody.join("&");
    fetch("http://localhost:6969/api/connect/accept", {
      method: "POST",
      body: formBody,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        Authorization: "Bearer " + props.data.token,
      },
    })
      .then((response) => {
        console.log(response.status);
        if (response.status == 200) {
          console.log("Successfull");
        } else {
          setErrortext(" Unsuccessful");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const ConnectsDeny = () => {};
  const ConnectsAdd = () => {
    var dataToSend = {
      connectId: props.data[0].profile_id,
    };

    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + "=" + encodedValue);
    }

    formBody = formBody.join("&");
    fetch("http://localhost:6969/api/connect/add", {
      method: "POST",
      body: formBody,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        Authorization: "Bearer " + props.data[1],
      },
    })
      .then((response) => {
        console.log(response.status);
        if (response.status == 200) {
          console.log("Successfull");
        } else {
          setErrortext(" Unsuccessful");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const ConnectsBlock = () => {
    var dataToSend = {
      connectId: props.data.profile_id,
    };

    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + "=" + encodedValue);
    }

    formBody = formBody.join("&");
    fetch("http://localhost:6969/api/connect/block", {
      method: "POST",
      body: formBody,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        Authorization: "Bearer " + props.data.token,
      },
    })
      .then((response) => {
        console.log(response.status);
        if (response.status == 200) {
          console.log("Successfull");
        } else {
          setErrortext(" Unsuccessful");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // {`${item.profile_id}`} - {`${item.name}`}
  return (
    <View style={{ flex: 1, backgroundColor: "#FFF1D0" }}>
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={ConnectsAccept}
      >
        <Text style={styles.buttonTextStyle}>Accept!</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={ConnectsDeny}
      >
        <Text style={styles.buttonTextStyle}>Deny!</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={ConnectsAdd}
      >
        <Text style={styles.buttonTextStyle}>Add!</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={ConnectsBlock}
      >
        <Text style={styles.buttonTextStyle}>Block!</Text>
      </TouchableOpacity>
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

export default ConnectButtons;
