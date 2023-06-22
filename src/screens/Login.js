import { View, ScrollView} from 'react-native'
import React from 'react'
import AuthenticationContainer from '../components/AuthenticationContainer'
import LoginInput from '../components/LoginInput'


const Login = () => {
  return (
    <ScrollView style={{backgroundColor:'white'}}>
        <AuthenticationContainer title="Welcome Back!" subtitle="Login to your account" secondTag={<LoginInput/>}/>
    </ScrollView>
  )
}

export default Login