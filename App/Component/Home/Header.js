import { View, TextInput, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View>
      <Image source={require('./../../../assets/logo3.png')}
        style = {styles.logo}/>

      <View>
        <TextInput placeholder='Search' style = {styles.searchBar}>

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
    borderWidth:1,
    borderColor: '#000',
    padding:4,
    borderRadius:50,
    paddingLeft:10,
    width:Dimensions.get('screen').width*0.53,
  },
  userImage:{

  }
})