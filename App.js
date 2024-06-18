// import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, FlatList, StatusBar, ActivityIndicator, TextInput, Text, View, TouchableOpacity } from 'react-native';

import { fetchResultFromCloud } from './request';
import FlatItem from "./flatItem";

const primaryColor = '#211f4a'

export default function App() {

  const [searchTxt, setSearchText] = useState(null);
  const [results, setResults] = useState([]);
  const [totalRecords, setTotal] = useState(0);
  const [loader, setLoader] = useState(false);

  const searchList = () => {
    
    try{
      setLoader(true)
      setResults([])
      setTotal(0)
      fetchResultFromCloud({ searchTxt }).then(({ articles, totalResults, status }) => {
      
        if (status == 'ok') {
          setResults(articles)
          setTotal(totalResults)
        }
        setLoader(false)
  
      })
    }catch(e){
      setLoader(false)
      setResults([])
      setTotal(0)
      alert("Something went wrong with api call")
    }
   
  }
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={primaryColor}

      />
      <View style={styles.headerCtr}>
        <TextInput style={styles.header}>Sitemate Assigment</TextInput>
      </View>


      <View style={styles.bodyCtr}>
        <View style={styles.inputCtrl}>
          <View style={{ flex: 1 }}>
            <TextInput style={styles.input}
            placeholder='Enter Your Query'
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
                  urlToImage={item.urlToImage}
                />}
                keyExtractor={(item, index) => `${index}`}
              />
            </View>
          }



        </View>

      </View>






    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',


  },
  headerCtr: {

    backgroundColor: primaryColor
  },
  header:{
    padding:20,

    fontSize:20,
    color:'white'
  },

  bodyCtr: {

    padding: 10,
    flex:1

  },
  flatListCtr: {
    flex: 1,
    paddingVertical:10
  },
  inputCtrl: {

    flexDirection: 'row',

  },
  input: {
    borderWidth: 1,
    height: 40,
    marginRight: 5,
    paddingHorizontal: 10
  },
  btn: {
    padding: 12,
    backgroundColor: primaryColor
  },
  btntxt: {
    color: 'white'
  }
});
