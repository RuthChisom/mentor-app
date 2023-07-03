import { View, Text, Image, TextInput, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState }  from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
// import MultiSelect from 'react-native-multiple-select';
import DropdownSelect from 'react-native-input-select';

const Profile = () => {
    const navigation = useNavigation();
    const profilePic = picLoc = false //fetch from backend

    const [gender, setGender] = useState('');
    const [job, setJob] = useState('');
    const [bio, setBio] = useState('');
    const [education, setEducation] = useState('');
    const [experience, setExperience] = useState('');
    const [mentorship, setMentorship] = useState('');

    const saveProfile = () => {
        let myProfile = {
            gender,
            job,
            bio,
            education,
            experience,
            mentorship
        }
        console.log("Data Submitted", myProfile);
        
        navigation.navigate('Home');
      }

  return (
        <SafeAreaView style={{backgroundColor:'white'}}>
            <ScrollView>

            <View style={{flexDirection:'row', justifyContent:'space-between', marginLeft:'30%', padding:10}}>
                <Text style={{textAlign:'center', fontSize: 20, fontWeight:'bold'}}>Create Profile</Text>
                <Text 
                    style={{fontSize:12, color:'#3EACFA', padding:8}}
                    onPress={() => {navigation.navigate('Posts')}}
                >
                    Skip
                </Text>
            </View>

            <View style={{borderBottomWidth:1, borderBottomColor:'gray'}}></View>

            <View style={{flexDirection:'row',justifyContent:'center'}}>
                <Image 
                    source={profilePic ? picLoc : require('../assets/icons/account.png')}
                    style={{width:60, height:60, margin:15, tintColor:'gray', alignSelf:'center'}}
                />
                <Image 
                    source={profilePic ? picLoc : require('../assets/icons/pencil.png')}
                    style={{width:20, height:20, tintColor:'gray', alignSelf:'center',left:-25, top:15}}
                />
            </View>

            <View style={{alignItems:'center'}}>
                <Text style={{fontSize:20}}>Ruth Chisom</Text>
                <Text>ndukwe100805043@gmail.com</Text>
            </View>

            <View style={{margin: 15, marginTop:15}}>
                <Text style={{fontWeight:'bold'}}>Gender</Text>
                <DropdownSelect
                    options={[
                        { name: 'Male'},
                        { name: 'Female'},
                        { name: 'Binary'},
                        { name: 'Prefer Not To Say'},
                      ]}
                    optionLabel={'name'}
                    optionValue={'name'}
                    selectedValue={gender}
                    onValueChange={(itemValue) => setGender(itemValue)}
                />
                <Text style={{fontWeight:'bold'}}>Job Description</Text>
                <TextInput
                    onChangeText={setJob}
                    style={[styles.inputField]}
                />
                <Text style={{fontWeight:'bold'}}>Bio</Text>
                <TextInput
                    onChangeText={setBio}
                    style={[styles.inputField]}
                    multiline
                    numberOfLines={4}
                    maxLength={500}
                />
                <Text style={{fontWeight:'bold'}}>Education</Text>
                <TextInput
                    onChangeText={setEducation}
                    style={[styles.inputField]}
                    multiline
                    numberOfLines={4}
                    maxLength={500}
                />
                <Text style={{fontWeight:'bold'}}>Job Experience</Text>
                <TextInput
                    onChangeText={setExperience}
                    style={[styles.inputField]}
                    multiline
                    numberOfLines={4}
                    maxLength={500}
                />
                <Text style={{fontWeight:'bold'}}>Mentorship Experience</Text>
                <TextInput
                    onChangeText={setMentorship}
                    style={[styles.inputField]}
                    multiline
                    numberOfLines={4}
                    maxLength={500}
                />
                <TouchableOpacity 
                    onPress={saveProfile} 
                    style={{backgroundColor:'#3EACFA',borderRadius:10, padding:10}}>
                    <Text style={{color:'white', textAlign:'center'}}>Save</Text>
                </TouchableOpacity>
            </View>

            </ScrollView>
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    inputField : {borderWidth: .5,padding: 10, borderColor: 'gray', borderRadius: 8, marginBottom: 10}
})

export default Profile