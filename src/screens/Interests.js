import { View, Text, SafeAreaView, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'

import { useNavigation } from '@react-navigation/native';
// import MultiSelect from 'react-native-multiple-select';

const items = [{
    id: 0,
    name: 'Ondo'
  }, {
    id: 1,
    name: 'Ogun'
  }, {
    id: 2,
    name: 'Calabar'
  }, {
    id: 3,
    name: 'Lagos'
  }, {
    id: 4,
    name: 'Maiduguri'
  }, {
    id: 5,
    name: 'Anambra'
  }, {
    id: 6,
    name: 'Benue'
  }, {
    id: 7,
    name: 'Kaduna'
  }, {
    id: 8,
    name: 'Abuja'
    }, {
        id: 9,
        name: 'Mentoring'
      }, {
        id: 10,
        name: 'Fashion'
      }, {
        id: 11,
        name: 'Culture'
      }, {
        id: 12,
        name: 'Academics'
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
          {backgroundColor: isSelected ? '#3EACFA' : 'transparent'}
        ]}
        onPress={() => handleItemPress(item.id)}
      >
        <Text style={{ color: isSelected ? 'white' : 'orange' , fontWeight:'bold'}}>
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
      marginBottom:50,
    },
    itemContainer: {
      flex: 1,
      padding: 10,
      backgroundColor: 'transparent',
      borderWidth:1,
      borderRadius:8,
      borderColor:'orange',
      margin:10
    },
  });

export default Interests