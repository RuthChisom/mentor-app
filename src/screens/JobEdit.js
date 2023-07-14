import { View, Text, TextInput, TouchableOpacity , SafeAreaView, ScrollView, Alert, DatePickerIOSBase} from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native';

const JobEdit = () => {
    const navigation = useNavigation();
    const [title, setTitle] = useState('');
    const [company, setCompany] = useState('');
    const [category, setCategory] = useState('');
    const [location, setLocation] = useState('');
    const [deadline, setDeadline] = useState(new Date());
    const [description, setDescription] = useState('');
    const [salary, setSalary] = useState(0);
    const [contact, setContact] = useState('');
    const [instruction, setInstruction] = useState('');
    const [apiMessage, setApiMessage] = useState('Loading...');

    const submitJob = () => {
        let job = {
            title, company, category, location, deadline, description, salary, contact, instruction
        }
        console.log("Data Submitted", job);
        // check that no field is empty
        if(title === '' || company === '' || location === ''|| description === '' ){
          // if(fullname.trim() === ''){
          Alert.alert('Error', 'Please fill in the required(*) field(s).');
          return;
        }
        // submit to db
        navigation.navigate('Jobs');
      }

    return (
        <ScrollView style={{ marginTop:30, backgroundColor:'white'}}>
            <Text style={{fontWeight:'bold', fontSize:20, alignSelf:'center', margin:15}}>Add Job</Text>
            <View style={{borderBottomWidth:3, borderBottomColor:'#E1E2E6'}}></View>
            <View style={{margin:10}}>
                <Text style={{fontWeight:'bold'}}>Job title*</Text>
                <TextInput
                    onChangeText={setTitle}
                    placeholder={'Enter the Job Title '}
                    style={{borderWidth: 2,padding: 10, borderColor: '#E1E2E6', borderRadius: 10, marginTop: 5, marginBottom: 10}}
                    // keyboardType="email-address"
                    // autoCapitalize="none"
                    // autoCorrect={false}
                    // require
                />

                <Text style={{fontWeight:'bold'}}>Company name*</Text>
                <TextInput
                        onChangeText={setCompany}
                        placeholder={'Enter the name of the company'}
                        style={{borderWidth: 2,padding: 10, borderColor: '#E1E2E6', borderRadius: 10, marginTop: 5, marginBottom: 10}}
                />

                <Text style={{fontWeight:'bold'}}>Job category</Text>
                <TextInput
                        onChangeText={setCategory}
                        placeholder={'Enter the category of the job'}
                        style={{borderWidth: 2,padding: 10, borderColor: '#E1E2E6', borderRadius: 10, marginTop: 5, marginBottom: 10}}
                />

                <Text style={{fontWeight:'bold'}}>Location*</Text>
                <TextInput
                        onChangeText={setLocation}
                        placeholder={'Where will the applicant report to?'}
                        style={{borderWidth: 2,padding: 10, borderColor: '#E1E2E6', borderRadius: 10, marginTop: 5, marginBottom: 10}}
                />

                <Text style={{fontWeight:'bold'}}>Application deadline</Text>
                <TextInput
                        onChangeText={setDeadline}
                        placeholder={'When will the job opening be closed?'}
                        style={{borderWidth: 2,padding: 10, borderColor: '#E1E2E6', borderRadius: 10, marginTop: 5, marginBottom: 10}}
                        // keyboardType='visible-password'
                />
                {/* <DatePickerIOS
        style={styles.datePicker}
        date={selectedDate}
        onDateChange={handleDateChange}
        mode="date"
      /> */}

                <Text style={{fontWeight:'bold'}}>Job description*</Text>
                <TextInput
                        onChangeText={setDescription}
                        placeholder={'What are the responsibilities of the applicant?'}
                        style={{borderWidth: 2,padding: 10, borderColor: '#E1E2E6', borderRadius: 10, marginTop: 5, marginBottom: 10}}
                        multiline
                        numberOfLines={4}
                />

                <Text style={{fontWeight:'bold'}}>Salary</Text>
                <TextInput
                        onChangeText={setCompany}
                        placeholder={'Enter the maximum pay?'}
                        style={{borderWidth: 2,padding: 10, borderColor: '#E1E2E6', borderRadius: 10, marginTop: 5, marginBottom: 10}}
                        keyboardType="phone-pad"
                />

                <Text style={{fontWeight:'bold'}}>Contact Information</Text>
                <TextInput
                        onChangeText={setContact}
                        placeholder={'How can the applicant contact you?'}
                        style={{borderWidth: 2,padding: 10, borderColor: '#E1E2E6', borderRadius: 10, marginTop: 5, marginBottom: 10}}
                />

                <Text style={{fontWeight:'bold'}}>Application Instruction</Text>
                <TextInput
                        onChangeText={setInstruction}
                        placeholder={'Any further instructions?'}
                        style={{borderWidth: 2,padding: 10, borderColor: '#E1E2E6', borderRadius: 10, marginTop: 5, marginBottom: 10}}
                />

                <TouchableOpacity onPress={submitJob} style={{backgroundColor:'#3EACFA',borderRadius:10, padding:10,}}>
                        <Text style={{color:'white', textAlign:'center'}}>Publish</Text>
                </TouchableOpacity>
            </View> 

        </ScrollView>
    )
}

export default JobEdit