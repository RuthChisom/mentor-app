import { View } from 'react-native'
import React from 'react'
import AuthenticationContainer from '../components/AuthenticationContainer'
import ForgotPasswordInput from '../components/ForgotPasswordInput'

const ForgotPassword = () => {
  return (
    <View style={{backgroundColor:'white', height:'100%'}}>
          <AuthenticationContainer title="Forgot Password" subtitle="Where should we send password re-set OTP?" secondTag={<ForgotPasswordInput/>}/>
    </View>
  )
}

export default ForgotPassword