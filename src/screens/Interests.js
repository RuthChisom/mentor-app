import { View, Text, SafeAreaView, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'

import { useNavigation } from '@react-navigation/native';
// import MultiSelect from 'react-native-multiple-select';

const items = [{
    id: 0,
    name: 'Mentoring'
  }, {
    id: 1,
    name: 'Job Opportunities'
  }, {
    id: 2,
    name: 'Mentorship'
  }, {
    id: 3,
    name: 'Fashion'
  }, {
    id: 4,
    name: 'Business/Finace'
  }, {
    id: 5,
    name: 'Tech/IT'
  }, {
    id: 6,
    name: 'Entertainment'
  }, {
    id: 7,
    name: 'News'
  }, {
    id: 8,
    name: 'Secondary'
    }, {
        id: 9,
        name: 'Travel'
      }, {
        id: 10,
        name: 'Gaming'
      }, {
        id: 11,
        name: 'Politics'
      }, {
        id: 12,
        name: 'Music'
        }, {
          id: 13,
          name: 'Arts'
          }, {
            id: 14,
            name: 'Culture'
            }, {
              id: 15,
              name: 'Design'
              }
];

const Interests = () => {
  const navigation = useNavigation();

    // Data Source for the SearchableDropdown
  const [selectedItems, setSelectedItems] = useState([]);

//   useEffect(() => {
//     fetch('https://abooutreactapis.000webhostapp.com/demosearchables.php')
//       .then((response) => response.json())
//       .then((responseJson) => {
//         //Successful response from the API Call
//         setServerData(responseJson.results);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

const handleItemPress = (itemId) => {
    const isSelected = selectedItems.includes(itemId);
    if (isSelected) {
      setSelectedItems(selectedItems.filter((item) => item !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const renderItem = ({ item }) => {
    const isSelected = selectedItems.includes(item.id);

    return (
      <TouchableOpacity
        style={[
        styles.itemContainer,
          {backgroundColor: isSelected ? '#F26C0C' : 'transparent'}
        ]}
        onPress={() => handleItemPress(item.id)}
      >
        <Text style={{ color: isSelected ? 'white' : '#F26C0C' , fontWeight:'bold', alignSelf:'center'}}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  const saveInterests = () => {
    if(selectedItems.length<3){
      Alert.alert('Error', 'Please select AT LEAST THREE(3) Interests!');
      return;
    }
    console.log("selected=", selectedItems);

    // not sure what to do here, proceed to be a mentor page
    navigation.navigate('BeMentor');
  }

//   const keyExtractor = (item) => item.id + numColumns;

  return (
    <View style={{marginTop:50, margin:10}}>
      <Text style={{fontWeight:'bold', fontSize:25}}>What do you want to see on Inspire?</Text>
      <Text style={{fontSize:16, paddingTop:10}}>Select at least 3 interests to personalize your experience on Inspire</Text>

{/* start of select options */}
      <FlatList
        data={items}
        renderItem={renderItem}
        // keyExtractor={keyExtractor}
        keyExtractor={(item) => item.id}
        extraData={selectedItems}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        
      />
        {/* <Text>Selected Items: {selectedItems.join(', ')}</Text> */}
{/* end of select options */}

      <TouchableOpacity
        style={{borderRadius:5, padding:10, backgroundColor:'#3EACFA', width:70, alignSelf:'flex-end', margin:10}}
        onPress={saveInterests}
      >
        <Text style={{color:'white', textAlign:'center'}}>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    listContainer: {
      paddingHorizontal: 10,
      marginTop:20,
      marginBottom:30,
    },
    itemContainer: {
      flex: 1,
      padding: 10,
      backgroundColor: 'transparent',
      borderWidth:1,
      borderRadius:8,
      borderColor:'#F26C0C',
      margin:10
    },
  });

export default Interests