import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Button,
  Pressable,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import Emoji from "../Components/Emoji"




const Reactions = ({ variant} ) => {
  const [react, setReact] = useState();

  const addReact = (num) => {
    // fetch("http://localhost:6969/api/verify", {
    //   method: "POST",
    //   body: formBody,
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    //   },
    // })
    //   .then((response) => {
    //     setLoading(false);
    //     console.log(response.status);
    //     if (response.status == 200) {
    //       setLoading(false);
    //       setIsRegistraionSuccess(true);
    //       console.log("Database check succesfull, doing phone verification");
    //     } else {
    //       setLoading(false);
    //       setErrortext("Registration Unsuccessful");
    //     }
    //   })
    //   .catch((error) => {
    //     setLoading(false);
    //     console.error(error);
    //   });
  }
 
 return(
  <View>
                <Button
          style={{
            flex: 1,
            justifyContent: "center",
          }}
          color="#7971ea"
          title="Crear Post "
          onPress={addReact(1)}
        ></Button>
  </View>
        
      

)
}
export default Reactions