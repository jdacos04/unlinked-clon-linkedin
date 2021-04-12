import React ,{Component}from 'react'
import { View, Text, SafeAreaView, Image ,StyleSheet} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";
import Reactions from "../Components/Reactions"


   function PostView(props) {
    
    return (
        
            <View style= {Style.viewPost}>

                <Text Style={Style.TPost}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga corrupti alias accusantium ullam corporis inventore quos cupiditate quod aliquam suscipit impedit, enim saepe provident tempore. Provident eius voluptate libero consequuntur!</Text>




            </View>
    );

   }
   export default PostView


   const Style = StyleSheet.create({
       viewPost:{marginTop:10,backgroundColor:"#393e46", borderRadius:10}
    ,TPost: {fontSize: 12 ,color:"#eeeeee",marginTop:10}
   })