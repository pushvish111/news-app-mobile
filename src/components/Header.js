import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { iOSUIKit } from 'react-native-typography'
import Icon from 'react-native-vector-icons/Ionicons';



const Header = (props) => {
  // console.log(props.title)
  return (
    <View style = {styles.container}>
      <Icon name="newspaper-outline" size={40} color={'#4682B4'} />
      <Text style={{color:'white', fontWeight: 'bold', fontSize: 40, marginLeft: 20, marginTop: -5}}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        zIndex: 1,
        // alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'black',
        display:'flex',
        flexDirection: 'row'

    }
})

export default Header