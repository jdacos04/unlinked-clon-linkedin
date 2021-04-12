
import React from "react";
import { View, Text, SafeAreaView, Image ,StyleSheet} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";
import Reactions from "../Components/Reactions"

const Posts = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{backgroundColor:"#222831"}}>
      <View style={{ flex: 1, padding: 10 }}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            borderRadius:100
          }}
        >
          <Image
            style={{ width: 200, height: 200, borderRadius:300, backgroundColor:"#7971ea" }}
            source={require('../DrawerScreens/aku.png')}
          />

              




        </View>
        <View style={{ width: 350, height: 50,flex:1,marginTop:20,backgroundColor:"#393e46" ,borderRadius:300}}>
        <Text style={{textAlign:"center",fontWeight: 'bold' , fontSize: 40 ,color:"#eeeeee"}}>ACU</Text>
        
       </View>
       <ScrollView  style={{  siez:100,marginTop:10,backgroundColor:"#393e46", borderRadius:10}}>
       <View style={{flex:1,marginTop:20}}>
        <Text style ={styles.textinfo}> Informacion</Text>
        <Text style ={styles.textinfo}>   Edad:</Text>
        <Text style ={styles.textinfo}>   Profecion :</Text>
        <Text style ={styles.textinfo}>   Titulo:</Text>
        <Text style ={styles.textinfo}>   Pais:</Text>
        <Text style ={styles.textinfo}>   Email:</Text>
        <Text style ={styles.textinfo}>   Telf:</Text>
        

        
        
       </View>
       </ScrollView>

      </View>
      </ScrollView>
    </SafeAreaView>
  );
};




export default Posts;




const styles = StyleSheet.create({
  textinfo:{ textAlign:"left",fontWeight: 'bold' , fontSize: 20 ,color:"#eeeeee"},
  intotexinfo:{textAlign:"left",fontWeight: 'bold' , fontSize: 14 ,color:"#eeeeee"}

})