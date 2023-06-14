import { View, Text, Image, FlatList, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const { width } = Dimensions.get('window');
const imageWidth = width / 3; // Adjust the number of columns by changing the divisor

const data = [
  { id: '1', imageUrl: require('../assets/images/profile.jpg') },
  { id: '2', imageUrl: require('../assets/images/post6.webp') },
  { id: '3', imageUrl: require('../assets/images/post1.jpg') },
  { id: '4', imageUrl: require('../assets/images/poundo.jpg') },
  { id: '5', imageUrl: require('../assets/images/welcomeA.png') },
  { id: '6', imageUrl: require('../assets/images/profile1.jpg') },
  { id: '7', imageUrl: require('../assets/images/post2.jpg') },
  { id: '8', imageUrl: require('../assets/images/pizza.jpg') },
  { id: '9', imageUrl: require('../assets/images/post1.jpg') },
  { id: '10', imageUrl: require('../assets/images/post5.webp') },
  { id: '11', imageUrl: require('../assets/images/profile5.jpg') },
  { id: '12', imageUrl: require('../assets/images/profile2.jpeg') },
  { id: '13', imageUrl: require('../assets/images/profile3.jpg') },
  { id: '14', imageUrl: require('../assets/images/profile4.jpeg') },
  { id: '15', imageUrl: require('../assets/images/post3.jpg') },
  { id: '16', imageUrl: require('../assets/images/post2.jpg') },
  { id: '17', imageUrl: require('../assets/images/welcomeB.png') },
  { id: '18', imageUrl: require('../assets/images/post1.jpg') },

  // Add more image data as needed
];

const ProfileDetails = () => {
  const renderItem = ({ item }) => (
    <Image 
      // source={{ uri: item.imageUrl }} 
      source={item.imageUrl}
      style={styles.image} />
  );

  return (
    <View>
      <View style={{marginTop:40, margin:20}}>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <Text style={{fontWeight:'bold', fontSize:18}}>Ruth Chisom</Text>
          <Image
            source={require('../assets/icons/menu.png')}
            style={{height:20, width:20, alignSelf:'center'}}
          />
        </View>
        
      </View>

      <View style={{borderBottomWidth:1, borderBottomColor:'gray'}}></View>

      <View style={{ margin:20}}>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <Image
            source={require('../assets/images/profile.jpg')}
            style={{height:60, width:60, alignSelf:'center', borderRadius:50}}
          />
          <View>
            <Text style={{fontWeight:'bold', fontSize:16}}>Mentees</Text>
            <Text style={{fontWeight:'bold', fontSize:16, alignSelf:'center'}}>10</Text>
          </View>
          <View >

            <Text style={{fontWeight:'bold', fontSize:16}}>Rating</Text>
            <Text style={{fontWeight:'bold', fontSize:16, alignSelf:'center'}}>4.5</Text>
          </View>
          <View>
            <Text style={{fontWeight:'bold', fontSize:16}}>Library</Text>
            <Text style={{fontWeight:'bold', fontSize:16, alignSelf:'center'}}>150</Text>
          </View>
        </View>
        <Text style={{color:'gray', fontWeight:'400', padding:10}}>
            With over 12years experience in Data Analytics and having impacted over 10k students around the globe
                        <Text 
                            style={{color:'#3EACFA'}}
                            onPress={() => {
                                // navigation.navigate('Detail');
                            }}
                        >
                                ...Read More
                        </Text>
        </Text>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <TouchableOpacity 
              style={{ margin:2,borderRadius:10, padding:10, width:'50%', borderColor:'#F26C0C', borderWidth:1.5}}
              // onPress={}
          >
              <Text style={{textAlign:'center', color:'#F26C0C'}}>Request Mentorship</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={{ margin:2,borderRadius:10, padding:10, width:'50%', borderColor:'#F26C0C', borderWidth:1.5}}
            // onPress={}
          >
              <Text style={{textAlign:'center', color:'#F26C0C'}}>Follow</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity 
            style={{ margin:4,borderRadius:10, padding:10, width:'100%', borderColor:'#F26C0C', borderWidth:1.5}}
            // onPress={}
          >
              <Text style={{textAlign:'center', color:'#F26C0C'}}>Message</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <TouchableOpacity 
              style={{ margin:2,borderRadius:10, padding:10, backgroundColor:'#D3D3D3'}}
              // onPress={}
          >
              <Text style={{textAlign:'center'}}>Book Appointment</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={{ margin:2,borderRadius:10, padding:10, backgroundColor:'#D3D3D3'}}
            // onPress={}
          >
              <Text style={{textAlign:'center'}}>Network</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={{ margin:2,borderRadius:10, padding:10, backgroundColor:'#D3D3D3'}}
            // onPress={}
          >
              <Text style={{textAlign:'center'}}>Groups</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={2} // Number of columns in the grid
            contentContainerStyle={styles.contentContainer}
          />
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // padding: 10,
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 600, // Add bottom padding to avoid cutting off last item
  },
  image: {
    width: '50%',
    height: imageWidth,
    margin: 5,
  },
});

export default ProfileDetails