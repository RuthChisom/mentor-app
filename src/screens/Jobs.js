import { View, Text, SafeAreaView, Image, FlatList, TouchableOpacity, Modal, StyleSheet, Animated, PanResponder, TextInput } from 'react-native'
import React, {useState, useEffect, useRef} from 'react'
import { useNavigation } from '@react-navigation/native';

const Jobs = () => {
  const navigation = useNavigation();

    const [jobs, setJobs] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const slideAnimation = new Animated.Value(0);
    const [selectedData, setSelectedData] = useState([]); //this handles what is displayed in the modal

    const handleBoxPress = ({item}) => {
      setSelectedData(item);
      setModalVisible(true);
      Animated.spring(slideAnimation, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    };
  
    const handleCloseModal = () => {
      Animated.spring(slideAnimation, {
        toValue: 0,
        useNativeDriver: true,
      }).start(() => {
        setModalVisible(false);
        // setSelectedData(null);
      });
    };
  
    const modalTranslateY = slideAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [100, 0],
    });

    //to allow user swipe down to close modal
    const pan = useRef(new Animated.ValueXY()).current; //holds the current position of the gesture,
    const panResponder = useRef(
      PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (_, gesture) => {  // when the user swipes down
          pan.setValue({ x: 0, y: gesture.dy });
        },
        onPanResponderRelease: (_, gesture) => {
          if (gesture.dy > 50) { // if the swipe distance exceeds 50 pixels
            handleCloseModal();
          } else {
            Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: true }).start();
          }
        },
      })
    ).current;


    useEffect(() => {
      fetchJobs();
    }, []);
  
    const fetchJobs = async () => {
      try {
          //use this later when connecting to backend
      //   const response = await fetch('https://example.com/api/jobs'); // Replace with your JSON API URL
      //   const data = await response.json();
          const data = [
              {
              id: 0,
              company: "Stutern Limited",
              title: "UX Designer",
              shortText: "The mobile developer will be responsible for frequently continuing. Least the",
              fullText: "The mobile developer will be responsible for frequently continuing. Least the mobile developer will be responsible for frequently continuing. Least tThe mobile developer will be responsible for frequently continuing. Least t",
              responsibilities: "will be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile de",
              location: "Lagos",
              postedAt: "2days",
              pay: 100000,
              currency: 'N'
              },
              {
                  id: 1,
                  company: "Seel Group",
                  title: "Graphic Designer",
                  shortText: "Pleased him another was settled for. Moreover end horrible endeavor ent",
                  fullText: "Pleased him another was settled for. Moreover end horrible endeavor entr was settled for. Moreover end horrible ender was settled for. Moreover end horrible ende",
                  responsibilities: "will be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile de",
                  location: "Abuja",
                  postedAt: "10days",
                  pay: 50000,
                currency: 'N'
            },{
                  id: 2,
                  company: "Google Nigeria",
                  title: "Fashion Designer",
                  shortText: "Much did had call new drew that kept. Limits expect wonder law she. Now haelin",
                  fullText: "Pleased him another was settled for. Moreover end horrible endeavor entr was settled for. Moreover end horrible ender was settled for. Moreover end horrible ende",
                  responsibilities: "will be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile de",
                  location: "Ibadan",
                  postedAt: "3weeks",
                  pay: 170000,
              currency: 'N'
            },{
                  id: 3,
                  company: "Accelerate limited",
                  title: "Content Creator",
                  shortText: "Needed feebly dining oh talked wisdom oppose at. Applauded use attempted stranged ",
                  fullText: "Pleased him another was settled for. Moreover end horrible endeavor entr was settled for. Moreover end horrible ender was settled for. Moreover end horrible ende",
                  responsibilities: "will be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile de",
                  location: "London",
                  postedAt: "1month",
                  pay: 30000,
              currency: 'N'
            },{
                  id: 4,
                  company: "Truejoy Wears",
                  title: "Backend Developer",
                  shortText: "Kindness to he horrible reserved ye. Effect twenty indecan private. Increa",
                  fullText: "Pleased him another was settled for. Moreover end horrible endeavor entr was settled for. Moreover end horrible ender was settled for. Moreover end horrible ende",
                  responsibilities: "will be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile de",
                  location: "Kano",
                  postedAt: "2months",
                  pay: 750000,
              currency: 'N'
            },
              {
                      id: 5,
                      company: "She Code Africa",
                      title: "Business Consultant",
                      shortText: "Whole every miles as tiled at seven or. Wished he entire esteem mr oh too and",
                      fullText: "Pleased him another was settled for. Moreover end horrible endeavor entr was settled for. Moreover end horrible ender was settled for. Moreover end horrible ende",
                      responsibilities: "will be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile de",
                      location: "Lagos",
                      postedAt: "4months",
                      pay: 2000,
              currency: 'N'
            },
            {
                      id: 6,
                      company: "Tulabyte Solutions",
                      title: "Techy Lawyer",
                      shortText: "Sportsman delighted improving dashwoods gay instantly happiness six. Ham noo",
                      fullText: "Sportsman delighted improving dashwoods gay instantly happiness six. Ham nooghted improving dashwoods gay instantly happinessghted improving dashwoods gay instantly happinessghted improving dashwoods gay instantly happiness",
                      responsibilities: "will be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile dewill be responsible for frequently continuing. Least the mobile de",
                      location: "Asaba",
                      postedAt: "6months",
                      pay: 155000,
              currency: 'N'
            },
          ];
        setJobs(data);
      } catch (error) {
        console.error(error);
      }
    };

    const renderItem = ({ item }) => (
      <View>
        <TouchableOpacity style={{backgroundColor:'#5865BA', borderRadius:15, margin:10, padding:10}} onPress={() => handleBoxPress({item})} >
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View>
                    <Text style={{fontWeight:'bold', fontSize:18, color:'white'}}>{item.title}</Text>
                    <Text style={{fontSize:12, color:'white'}}>{item.company}</Text>
                </View>
                <Image 
                              source={require('../assets/icons/bookmark.png')}
                              style={{width:20, height:20, margin:5, tintColor:'white'}}
                />
            </View>
            <View style={{ marginTop:5, marginBottom:20, justifyContent:'space-between', flexDirection:'row'}}>
                <Image
                              source={require('../assets/icons/pin.png')}
                              style={{width:15, height:15, tintColor:'white'}}
                />
                <Text style={{fontSize:9, color:'white',left:-275}}>{item.location}</Text>
            </View>
            {/* <View style={{ margin:10}}> */}
                <Text style={{color:'white'}}>{item.shortText}..... </Text>
            {/* </View> */}
          <View style={{ marginTop:25, justifyContent:'space-between', flexDirection:'row'}}>
            <Text style={{fontSize:9, color:'white'}}>posted {item.postedAt} ago</Text>
            <Text style={{fontSize:12, color:'white'}}>{item.currency}{item.pay.toLocaleString()}</Text>
          </View>

          <Modal
            animationType="none"
            transparent={true}
            visible={modalVisible}
            onRequestClose={handleCloseModal}
          >
            <Animated.View 
              style={[styles.modalContainer, 
                      { transform: [ { translateY: modalTranslateY }, ...pan.getTranslateTransform() ] },
                    ]}
              {...panResponder.panHandlers} //enable the touch gestures to be recognized
            >
              {/* Modal content */}
                  <View style={{borderBottomWidth:3, borderBottomColor:'#5865BA', padding:10, width:'15%', alignSelf:'center'}}></View>

                  <View style={{ margin:10, marginTop:20}}> 
                      <View>
                          <Text style={{fontWeight:'bold', fontSize:18}}>{selectedData.title}</Text>
                          <Text style={{fontSize:12}}>{selectedData.company}</Text>
                          <View style={{ marginTop:5, marginBottom:20, justifyContent:'space-between', flexDirection:'row'}}>
                          <Image
                                        source={require('../assets/icons/pin.png')}
                                        style={{width:15, height:15}}
                          />
                          <Text style={{fontSize:9, left:-295}}>{selectedData.location}</Text>
                      </View>
                      </View>
                      <Text >{selectedData.fullText} </Text>
                      <Text style={{fontWeight:'bold', fontSize:16, marginTop:35}}>Responsibilities</Text>
                      <Text>{selectedData.responsibilities}</Text>
                  </View>
                  <View style={{ marginTop:25, margin:10, justifyContent:'space-between', flexDirection:'row'}}>
                    <View>
                      <Text style={{fontWeight:'bold', fontSize:16}}>Salary</Text>
                      {selectedData.pay && <Text style={{fontSize:13}}>{selectedData.currency}{selectedData.pay.toLocaleString()}</Text>}
                    </View>
                    <TouchableOpacity 
                      style={styles.closeButton} 
                      onPress={handleCloseModal}
                    >
                        <Text style={{color:'white'}}>Apply</Text>
                    </TouchableOpacity>
                  </View>
            </Animated.View>
          </Modal>
        </TouchableOpacity>
      </View>
    );

    return (
      <View style={{backgroundColor:'white'}}>
        <View style={{flexDirection:'row', justifyContent:'space-between',margin:10,}}>
          <View style={{flexDirection:'row', justifyContent:'space-between', borderWidth:.5, borderRadius:25, padding:5, width:'80%'}}>
            <Image
                                          source={require('../assets/icons/search.png')}
                                          style={{width:20, height:20, alignSelf:'center', tintColor:'#98A1B3'}}
            />
            <TextInput
            placeholder='Search'
            style={{left:-180, padding:5}}
            ></TextInput>
          </View>
          <TouchableOpacity 
            style={{alignSelf:'center', alignItems:'center'}}
            onPress={() => {
              navigation.navigate('JobEdit');
          }}
          >
            <Image
                                            source={require('../assets/icons/pencil.png')}
                                            style={{width:15, height:15, }}
              />
            <Text style={{fontSize:12}}>Add Job</Text>
          </TouchableOpacity>
        </View>
        
        <View style={{borderBottomWidth:3, borderBottomColor:'#98A1B3'}}></View>
        <View>
          <FlatList
            data={jobs}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            contentContainerStyle={{ paddingBottom: 200 }} // Add bottom padding to avoid cutting off last item
          />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    // justifyContent: 'flex-end',
    backgroundColor: 'white',
    width: '100%',
    height: '80%',
    ...Platform.select({
      ios: {
        zIndex: 1000, // Add a higher zIndex value for iOS
      },
    }),
  },
  closeButton: {
    backgroundColor: '#3EACFA',
    borderRadius:10,
    padding:10,
    width:90,
    alignItems:'center'
  },
});

export default Jobs