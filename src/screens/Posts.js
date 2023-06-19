import { View, Text, SafeAreaView, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const Posts = () => {
    const navigation = useNavigation();

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
      }, []);
    
      const fetchPosts = async () => {
        try {
            //use this later when connecting to backend
        //   const response = await fetch('https://example.com/api/posts'); // Replace with your JSON API URL
        //   const data = await response.json();
            const data = [
                {
                id: 0,
                name: "Ruth Chisom",
                occupation: "Mobile Developer",
                text: "It as announcing it me stimulated frequently continuing. Least their she you now above going stand forth. He pretty future afraid should genius spirit on. Set property addition building pu",
                profile: require("../assets/images/profile.jpg"),
                image: require("../assets/images/post6.webp"),
                likes: 1550,
                },
                {
                    id: 1,
                    name: "Watch See",
                    occupation: "Grahpic Designer",
                    text: "Pleased him another was settled for. Moreover end horrible endeavor entrance any families. Income appear extent on of thrown in admire. Stanhill on we if vicinity material in. Saw him",
                    profile: require("../assets/images/profile1.jpg"),
                    image: require("../assets/images/post1.jpg"),
                    likes: 2000,
                },{
                    id: 2,
                    name: "Nathaniel Bassey",
                    occupation: "Fashion Designer",
                    text: "Much did had call new drew that kept. Limits expect wonder law she. Now has you views woman noisy match money rooms. To up remark it eldest length oh passed. Off because yet mistake feelin",
                    profile: require("../assets/images/profile2.jpeg"),
                    image: require("../assets/images/post2.jpg"),
                    likes: 1550,
                },{
                    id: 3,
                    name: "Obi Agu",
                    occupation: "Content Creator",
                    text: "Needed feebly dining oh talked wisdom oppose at. Applauded use attempted strangers now are middleton concluded had. It is tried ",
                    profile: require("../assets/images/profile3.jpg"),
                    image: require("../assets/images/post3.jpg"),
                    likes: 1550,
                },{
                    id: 4,
                    name: "Elizabeth Queen",
                    occupation: "Backend Developer",
                    text: "Kindness to he horrible reserved ye. Effect twenty indeed beyond for not had county. The use him without greatly can private. Increasing it unpleasant no of contrasted no contin",
                    profile: require("../assets/images/profile4.jpeg"),
                    image: require("../assets/images/pizza.jpg"),
                    likes: 1550,
                    },
                {
                        id: 5,
                        name: "Abaz Udoh",
                        occupation: "Business Consultant",
                        text: "Whole every miles as tiled at seven or. Wished he entire esteem mr oh by. Possible bed you pleasure civility boy elegance ham. He prevent request by if in pleased. Picture too and",
                        profile: require("../assets/images/profile5.jpg"),
                        image: require("../assets/images/post5.webp"),
                        likes: 2000,
                },{
                        id: 6,
                        name: "Femi Adura",
                        occupation: "Techy Lawyer",
                        text: "Sportsman delighted improving dashwoods gay instantly happiness six. Ham now amounted absolute not mistaken way pleasant whatever. At an these still no dried folly stood thing. Rapid it o",
                        profile: require("../assets/images/city.jpg"),
                        image: require("../assets/images/poundo.jpg"),
                        likes: 1550,
                        },
            ];
          setPosts(data);
        } catch (error) {
          console.error(error);
        }
      };

      const renderItem = ({ item }) => (
        <View>
            <View style={{ margin:10}}>
                <View style={{ marginTop:5, justifyContent:'space-between', flexDirection:'row'}}>
                    <View style={{ justifyContent:'space-between', flexDirection:'row'}}>
                            <Image 
                                source={item.profile}
                                style={{width:40, height:40, borderRadius:20}}
                            />
                            <View>
                                <Text style={{fontWeight:'bold'}}> {item.name}</Text>
                                <Text style={{fontSize:12}}> {item.occupation}</Text>
                            </View>
                    </View>
                    <View>
                            <Image 
                                source={require('../assets/icons/options.png')}
                                style={{width:25, height:25, margin:5}}
                            />
                    </View>
                </View>
                <Text style={{color:'gray'}}>
                        {item.text}
                        <Text 
                            style={{color:'#3EACFA'}}
                            onPress={() => {
                                // navigation.navigate('Detail');
                            }}
                        >
                                ...See more
                            </Text>
                </Text>
                <Image
                    source={item.image}
                    style={{height:180, width:'100%'}}
                />
                <Text style={{fontSize:12, color:'gray'}}>{item.likes.toLocaleString()} likes</Text>
                <View style={{padding:10,flexDirection:'row', justifyContent:'space-between'}}>
                    <View>
                        <Image
                            source={require('../assets/icons/like.png')}
                            style={{height:20, width:20, alignSelf:'center'}}
                            onPress={() => {
                                //{storeLike}
                            }}
                        />
                        <Text style={{fontSize:12, color:'gray'}}> Like</Text>
                    </View>
                    <View>
                        <Image
                            source={require('../assets/icons/edit.png')}
                            style={{height:20, width:20, alignSelf:'center'}}
                            onPress={() => {
                                //{sendComment}
                            }}
                        />
                        <Text style={{fontSize:12, color:'gray'}}> Comment</Text>
                    </View>
                    <View>
                        <Image
                            source={require('../assets/icons/retweet.png')}
                            style={{height:20, width:20, alignSelf:'center'}}
                            onPress={() => {
                                //{repostMessage}
                            }}
                        />
                        <Text style={{fontSize:12, color:'gray'}}> Repost</Text>
                    </View>
                    <View>
                        <Image
                            source={require('../assets/icons/send.png')}
                            style={{height:20, width:20, alignSelf:'center'}}
                            onPress={() => {
                                // navigation.navigate('Send');
                                //{sendMessage}
                            }}
                        />
                        <Text style={{fontSize:12, color:'gray'}}> Send</Text>
                    </View>
                </View>
            </View>
            <View style={{borderBottomWidth:5, borderBottomColor:'gray'}}></View>
        </View>
      );
      
    return (
    <SafeAreaView style={{backgroundColor:'white'}}>
        {/* <ScrollView> */}
            <View style={{marginTop:40,padding:10,flexDirection:'row', justifyContent:'space-between'}}>
                
                <Image 
                    source={require('../assets/images/logo.png')}
                    style={{height:40, width:'35%'}}
                    onPress={() => {
                        navigation.navigate('Posts');
                    }}
                />
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Spaces');
                        }}
                    >
                        <Image 
                            source={require('../assets/icons/mic.png')}
                            style={{width:20, height:20, margin:5}}
                            
                        />
                    </TouchableOpacity>
                    <Image 
                        source={require('../assets/icons/notification.png')}
                        style={{width:20, height:20, margin:5}}
                    />
                    <Image 
                        source={require('../assets/icons/comment.png')}
                        style={{width:20, height:20, margin:5}}
                    />
                </View>
            </View>

            <View style={{borderBottomWidth:1, borderBottomColor:'gray'}}></View>

<View>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 200 }} // Add bottom padding to avoid cutting off last item
      />
    </View>

        {/* </ScrollView> */}
    </SafeAreaView>
  )
}

export default Posts