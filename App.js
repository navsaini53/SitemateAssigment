import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, FlatList, TextInput, Text, View, TouchableOpacity } from 'react-native';

import { sendOtpAction } from './request';
import FlatItem from "./flatItem";



export default function App() {

  const [searchTxt, setSearchText] = useState(null);
  const [results, setResults] = useState([]);
  const [totalRecords, setTotal] = useState(0);


  const searchList = () => {
    sendOtpAction({searchTxt}).then(({ articles, totalResults, status }) => {
      if (status == 'ok') {
        setResults(articles)
        setTotal(totalResults)
      }

    })
  }
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
      <View style={styles.inputCtrl}>
        <View style={{ flex: 1 }}>
          <TextInput style={styles.input}
          value={searchTxt}
          onChangeText={(e)=>{
            setSearchText(e);
          }}
          ></TextInput></View>
        <View><TouchableOpacity onPress={() => searchList()} style={styles.btn}>
          <Text style={styles.btntxt}>Search Now</Text>
        </TouchableOpacity></View>

      </View>


      <View style={styles.flatListCtr}>
        <Text>Total Results: {totalRecords}</Text>

        <FlatList
          data={results}
          renderItem={({ item }) => <FlatItem author={item.author} title={item.author} />}
          keyExtractor={item => item.url}
        />
      </View>





    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 100,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  flatListCtr: {
    padding: 10,
    flex: 1,
  },
  inputCtrl: {

    flexDirection: 'row',
    padding: 10
  },
  input: {
    borderWidth: 1,
    height: 40,
    marginRight: 5,
    paddingHorizontal:10
  },
  btn: {
    padding: 12,
    backgroundColor: '#211f4a'
  },
  btntxt: {
    color: 'white'
  }
});
