import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, FlatList, ActivityIndicator, TextInput, Text, View, TouchableOpacity } from 'react-native';

import { sendOtpAction } from './request';
import FlatItem from "./flatItem";



export default function App() {

  const [searchTxt, setSearchText] = useState(null);
  const [results, setResults] = useState([]);
  const [totalRecords, setTotal] = useState(0);
  const [loader, setLoader] = useState(false);


  const searchList = () => {
    setLoader(true)
    setResults([])
    setTotal(0)
    sendOtpAction({ searchTxt }).then(({ articles, totalResults, status }) => {
      if (status == 'ok') {
        setResults(articles)
        setTotal(totalResults)
      }
      setLoader(false)

    })
  }
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
      <View style={styles.inputCtrl}>
        <View style={{ flex: 1 }}>
          <TextInput style={styles.input}
            value={searchTxt}
            onChangeText={(e) => {
              setSearchText(e);
            }}
          ></TextInput></View>
        <View><TouchableOpacity onPress={() => searchList()} style={styles.btn}>
          <Text style={styles.btntxt}>Search Now</Text>
        </TouchableOpacity></View>

      </View>


      <View style={styles.flatListCtr}>




        {
          loader ? <ActivityIndicator ></ActivityIndicator> : <View>
            <Text>Total Results: {totalRecords}</Text>

            <FlatList
              data={results}
              renderItem={({ item }) => <FlatItem
                author={item.author}
                title={item.author}
                description={item.description}
                publishedAt={item.publishedAt}
              />}
              keyExtractor={item => item.url}
            />
          </View>
        }



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
    paddingHorizontal: 10
  },
  btn: {
    padding: 12,
    backgroundColor: '#211f4a'
  },
  btntxt: {
    color: 'white'
  }
});
