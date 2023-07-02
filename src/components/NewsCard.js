import { View, Text, Image, Touchable } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';



const NewsCard = ({item}) => {
    // const navigation = useNavigation()
    // const {navigate} = navigation
    const id = item._id;
    const navigation = useNavigation();

    // console.log(item._id)
  return (
    <TouchableOpacity onPress={() => navigation.navigate('NewsDetails', {id: id} )}>
        <View style= {{display:'flex', flexDirection: 'row', padding: 5, borderWidth: 1, borderColor:'gray', borderRadius:10, margin: 5}}>
            <View style={{padding:2, alignItems: 'center', justifyContent: 'center', width: 120}}>
                <Image source={{uri : item.url}} style = {{height: 110, width: 120, borderRadius: 5}}  />
            </View>
            <View style = {{width: 230, marginLeft: 10}}>
                <Text style ={{color:'white', fontWeight:'bold'}}>{item.title.substring(0, 80)}</Text>
                <Text style={{color:'gray', marginTop:5}}>{item.content.substring(0,80) + ' read more...'}</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default NewsCard