import { View, Text } from 'react-native'
import React from 'react'

const FirstSection = ({title,subtitle}) => {
  return (
    <View style={{paddingTop:'35%', paddingLeft:15}}>
      <Text style={{color:'white', fontSize:30}}>{title}</Text>
      <Text style={{color:'white', paddingTop:5}}>{subtitle}</Text>
    </View>
  )
}

export default FirstSection