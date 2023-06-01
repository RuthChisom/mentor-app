import { View, Text, Image, ImageBackground } from 'react-native'
import React from 'react'
import FirstSection from './FirstSection';
import RegisterInput from './RegisterInput';
import { NavigationContainer } from '@react-navigation/native';


const AuthenticationContainer = ({title,subtitle,secondTag}) => {
  return (
    <View style={{ flexDirection:'column', justifyContent:'space-between'}}>
      {/* registration banner */}
      {/* <View style={{backgroundColor:'black', height:'50%'}}> */}
        {/* 42a1f5 */}
        <ImageBackground
          source={require("../assets/images/register.jpg")}
          // resizeMode="cover"
          style = {{width:'100%', height:'65%'}}
        >
          <FirstSection title={title} subtitle={subtitle}/>
        </ImageBackground>
        
      {/* </View> */}
      {/* registration form */}
      <View style={{ marginTop:-220}}>
        {/* <RegisterInput/> */}
        {secondTag}
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  )
}

export default AuthenticationContainer