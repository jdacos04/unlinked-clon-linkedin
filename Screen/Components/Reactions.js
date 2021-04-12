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
import Emoji from "../Components/Emoji"




const Reactions = ( ) => {
  const [reaccion, setReaccion] = useState("")
 
 return(
     <SafeAreaView>
         
     {/* <View>
    <Button
        title="Happy"
        onClick = {setReaccion(1)}
        color="#"
      />
      </View>
      <View>
    <Button
        title="Sad"
        onClick = {setReaccion(2)}
        color="#"
      />
      </View>
      
      <View>
    <Button
        title="Amazed"
        onClick = {setReaccion(3)}
        color="#"
      />
      </View>
      
      <View>
    <Button
        title="Thougtful"
        onClick = {setReaccion(4)}
        color="#"
      />
      </View>
      
      <View>
    <Button
        title="love"
        onClick = {setReaccion(5)}
        color="#"
      />
      </View>
      
      <View>
    <Button
        title="Iguana"
        onClick = {setReaccion(6)}
        color="#"
      />
      </View> */}

         {/* <TouchableOpacity
         
          onClick={setReaccion(1)}
        >
            <Emoji symbol="❤️" label="heart"/>
         
        </TouchableOpacity>
        <TouchableOpacity
          
          onClick={setReaccion(2)}
        >
            <Emoji symbol="😔" label="sad"/>
        
        </TouchableOpacity>
        <TouchableOpacity
          
          onClick={setReaccion(2)}
        >
            <Emoji symbol="😃" label="smiley"/>
        
        </TouchableOpacity>
        
        <TouchableOpacity
          
          onClick={setReaccion(2)}
        >
            <Emoji symbol="🤔" label="hmm"/>
        
        </TouchableOpacity>
        
        <TouchableOpacity
         
          onClick={setReaccion(2)}
        >
        <Emoji symbol="🤭" label="amazed"/>
        
        </TouchableOpacity>


        <TouchableOpacity
          
          onClick={setReaccion(2)}
        >
        <Emoji symbol="🦎" label="iguana"/>
        </TouchableOpacity>
         */}
        
      

     </SafeAreaView>
)
}