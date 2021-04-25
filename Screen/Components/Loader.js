import React from "react";
import { StyleSheet, View, Modal, ActivityIndicator } from "react-native";

const Loader = (props) => {
  const { loading, ...attributes } = props;

  return (
    <Modal
      transparent={false  }
      animationType={"slide"}
      visible={loading}
      onRequestClose={() => {
        console.log("ta bomnito el modal");
      }}
    >
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator
            animating={true}
            color="#393e46"
            size="large"
            style={styles.activityIndicator}
          />
        </View>
      </View>
    </Modal>
  );
};

export default Loader;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#393e46",
  },
  activityIndicatorWrapper: {
    backgroundColor: "#393e46",
    height: 100,
    width: 100,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  activityIndicator: {
    alignItems: "center",
    height: 80,
  },
});
