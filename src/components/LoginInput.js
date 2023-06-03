import { View, Text, TextInput, Alert, Button, TouchableOpacity, Image } from 'react-native'
import React, { useState }  from 'react'
import { useNavigation } from '@react-navigation/native';

const LoginInput = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
        console.log('password')
    };

    const isValidEmail = (email) => {
      // Email regex pattern
      const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      return emailPattern.test(email);
    };

    const submitData = () => {
        let myInfo = {
            email,
            password
        }
        console.log("Data Submitted", myInfo);
        // check that no field is empty
        if(email === '' || password === ''){
          // if(fullname.trim() === ''){
          Alert.alert('Error', 'Please fill in the required(*) field(s).');
          return;
        }
        // check that emailis valid
        if (!isValidEmail(email)) {
          Alert.alert('Error', 'Please enter a valid email address.');
          return;
        }
        // check if login details are correct
        // navigation.navigate('Welcome');
      }

  return (
    <View style={{margin: 15, marginTop:-15}}>

      {/* Email */}
      <Text style={{fontWeight:'bold'}}>Email*</Text>
      <TextInput
        onChangeText={setEmail}
        placeholder={'Please enter your Email Address '}
        placeholderTextColor={{color:'red'}}
        style={{borderWidth: 1,padding: 10, borderColor: 'black', borderRadius: 10, marginTop: 5, marginBottom: 10}}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      {/* Password */}
      <Text style={{fontWeight:'bold'}}>Password*</Text>
      <View style={{marginBottom:10,flexDirection:'row', justifyContent: 'center',borderWidth: 1, borderRadius: 10, }}>
        <TextInput
            onChangeText={setPassword}
            placeholder={'Please enter your Password '}
            placeholderTextColor={{color:'red'}}
            style={{ paddingLeft: 10,marginTop: 5, marginBottom: 10, flex:1}}
            secureTextEntry={!showPassword}
            require
        />
        <TouchableOpacity
            onPress={togglePasswordVisibility}
        >
            <Image
                source={showPassword ? require('../assets/icons/hide.png') : require('../assets/icons/show.png')}
                style={{width:20, height:20, margin:15, right:10}}
            />
        </TouchableOpacity>
      </View>
      <Text 
        style={{color:'#1a6dba', textAlign:'right',fontSize:12, marginTop:-10}}
        onPress={() => {
          navigation.navigate('ForgotPassword');
      }}
      >
        Forgotten Password?
      </Text>

      <TouchableOpacity onPress={submitData} style={{backgroundColor:'#3EACFA',borderRadius:10, padding:10, marginTop:70, marginBottom:70}}>
            <Text style={{color:'white', textAlign:'center'}}>Sign In</Text>
      </TouchableOpacity>

      <Text style={{textAlign:'center',padding:10, fontWeight:'bold'}}>Sign in with</Text>
      <View style={{flexDirection:'row', justifyContent:'space-between', margin:20}}>
        <Image
            source={require('../assets/icons/google.png')}
            style={{width:30, height:30}}
        />
        <Image
            source={require('../assets/icons/facebook.png')}
            style={{width:30, height:30, tintColor:'#1a6dba'}}
        />
        <Image
            source={require('../assets/icons/linkedin.png')}
            style={{width:30, height:30, tintColor:'#0eb0f0'}}
        />
      </View>
      <Text style={{textAlign:'center', fontWeight:'bold'}}>
        Do not have an account?
            <Text 
                style={{color:'#1a6dba', fontWeight:'bold', textAlign:'center'}}
                onPress={() => {
                    navigation.navigate('Register');
                }}
            >
                Sign up
            </Text>
      </Text>

    </View>
  )
}

export default LoginInput