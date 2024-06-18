import { View,Text,StyleSheet } from "react-native";

const Item = ({title,author,description,publishedAt}) => {
    return (
    <View style={styles.itemCtr}>
      <Text style={styles.title}>{title}</Text>
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
    description:{

    },
    title:{fontSize:14,fontWeight:'bold'},
    description:{fontSize:13},
    author:{fontSize:10,fontStyle:'italic'},
    date:{fontSize:10,fontStyle:'italic'}
  });
  