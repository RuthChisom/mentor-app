import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from '../screens/Register';
import OTP from '../screens/OTP';
import Login from '../screens/Login';
import ForgotPassword from '../screens/ForgotPassword';
import WelcomeFirst from '../screens/WelcomeFirst';
import WelcomeSecond from '../screens/WelcomeSecond';
import Interests from '../screens/Interests';
import BeMentor from '../screens/BeMentor';
import Profile from '../screens/Profile';
import Posts from '../screens/Posts';
import Spaces from '../screens/Spaces';
import JobEdit from '../screens/JobEdit';
import Mentors from '../screens/Mentors';

import BottomTabNavigator from './BottomTabNavigator'
const Stack = createNativeStackNavigator();

const TopStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      {/* Define your stack screens here */}
        <Stack.Screen name='Register' component={Register}/>
          <Stack.Screen name='OTP' component={OTP}/>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='ForgotPassword' component={ForgotPassword}/>
          <Stack.Screen name='WelcomeFirst' component={WelcomeFirst}/>
          <Stack.Screen name='WelcomeSecond' component={WelcomeSecond}/>
          <Stack.Screen name='Interests' component={Interests}/>
          <Stack.Screen name='BeMentor' component={BeMentor}/>
          <Stack.Screen name='Profile' component={Profile}/>
          {/* <Stack.Screen name='Posts' component={Posts}/> */}
          <Stack.Screen name='Spaces' component={Spaces}/>
          <Stack.Screen name='JobEdit' component={JobEdit}/>
          <Stack.Screen name='Mentors' component={Mentors}/>
          <Stack.Screen name='Posts' component={BottomTabNavigator}/>
      
    </Stack.Navigator>
  )
}

export default TopStackNavigator