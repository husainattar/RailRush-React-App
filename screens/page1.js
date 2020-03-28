import React from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';


export default function Page1({navigation}) {
  const pressHandler = () =>{
    navigation.navigate('Page2')
  }
    return (
      <View style={styles.container}>
        <Text style={styles.txt}> RUSH CHECKER </Text>
        <Image source={require('../assets/p1.png')} style={styles.img} />
        <Button title='Start' color='coral' onPress={pressHandler}/>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    txt: {
        color: '#fff',
        fontWeight : 'bold',
        fontSize : 30,
        marginTop: 10,
        marginBottom:30 
    },
    img:{
      width:200,
      height:160,
      marginBottom:25
    },
    btn:{
      padding : 8,
      fontSize : 15
    }
  });