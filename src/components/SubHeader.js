import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { iOSUIKit } from 'react-native-typography'

const SubHeader = (props) => {
    return (
        <View style = {styles.container}>
          <Text style ={{color:'white', fontWeight: 'bold', fontSize: 20, marginLeft: 20 }}>{props.title}</Text>
        </View>
      )
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        zIndex: 1,
        // alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: 'dark-gray',
        marginTop: 10,
        marginBottom: 5,
        backgroundColor: 'black',  
        borderColor:'gray'
    }
})

export default SubHeader