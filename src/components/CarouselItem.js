import { View, Text, Image, useWindowDimensions, StyleSheet } from 'react-native'
import React from 'react'
import { material } from 'react-native-typography'

const CarouselItem = ({item}) => {

    const {width} = useWindowDimensions();

    return (
        <View style={{flex:1, justifyContent:'center', alignItems: 'center', margin:10, borderWidth: 1, borderColor:'gray', borderRadius: 10, padding: 4}}>
            <View style= {{}}>
                <Image source={{uri : item.url}} style = {{height: 300, width: 350, borderRadius: 10}}  />
            </View>

            <View style={{width :350, padding:10, margin: 5, height: 150, justifyContent:'center', alignItems:'center'}}>
                <Text style={{color: 'white', fontSize: 20, fontWeight:'bold'}}>{item.title}</Text>
            </View>
        </View>
    )
}




export default CarouselItem