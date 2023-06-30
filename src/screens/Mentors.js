import { View, Text, Image, FlatList, TouchableOpacity, TextInput } from 'react-native'
import React, {useState, useEffect, useRef}  from 'react'
import { useNavigation } from '@react-navigation/native';

const Mentors = () => {
  const navigation = useNavigation();
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    fetchRecommendedMentors();
  }, []);

  const fetchRecommendedMentors = async () => {
    try {
        //use this later when connecting to backend
    //   const response = await fetch('https://example.com/api/mentors/recommended'); // Replace with your JSON API URL
    //   const data = await response.json();
        const data = [
            {
            id: 0,
            name: "Sydney Lisa",
            occupation: "Product Designer",
            profile: require("../assets/images/city.jpg"),
            followers: 20
            },
            {
                id: 1,
                name: "Ama Royce",
                occupation: "Business Analyst",
                profile: require("../assets/images/profile1.jpg"),
                followers: 40
        },{
                id: 2,
                name: "Smith Robin",
                occupation: "Mobile DesDeveloperigner",
                profile: require("../assets/images/profile2.jpeg"),
                followers: 87
        },{
                id: 3,
                name: "Zenith Akpan",
                occupation: "Content Creator",
                profile: require("../assets/images/profile5.jpg"),
                followers: 5
            },{
                id: 4,
                name: "Elizabeth Queen",
                occupation: "Backend Developer",
                profile: require("../assets/images/profile4.jpeg"),
                followers: 112
        },{
                    id: 5,
                    name: "Etim Ade",
                    occupation: "Business Consultant",
                    profile: require("../assets/images/profile3.jpg"),
                    followers: 66
        },{
                    id: 6,
                    name: "Femi Adura",
                    occupation: "Technology Enthusiast",
                    profile: require("../assets/images/profile.jpg"),
                    followers: 70
        },
        ];
      setMentors(data);
    } catch (error) {
      console.error(error);
    }
  };

  const renderItem = ({ item }) => (
    <View>
      {/* <TouchableOpacity style={{backgroundColor:'#5865BA', borderRadius:15, margin:10, padding:10}} onPress={() => handleBoxPress({item})} > */}
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <Image 
                            source={item.profile}
                            style={{width:70, height:70, margin:5, borderRadius:50}}
              />
              <View style={{right:150, alignSelf:'center'}}>
                  <Text style={{fontWeight:'bold', fontSize:16}}>{item.name}</Text>
                  <Text style={{fontSize:12, color:'grey'}}>{item.followers} Mutual Followers</Text>
              </View>
          </View>
          <View style={{justifyContent:'space-between', flexDirection:'row'}}>
                <TouchableOpacity 
                    style={{backgroundColor:'#0E91EF', borderRadius:10, margin:10, padding:10, width:75, left:180}} 
                    // onPress={() => handleBoxPress({item})} 
                >
                    <Text style={{color:'white', alignSelf:'center'}}>Request</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{borderColor:'#F26C0C', borderWidth:1, borderRadius:10, margin:10, padding:10, width:75}} 
                    // onPress={() => handleBoxPress({item})} 
                >
                    <Text style={{color:'#F26C0C', alignSelf:'center'}}>Delete</Text>
                </TouchableOpacity>
              
          </View>
      {/* </TouchableOpacity> */}
    </View>
  );

  return (
    <View style={{backgroundColor:'white', paddingTop:15}}>
        <Text style={{fontWeight:'bold', fontSize:22, alignSelf:'center', margin:15}}>Recommended Mentors</Text>
        
        <View style={{borderBottomWidth:3, borderBottomColor:'#E1E2E6'}}></View>
        
        <View style={{flexDirection:'row', justifyContent:'space-between',margin:10,}}>
          <View style={{flexDirection:'row', justifyContent:'space-between', borderWidth:.5, borderRadius:25, padding:5, width:'90%'}}>
            <Image
                source={require('../assets/icons/search.png')}
                style={{width:20, height:20, alignSelf:'center', tintColor:'#98A1B3'}}
            />
            <TextInput
            placeholder='Search'
            style={{left:-220, padding:5}}
            ></TextInput>
          </View>
          <TouchableOpacity 
            style={{alignSelf:'center', alignItems:'center'}}
            onPress={() => {
            //   navigation.navigate('JobEdit');
          }}
          >
            <Image
                source={require('../assets/icons/menu-bar.png')}
                style={{width:30, height:30 }}
            />
          </TouchableOpacity>
          </View>
          <View>
            <FlatList
                data={mentors}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                contentContainerStyle={{ paddingBottom: 300 }} // Add bottom padding to avoid cutting off last item
            />
            </View>

    </View>
  )
}

export default Mentors