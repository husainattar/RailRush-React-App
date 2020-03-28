import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList,TouchableOpacity} from 'react-native';
//import { } from 'react-native-gesture-handler';

export default function Page3({navigation}) {
  const [station,setStation] = useState([
    { name : 'Borivali' , id : '1'},
    { name : 'Kandivali' , id : '2'},
    { name : 'Malad' , id : '3'},
    { name : 'Goregaon' , id : '4'},
    { name : 'RamMandir' , id : '5'},
    { name : 'Bandra' , id : '6'},
    { name : 'Dahisar' , id : '7'},
    { name : 'Dadar' , id : '8'},
    { name : 'Kurla' , id : '9'},
    { name : 'Churchgate' , id : '10'},
  ]);

  const goToPage4 = (stationName)=>{
    navigation.navigate('Page4',
    {virar: navigation.getParam('virar','') , churchgate: navigation.getParam('churchgate','') ,
     station: stationName});
  }
    return (
      <View style={styles.container}>
        <FlatList 
        keyExtractor= {(item) => item.id}
        data={station}
        renderItem={({item}) => (
         <TouchableOpacity onPress={() => goToPage4(item.name)}>
           <Text style={styles.txt} > {item.name} </Text>
         </TouchableOpacity>
        )}
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      paddingTop: 7,
      paddingHorizontal : 10
    },
    txt:{
      paddingTop: 10,
      paddingBottom:10,
      paddingLeft : 70,
      paddingRight: 70,
      textAlign : "center",
      backgroundColor: '#fff',
      fontSize : 20,
      marginTop : 7,
      borderRadius : 5,
      fontWeight : "bold"
    },
    
  });