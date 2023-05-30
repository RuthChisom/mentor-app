import { View, Text, TextInput, Alert, Button, TouchableOpacity, Pressable, Image } from 'react-native'
import React, { useState } from 'react'

const RegisterInput = () => {
    // define name as hook, so that input will show in textinput box
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [passwordIcon, setPasswordIcon] = useState(require('../assets/icons/hide.png'));

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
        console.log('password')
    };

    const submitData = () => {
        let myInfo = {
            name,
            email,
            phone,
            password
        }
        console.log("Data Submitted", myInfo);
    }

  return (
    <View style={{margin: 15}}>
        {/* Name */}
        <Text style={{fontWeight:'bold'}}>Name</Text>
        <TextInput
            //   value={name}
            onChangeText={setName}
            placeholder={'Please enter your Fullname '}
            placeholderTextColor={{color:'red'}}
            style={{borderWidth: 1,padding: 10, borderColor: 'black', borderRadius: 10, marginBottom: 10}}
        />

      {/* Email */}
      <Text style={{fontWeight:'bold'}}>Email</Text>
      <TextInput
        onChangeText={setEmail}
        placeholder={'Please enter your Email Address '}
        placeholderTextColor={{color:'red'}}
        style={{borderWidth: 1,padding: 10, borderColor: 'black', borderRadius: 10, marginTop: 5, marginBottom: 10}}
        keyboardType="email-address"    
      />

      {/* Phone Number */}
      <Text style={{fontWeight:'bold'}}>Phone Number</Text>
      <TextInput
        onChangeText={setPhone}
        placeholder={'Please enter your Phone Number '}
        placeholderTextColor={{color:'red'}}
        style={{borderWidth: 1,padding: 10, borderRadius: 10, marginTop: 5, marginBottom: 10}}
        keyboardType="phone-pad"   
      />

      {/* Password */}
      <Text style={{fontWeight:'bold'}}>Password</Text>
      <View style={{marginBottom:10,flexDirection:'row', justifyContent: 'center',borderWidth: 1, borderRadius: 10, }}>
        <TextInput
            onChangeText={setPassword}
            placeholder={'Please enter your Password '}
            placeholderTextColor={{color:'red'}}
            style={{ paddingLeft: 10,marginTop: 5, marginBottom: 10, flex:1}}
            secureTextEntry={!showPassword}
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
      

      {/* <View style={{margin: 10, flexDirection: 'row', justifyContent: "space-between"}}>
        <View style={{justifyContent:'center'}}>
            <Text style={{fontSize: 10}}> Name:</Text>
        </View>
        <View style={{flex:1, paddingLeft:15, justifyContent:'center'}}>
            <Text style={{fontSize: 10, color: 'purple'}}>{name}</Text>
        </View>
      </View>

      <View style={{margin: 10, flexDirection: 'row', justifyContent: "space-between"}}>
        <View style={{justifyContent:'center'}}>
            <Text style={{fontSize: 10}}>Email:</Text>
        </View>
        <View style={{flex:1, paddingLeft:15, justifyContent:'center'}}>
            <Text style={{fontSize: 10, color: 'purple'}}>{email}</Text>
        </View>
      </View>

      <View style={{margin: 10, flexDirection: 'row', justifyContent: "space-between"}}>
        <View style={{justifyContent:'center'}}>
            <Text style={{fontSize: 10}}>Phone:</Text>
        </View>
        <View style={{flex:1, paddingLeft:15, justifyContent:'center'}}>
            <Text style={{fontSize: 10, color: 'purple'}}>{phone}</Text>
        </View>
      </View> */}

      <Button title='Sign Up' onPress={submitData} style={{borderRadius:20}} />
      <Text style={{textAlign:'center',padding:10, fontWeight:'bold'}}>Sign up with</Text>
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
        Have an account already? 
        <Text
              style={{color:'#1a6dba', fontWeight:'bold'}}
              onPress={() => {
                ('https://github.com/ruthchisom');
              }}>
              Sign in
        </Text>
      </Text>

    </View>
  )
}

export default RegisterInput