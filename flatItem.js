import { View,Text,StyleSheet } from "react-native";

const Item = ({title,author}) => {
    return (
    <View style={styles.itemCtr}>
      <Text style={styles.title}>{title} jsdj</Text>
      <Text style={styles.author}>By : {author}</Text>
      
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
       marginVertical:5
    },
    title:{fontSize:12,fontWeight:'bold'},
    author:{fontSize:10,fontStyle:'italic'}
  });
  