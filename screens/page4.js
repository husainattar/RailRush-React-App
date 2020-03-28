import React from 'react';
import {StyleSheet, Text, View, FlatList , TouchableOpacity} from 'react-native';

const stations = [{name : 'Borivali' , 
                    trainsAndTime : [ {time: '10:01' , trainId: 1 , start: 'virar' , dest: 'churchgate' } , 
                                      {time: '10:04' , trainId: 2 , start: 'churchgate' , dest: 'virar' } ,
                                      {time: '10:08' , trainId: 3 , start: 'churchgate' , dest: 'virar' } ,
                                      {time: '10:12' , trainId: 4 , start: 'churchgate' , dest: 'virar' } ,
                                      {time: '10:16' , trainId: 5 , start: 'churchgate' , dest: 'virar' } ,
                                      {time: '10:20' , trainId: 6 , start: 'churchgate' , dest: 'virar' } ,

                                    ] , id : '1'} , 
                    {name : 'Virar' , 
                      trainsAndTime : [ {time: '10:03' , trainId: 1 , start: 'virar' , dest: 'churchgate' } , 
                                        {time: '10:05' , trainId: 2 , start: 'churchgate' , dest: 'virar' } ,
                                    ] ,  id : '2' } ,
                    {name : 'Churchgate' , 
                    trainsAndTime : [ {time: '10:30' , trainId: 1 , start: 'virar' , dest: 'churchgate' } , 
                                      {time: '10:50' , trainId: 2 , start: 'churchgate' , dest: 'virar' } ,
                                    ] , id : '3'} ]

// const getIndex = (station_name) => {
//    return stations.findIndex(obj => obj.station_name === station_name);
//      }

                                    
export default function Page4({ navigation }) {
    console.log('-------------------------------'+navigation.getParam('station'));
    const currentStation = navigation.getParam('station');
    const virar = navigation.getParam('virar')
    const churchgate = navigation.getParam('churchgate')
    let trainsArr = []

    const getTrains = (currentStation,dest)=>{
      stations.forEach((station , index)=>{
        if(station.name.valueOf() == currentStation.valueOf())
          station.trainsAndTime.forEach((train,index)=>{
            if(train.dest.valueOf() == dest.valueOf())
              trainsArr.push(train)
          })
      })
    }

    const populateCount = ()=>{
      trainsArr.forEach((train,index)=>{
        train['count'] = getCount(train.trainId)
      })
    }

    const getCount = async (trainId)=>{
      try {
        let count = await fetch('http://railrush-env-1.dcc9sri2y2.us-east-1.elasticbeanstalk.com/crowdCount/'+trainId)
        console.log(""+count)
        return count
      } catch (error) {
        console.log(""+error)
      }
    }

    if(virar){
      getTrains(currentStation,"virar")
      console.log(trainsArr)
      // populateCount()
    }else{
      getTrains(currentStation,"churchgate")
      console.log(trainsArr)
      // populateCount(1)
    }

    
    // console.log(getIndex(currentStation));

    return (
      <View style={styles.container}>
        <FlatList 
          data = { trainsArr }
          keyExtractor = {(item) => item.trainId}
          renderItem = {({item}) => (
            <View>
              <Text style={styles.item}> {item.time} </Text>
              <Text style={styles.item}> {item.start} </Text>
              <Text style={styles.item}> {item.dest} </Text>
            </View>
          )} />
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }); 