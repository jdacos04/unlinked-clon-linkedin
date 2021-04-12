import React from "react";
import { View, Text, SafeAreaView, Image, ScrollView} from "react-native";

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1  ,backgroundColor:"#7971ea"}}>
        <ScrollView>
      <View style={{ flex: 1, padding: 1}}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ width: 500, height: 400 }}
            source={{
              uri: "https://media.giphy.com/media/AQRapWCgC7dThyVEYb/giphy.gif",
            }}
          />
          
        </View>
        <View
          style={{flex: 1,
            alignItems: "center",
            justifyContent: "center",
            
        
        
          }}
        >
          <Image
            style={{ width: 400, height: 200 }}
            source={{
              uri: "https://i.makeagif.com/media/4-07-2017/UfVuQX.gif",
            }}
          />
          
        </View>
        <View
          style={{flex: 1,
            alignItems: "center",
            justifyContent: "center",
            
        
        
          }}
        >
          <Image
            style={{ width: 400, height: 200 }}
            source={{
              uri: "https://media.giphy.com/media/inejMYaoTjcMLYzFfg/giphy.gif",
            }}
          />
          
        </View>
        <View
          style={{flex: 1,
            alignItems: "center",
            justifyContent: "center",
            
        
        
          }}
        >
          <Image
            style={{ width: 400, height: 200 }}
            source={{
              uri: "https://media.giphy.com/media/OdSZCPaQZWlWw/giphy.gif",
            }}
          />
          
        </View>
        <View
          style={{flex: 1,
            alignItems: "center",
            justifyContent: "center",
            
        
        
          }}
        >
          <Image
            style={{ width: 400, height: 200 }}
            source={{
              uri: "https://media.giphy.com/media/h9rBcBywX895S/giphy.gif",
            }}
          />
          
        </View>
        <View
          style={{flex: 1,
            alignItems: "center",
            justifyContent: "center",
            
        
        
          }}
        >
          <Image
            style={{ width: 400, height: 200 }}
            source={{
              uri: "https://i.kym-cdn.com/photos/images/newsfeed/001/259/486/fb5.gif",
            }}
          />
          
        </View>


      </View>
      
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;