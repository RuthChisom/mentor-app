import { View, Text, TouchableOpacity} from 'react-native'
import React , { useRef, useState, useEffect }from 'react'

import { useNavigation } from '@react-navigation/native';

const ForgotPasswordInput = () => {
    const navigation = useNavigation();
    const [inputValues, setInputValues] = useState(['', '', '', '']); // Initial values for each TextInput field

  const inputRefs = useRef([]);
  const totalInputs = 4;
  const [count, setCount] = useState(60); // Initial count value

  useEffect(() => {
    // Start the countdown when the component mounts
    const timer = setInterval(() => {
      setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0)); //let count stop at 0
    }, 1000);

    // Clear the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Check if the count reaches zero
    if (count === 0) {
      // Resend OTP when the countdown ends

      // Restart the countdown by setting the count back to the initial value
      setCount(60);
    }
  }, [count]);

  const verifyOTP = () => {
    // not sure what to do here, proceed to login page
    navigation.navigate('Login');
  }

  return (
    <View style={{marginTop:50}}>
        <View style={{padding:15, margin:15, borderRadius:10, borderWidth:1, borderColor:'gray'}}>
            <Text style={{textAlign:'center'}}>Send OTP via SMS</Text>
        </View>
        <View style={{padding:15, margin:15, borderRadius:10, borderWidth:1, borderColor:'gray'}}>
            <Text style={{textAlign:'center'}}>Send OTP via Email</Text>
        </View>
        <Text style={{textAlign:'right', fontWeight:'bold',padding:10}}>Resend code in 
            <Text style={{color:'#73C5FF'}}> 00.{count}s</Text>
        </Text>
        <TouchableOpacity 
            style={{marginTop:100, margin:10,backgroundColor:'#3EACFA', borderRadius:10, padding:10}}
            onPress={verifyOTP}
        >
            <Text style={{textAlign:'center', color:'white'}}>Verify</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ForgotPasswordInput