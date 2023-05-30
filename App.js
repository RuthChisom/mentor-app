import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import FirstSection from './src/components/FirstSection';
import RegisterInput from './src/components/RegisterInput';

export default function App() {
  return (
    // <View style={styles.container}>
    <View style={{ flex:1}}>
      {/* registration banner */}
      {/* <View style={{backgroundColor:'black', height:'50%'}}> */}
        {/* 42a1f5 */}
        <ImageBackground
          source={require("./src/assets/images/register.jpg")}
          // resizeMode="cover"
          style = {{width:'100%', height:'60%'}}
        >
          <FirstSection title="Register" subtitle="Create your Account"/>
        </ImageBackground>
        
      {/* </View> */}
      {/* registration form */}
      <View style={{ marginTop:-210}}>
        <RegisterInput/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
