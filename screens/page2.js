import React from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';

export default function Page2({navigation}) {
  const pressHandler1 = () => {
    navigation.navigate('Page3', {virar: true , churchgate : false});
  }
  const pressHandler2 = () => {
    navigation.navigate('Page33' , {virar : false , churchgate : true});
  }
    return (
      <View style={styles.container}>
        <Button title='Virar' color='coral'  onPress={pressHandler1}/>
        <Image style={styles.img} source={require('../assets/p2.png')} />
        <Button title='Churchgate' color='coral' onPress={pressHandler2}/>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent : 'center'
    },
    img:{
      marginBottom : 40,
      marginTop: 40,
      width:90,
      height:250
    }
  });