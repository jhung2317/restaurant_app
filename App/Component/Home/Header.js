import { View, TextInput, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../../../assets/Colors'


export default function Header() {
  return (
    <View style={{display: 'flex', flexDirection: 'row', justifyContent:'space-evenly', gap:10,
    alignItems:'center'}}>
      <Image source={require('./../../../assets/logo3.png')}
        style = {styles.logo}/>

      <View>
        <TextInput placeholder='Search' style={styles.searchBar}>

        </TextInput>
      </View>
      <Image source={require('./../../../assets/placeholder.jpg')} style={styles.userImage}/>
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
    borderRadius: 10
  },
  searchBar: {
    borderWidth: 1,
    borderColor: Colors.BLACK,
    padding: 4,
    borderRadius: 50,
    paddingLeft: 10,
    width: Dimensions.get('screen').width*0.6
  },
  userImage:{
    width: 50,
    height: 50,
    borderRadius: 10
  }
})
