import { View } from 'react-native'
import React from 'react'
import AuthenticationContainer from '../components/AuthenticationContainer'
import RegisterInput from '../components/RegisterInput'

const Register = () => {
  return (
    <View>
          <AuthenticationContainer title="Register" subtitle="Create your Account" secondTag={<RegisterInput/>}/>
    </View>
  )
}

export default Register