import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const WelcomeContainer = ({image,text,nav}) => {
    const navigation = useNavigation();
    console.log(nav)

    return (
    
        <View style={{backgroundColor:'white', height:'100%'}}>
            <ImageBackground
            source={image}
            // resizeMode="cover"
            style = {{width:'100%', height:'70%', marginTop:50, marginBottom:-100}}
            />
            <Image
                source={require("../assets/images/logo.png")}
                // resizeMode="cover"
                style = {{width:'30%', height:30, alignSelf:'center'}}
            />
            <Text style={{textAlign:'center',padding:40, fontSize:16}}>
                {text}
            </Text>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate(nav);
                }}
            >
                <Image
                    source={require("../assets/icons/play.png")}
                    // resizeMode="cover"
                    style = {{width:70, height:70, alignSelf:'center', tintColor:'#0E91EF'}}
                    
                />
            </TouchableOpacity>
        </View>
  )
}

export default WelcomeContainer