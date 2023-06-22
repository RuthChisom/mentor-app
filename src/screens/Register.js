import { View, ScrollView } from 'react-native'
import React from 'react'
import AuthenticationContainer from '../components/AuthenticationContainer'
import RegisterInput from '../components/RegisterInput'

const Register = () => {
  return (
    <ScrollView style={{backgroundColor:'white'}}>
          <AuthenticationContainer title="Register" subtitle="Create your Account" secondTag={<RegisterInput/>}/>
    </ScrollView>
  )
}

export default Register