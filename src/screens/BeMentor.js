import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native';

const BeMentor = () => {
    const navigation = useNavigation();
    const [mentor, setMentor] = useState(0);

    const handleItemPress = (id) => {
        setMentor(id=='yes' ? 1 : 0 ); //setstate not updating on time
        // console.log("mentor=",mentor)
        // const isSelected = mentor.includes(itemId);
        // console.log("isSelected=",isSelected)
        // if (isSelected) {
        //   setSelectedItems(selectedItems.filter((item) => item !== itemId));
        // } else {
        //   setSelectedItems([...selectedItems, itemId]);
        // }
    };

    const saveMentor = () => {
        console.log("mentor=",mentor)
        navigation.navigate('Profile')
    }

  return (
    <View style={{marginTop:100, margin:10}}>
      <Text style={{fontWeight:'bold', fontSize:25}}>Do you want to be a Mentor on Inspire?</Text>

      <View style={{marginTop:100,flexDirection:'row', justifyContent:'space-between'}}>
      <TouchableOpacity 
        onPress={() => handleItemPress('yes')}
        style={[
        styles.itemContainer,
        {backgroundColor: mentor== 1 ? '#F26C0C' : 'transparent'}

        ]} 
      >
        <Text style={{textAlign:'center', color:mentor== 0 ?'#F26C0C':'white'}}> Yes</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => handleItemPress('no')}
        style={[
        styles.itemContainer,
        {backgroundColor: mentor== 0 ? '#F26C0C' : 'transparent'}
    ]} 
        >
        <Text style={{textAlign:'center', color:mentor== 1 ?'#F26C0C':'white'}}> No</Text>
      </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{borderRadius:5, padding:10, backgroundColor:'#3EACFA', width:70, alignSelf:'flex-end', marginTop:380}}
        onPress={saveMentor}
      >
        <Text style={{color:'white', textAlign:'center'}}>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    // textField: {
    //     textAlign:'center', color:mentor== 0 ?'#F26C0C':'white'
    // },
    itemContainer: {
        borderWidth:1.5, borderRadius:8, borderColor:'#F26C0C', padding:10, width:'45%'
    },
  });

export default BeMentor