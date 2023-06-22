import { View, Text, TextInput, TouchableOpacity , Alert} from 'react-native'
import React , { useRef, useState, useEffect }from 'react'

import { useNavigation, useRoute } from '@react-navigation/native';

const OTPInput = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const email = route.params?.email;
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

  const handleInputChange = (value,index) => {
    // to move cursor to next field
    if (value.length === 1 && index < totalInputs - 1) {
      inputRefs.current[index + 1].focus();
    }
    // to get the values in feld
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };

  const renderInputs = () => {
    const inputs = [];
    for (let i = 0; i < totalInputs; i++) {
      inputs.push(
        <View style={{padding:20, borderRadius:10, borderWidth:1, borderColor:'gray'}}>
        <TextInput
          key={i}
          ref={(ref) => (inputRefs.current[i] = ref)}
          style={{ fontSize: 24, fontWeight: 'bold'}}
          onChangeText={(value) => handleInputChange(value, i)}
          keyboardType='phone-pad'
          maxLength={1}
        />
        </View>
      );
    }
    return inputs;
  };

  const verifyOTP = async () => {
    for(let j=1;j<=inputValues.length;j++){
      if(inputValues[j]===''){
        Alert.alert('Error', 'Please enter a 4-Digit Token!!');
        return;
      }
    }
    const token = inputValues.join('');
    console.log('token=',token,email);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({otp:token,email})
    };
    try {
      await fetch(
          'https://inspireapp-server.onrender.com/api/v1/auth/verify-email', requestOptions)
          .then(response => {
              response.json()
                  .then(data => {
                    console.log(data);
                    Alert.alert(data.message);
                    // setTimeout(() => {
                    //   setApiMessage(data.message);
                    // // setModalVisible(false);
                    //   console.log('API response:', apiMessage);
                    // }, 2000); // Simulating a delay of 2 seconds before receiving the API response
                    // if token matches db, proceed to login page
                    if(data.status==='Success'){
                      navigation.navigate('Login');
                    }
                  });
          })
    }
    catch (error) {
        console.error(error);
    }

  }

  return (
    <View style={{marginTop:150,paddingBottom:300}}>
      <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
        {renderInputs()}
      </View>
      <Text style={{textAlign:'right', fontWeight:'bold',padding:10}}>Resend code in 
        <Text style={{color:'#73C5FF'}}> 00.{count}s</Text>
      </Text>
      <TouchableOpacity 
        style={{marginTop:150, margin:10,backgroundColor:'#3EACFA', borderRadius:10, padding:10}}
        onPress={verifyOTP}
      >
        <Text style={{textAlign:'center', color:'white'}}>Verify</Text>
      </TouchableOpacity>
    </View>
  )
}

export default OTPInput