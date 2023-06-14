import { View, Text, TextInput, Alert, Modal, TouchableOpacity, Image, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'

import { useNavigation } from '@react-navigation/native';


const RegisterInput = () => {
    // define name as hook, so that input will show in textinput box
    const [fullName, setName] = useState('');
    const [email, setEmail] = useState('');
    var [phoneNumber, setPhone] = useState(0);
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [apiMessage, setApiMessage] = useState('Loading...');

    const closeModal = () => {
      setApiMessage('Loading...');
      setModalVisible(false);
    };

    const navigation = useNavigation();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
        console.log('password')
    };

    const isValidEmail = (email) => {
      // Email regex pattern
      const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      return emailPattern.test(email);
    };

    const submitData = async () => {
        // check that no field is empty
        if(fullName === '' || email === '' || phoneNumber === '' || password === ''){
          // if(fullName.trim() === ''){
          Alert.alert('Error', 'Please fill in the required(*) field(s).');
          return;
        }
        // check that emailis valid
        if (!isValidEmail(email)) {
          Alert.alert('Error', 'Please enter a valid email address.');
          return;
        }

        phoneNumber = parseInt(phoneNumber, 10);

        let myInfo = {
          fullName,
          email,
          phoneNumber,
          password
      }
      console.log("Data Submitted", myInfo);

        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(myInfo)
        };

        setModalVisible(true);

        // send form to api
          try {
              await fetch(
                  'https://inspireapp-server.onrender.com/api/v1/auth/create-account', requestOptions)
                  .then(response => {
                      response.json()
                          .then(data => {
                            console.log(data);
                            // Alert.alert(data.message);
                            setTimeout(() => {
                              setApiMessage(data.message);
                            // setModalVisible(false);
                              console.log('API response:', apiMessage);
                            }, 2000); // Simulating a delay of 2 seconds before receiving the API response
                            if(data.status==='Success'){
                              navigation.navigate('OTP', { email}); //send email along to new screen
                            }
                          });
                  })
          }
          catch (error) {
              console.error(error);
          }
        }

  return (
    <View style={{margin: 15, marginTop:-15}}>
        {/* Name */}
        <Text style={{fontWeight:'bold'}}>Full Name*</Text>
        <TextInput
            //   value={fullName}
            onChangeText={setName}
            placeholder={'Please enter your Fullname '}
            placeholderTextColor={{color:'red'}}
            style={{borderWidth: 1,padding: 10, borderColor: 'black', borderRadius: 10, marginBottom: 10}}
        />

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

      {/* Phone Number */}
      <Text style={{fontWeight:'bold'}}>Phone Number*</Text>
      <TextInput
        onChangeText={setPhone}
        placeholder={'Please enter your Phone Number '}
        placeholderTextColor={{color:'red'}}
        style={{borderWidth: 1,padding: 10, borderRadius: 10, marginTop: 5, marginBottom: 10}}
        keyboardType="phone-pad"   
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

      <TouchableOpacity onPress={submitData} style={{backgroundColor:'#3EACFA',borderRadius:10, padding:10}}>
        <Text style={{color:'white', textAlign:'center'}}>Sign Up</Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        // onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{apiMessage}</Text>
            <Button title="OK" onPress={closeModal} />
          </View>
        </View>
      </Modal>

      {/* <Button title='Sign Up' onPress={submitData} style={{borderRadius:20}} /> */}
      <Text style={{textAlign:'center',padding:10, fontWeight:'bold'}}>Sign up with</Text>
      <View style={{flexDirection:'row', justifyContent:'space-between', margin:15}}>
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
              style={{color:'#1a6dba', fontWeight:'bold', textAlign:'center', padding:20, margin:20}}
              onPress={() => {
                navigation.navigate('Login');
            }}
              >
                Sign in
            </Text>
      </Text>

    </View>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
  },
  modalText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default RegisterInput