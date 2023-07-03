import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Register from '../screens/Register';
import Posts from '../screens/Posts';
// import Spaces from '../screens/Spaces';
import postEdit from '../screens/PostEdit'
import Explore from '../screens/Explore'
import Jobs from '../screens/Jobs'
import ProfileDetails from '../screens/ProfileDetails'

// import TopStackNavigator from '../nav/TopStackNavigator' 
import Ionicons from '../../node_modules/react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from '../../node_modules/react-native-vector-icons/Feather'

const Tab = createBottomTabNavigator();

// Custom bottom tab bar component
// const CustomTabBar = ({ state, descriptors, navigation }) => {
//     return (
//       <View style={styles.tabBarContainer}>
//         {state.routes.map((route, index) => {
//           const { options } = descriptors[route.key];
//           const label = options.tabBarLabel || options.title || route.name;
  
//           const isFocused = state.index === index;
  
//           const onPress = () => {
//             const event = navigation.emit({
//               type: 'tabPress',
//               target: route.key,
//               canPreventDefault: true,
//             });
  
//             if (!isFocused && !event.defaultPrevented) {
//               navigation.navigate(route.name);
//             }
//           };
  
//           return (
//             <TouchableOpacity
//               key={route.key}
//               onPress={onPress}
//               style={[styles.tabItem, { opacity: isFocused ? 1 : 0.5 }]}
//             >
//               {/* Insert your tab icon or content */}
//             </TouchableOpacity>
//           );
//         })}
//       </View>
//     );
//   };
  
const BottomTabNavigator = () => {
  return (
      <Tab.Navigator
      //   initialRouteName="TopStackNavigator"
      //   activeColor="red"
      // inactiveColor="gray"
        // screenOptions={{ headerShown: false, tabBarShowLabel: false }}
        screenOptions={{ 
          tabBarShowLabel: false,
          tabBarStyle: {borderRadius:25, margin:10,bottom:5, position:'absolute' },
          tabBarInactiveTintColor:'red',
          tabBarActiveTintColor: 'yellow',
          // tabbar
            // activeTintColor: 'red', // Default activeTintColor
            // inactiveTintColor: 'gray', 
          }}
            // tabBar={props => <CustomTabBar {...props}/>}
      >
      {/* Define your tab screens here */}
      <Tab.Screen
            name='Home'
            component={Posts}
            options={{
                headerShown:false,
                tabBarIcon: ({color, size}) => {
                    return (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Image
                                source={require("../assets/icons/home.png")}
                                style={{width:20, height:20, 
                                    // tintColor: "#0077b6"
                                }}
                                />
                        </View>
                    )
                    // <Ionicons name='home-outline' color={color} size={size}/>
                },
                tabBarOptions: {
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                  },
            }}
        />
        <Tab.Screen
            name='Explore'
            component={Explore}
            options={{
                // headerShown:false,
                tabBarIcon: ({color, size}) => {
                    return (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Image
                                source={require("../assets/icons/application.png")}
                                style={{width:20, height:20}}
                                />
                        </View>
                    )
                    // <Feather name='shopping-bag' color={color} size={size}/>

                }
            }}
            
        />
        <Tab.Screen
            name='Write Post'
            component={postEdit}
            options={{
                // headerShown:false,
                tabBarIcon: ({color, size}) => {
                    return (
                        <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                            <Image
                                source={require("../assets/icons/add.png")}
                                style={{width:20, height:20}}
                                />
                        </View>
                    )
                    // <Ionicons name='heart-outline' color={color} size={size}/>
                }
            }}
        />
        <Tab.Screen
            name='Jobs'
            component={Jobs}
            options={{
                // headerShown:false,
                tabBarIcon: ({color, size}) => {
                    return (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Image
                                source={require("../assets/icons/suitcase.png")}
                                style={{width:20, height:20}}
                                />
                        </View>
                    )
                    // <Ionicons name='home-outline' color={color} size={size}/>
                }
            }}
        />
        <Tab.Screen
            name='ProfileDetails'
            component={ProfileDetails}
            options={{
                headerShown:false,
                tabBarIcon: () => {
                    return (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Image
                                source={require("../assets/icons/user.png")}
                                style={{width:20, height:20}}
                                />
                        </View>
                    )
                }
            }}
        />

        {/* <Tab.Screen 
          name="TopStackNavigator" 
          component={TopStackNavigator}
          options={{
            headerShown:false,
            tabBarStyle: {display: "none",},
          }}
           /> */}

      </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
    tabBarContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: 'white',
      borderTopWidth: 1,
      borderTopColor: 'gray',
      paddingVertical: 8,
    },
    tabItem: {
      flex: 1,
      alignItems: 'center',
      paddingVertical: 8,
    },
  });
  

export default BottomTabNavigator