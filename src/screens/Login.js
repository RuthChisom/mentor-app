import { View } from 'react-native'
import React from 'react'
import AuthenticationContainer from '../components/AuthenticationContainer'
import LoginInput from '../components/LoginInput'


const OTP = () => {
  return (
    <View style={{flex:1, backgroundColor:'white'}}>
        <AuthenticationContainer title="Welcome Back!" subtitle="Login to your account" secondTag={<LoginInput/>}/>
    </View>
  )
}

export default OTP