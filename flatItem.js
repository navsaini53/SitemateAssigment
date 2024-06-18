import { View,Text,StyleSheet,Image } from "react-native";


import {primaryColor} from './const'
const Item = ({title,author,description,publishedAt,urlToImage}) => {
    return (
    <View style={styles.itemCtr}>
        <View style={styles.infoCtr}>
        <Image
        style={styles.tinyLogo}
        source={{
          uri: urlToImage,
        }}
      />
        <Text style={styles.title}>{title}</Text>
        </View>
     
     
      <Text numberOfLines={2} style={styles.description}>{description} </Text>
      <Text style={styles.author}>By : {author} on {publishedAt}</Text>
      
    </View>
    )
  };

  export default Item;


const styles = StyleSheet.create({
    itemCtr:{
        flex:1,
       padding:10,
       borderWidth:1,
       borderColor:'#ebeae8',
       marginVertical:5,
       
    },
    infoCtr:{

        flexDirection:'row',
        marginBottom:5
    },
    
    tinyLogo:{
        resizeMode: 'cover',
        width:30,
        height:30,
        borderWidth:2,
        borderColor:primaryColor
        
    },
    title:{
        fontSize:14,
        justifyContent:'center',
        textAlign:'center',
        alignItems:'center',
        padding:6,
        fontWeight:'bold'},
    description:{fontSize:13},
    author:{fontSize:10,fontStyle:'italic'},
    date:{fontSize:10,fontStyle:'italic'}
  });
  