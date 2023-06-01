import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';
import AuthenticationContainer from './src/components/AuthenticationContainer';

import Register from './src/screens/Register';
import OTP from './src/screens/OTP';
 

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


// import { setFontFamily } from 'react-native-vector-icons/FontAwesome';

// setFontFamily('CustomFontFamily', 'FontAwesome');
 
export default function App() {
  return (
    <NavigationContainer style={{ }}>
      <Stack.Navigator screenOptions={{headerShown:false}} >
          <Stack.Screen name='Register' component={Register}/>
          <Stack.Screen name='OTP' component={OTP}/>
      </Stack.Navigator>

    <StatusBar style="auto" />

    </NavigationContainer>
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
