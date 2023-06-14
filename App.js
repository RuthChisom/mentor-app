import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';

// import Register from './src/screens/Register';
// import OTP from './src/screens/OTP';
// import Login from './src/screens/Login';
// import ForgotPassword from './src/screens/ForgotPassword';
// import WelcomeFirst from './src/screens/WelcomeFirst';
// import WelcomeSecond from './src/screens/WelcomeSecond';
// import Interests from './src/screens/Interests';
// import BeMentor from './src/screens/BeMentor';
// import Profile from './src/screens/Profile';
// import Posts from './src/screens/Posts';
// import Spaces from './src/screens/Spaces';

// import TopStackNavigator from './src/nav/TopStackNavigator' 
import BottomTabNavigator from './src/nav/BottomTabNavigator' 

import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Stack = createNativeStackNavigator();

// const AppNavigator = NavigationContainer(
//   createNativeStackNavigator({
//     BottomTab: BottomTabNavigator,
//     TopStack: TopStackNavigator,
//   })
// );


// import { setFontFamily } from 'react-native-vector-icons/FontAwesome';

// setFontFamily('CustomFontFamily', 'FontAwesome');
 
export default function App() {
  return (
    // <NavigationContainer style={{ }}>
    //   <Stack.Navigator screenOptions={{headerShown:false}} >
    //       <Stack.Screen name='Register' component={Register}/>
    //       <Stack.Screen name='OTP' component={OTP}/>
    //       <Stack.Screen name='Login' component={Login}/>
    //       <Stack.Screen name='ForgotPassword' component={ForgotPassword}/>
    //       <Stack.Screen name='WelcomeFirst' component={WelcomeFirst}/>
    //       <Stack.Screen name='WelcomeSecond' component={WelcomeSecond}/>
    //       <Stack.Screen name='Interests' component={Interests}/>
    //       <Stack.Screen name='BeMentor' component={BeMentor}/>
    //       <Stack.Screen name='Profile' component={Profile}/>
    //       <Stack.Screen name='Posts' component={Posts}/>
    //       <Stack.Screen name='Spaces' component={Spaces}/>
    //   </Stack.Navigator>

    // <StatusBar style="auto" />

    // </NavigationContainer>
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
    <NavigationContainer>
      {/* <TopStackNavigator/> */}
      <BottomTabNavigator/>
    </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily:'nunito-sans'
  },
});
