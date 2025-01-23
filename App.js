import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, Pressable, TouchableOpacity } from 'react-native';
// import Scroll_View from './components/Scroll_View';
import Flat_List from './components/Flat_List';
// import Bai3_Lab1 from './components/Bai3_Lab1';
// import Bai1_Lab2 from './components/Bai1_lab2';
// import Bai2_Lab2 from './components/Bai2_lab2';
// import Bai3_Lab2 from './components/Bai3_lab2';
//import Bai1_Lab3 from './components/Bai1_Lab3';
//import Bai2_Lab3 from './components/Bai2_Lab3';
//import Bai3_Lab3 from './components/Bai3_Lab3';
import Bai1_Lab4 from './components/Bai1_Lab4';
import Bai2_Lab4 from './components/Bai2_Lab4';
import Bai3_Lab4 from './components/Bai3_Lab4';
export default function App() {
  //const [name, setName] = useState(''); // Khai bao bien de luu tru
  //name: gia tri hien tai cua bien
  //setName: ham cap nhat gia tri
  //'Gia tri ban dau': gia tri khoi tao ban dau
  // const functionPress = () => {
  //   console.log('Hello');
  // }
  // const functionOpa = () => {
  //   console.log('Hello');
  // }


  return (
    <View>
      {/* <Text style={styles.Text}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <TextInput 
      value={name} 
      onChangeText={setName} 
      placeholder='Name: '></TextInput>
      <Text style={styles.Text}>Hello {name}</Text>
      <Image //source={{ uri:'https://th.bing.com/th/id/OIP.s_3JRzNHbvUr8yEbC1Uu1AHaHa?rs=1&pid=ImgDetMain'}}
      source={require('./assets/splash-icon.png')}
      style={{width: 150, height: 150}}
      ></Image>
      <Pressable onPress={functionPress}>
        <Text>Press me</Text>
      </Pressable>
      <TouchableOpacity onPress={functionOpa}>
        <Text>jjjjjj</Text>
      </TouchableOpacity> */}

        
      
      {/* <Bai3_Lab1></Bai3_Lab1> */}
      {/* <Bai1_Lab2></Bai1_Lab2>   */}
      {/* <Bai2_Lab2></Bai2_Lab2> */}
      {/* <Bai3_Lab2></Bai3_Lab2> */}
      {/* <Bai1_Lab3></Bai1_Lab3>  */}
      {/* <Bai2_Lab3></Bai2_Lab3>  */}
      {/* <Bai3_Lab3></Bai3_Lab3> */}
      {/* <Bai1_Lab4></Bai1_Lab4> */}
      {/* <Bai2_Lab4></Bai2_Lab4> */}
      <Bai3_Lab4></Bai3_Lab4>

      {/* <Scroll_View></Scroll_View> */}
      {/* <Flat_List></Flat_List> */}
    </View>
  );
}
