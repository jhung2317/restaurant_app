import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors from '../../../assets/Colors'

export default function CategoryItem({category}) {

  return (
    <View style={{padding:10, alignItems:'center',borderRadius:15, justifyContent:'center',
    backgroundColor:Colors.WHITE, elevation:1, margin:5, width:100, height:100}}>
      <Image source={category.icon} style={{width:50, height:50}}/>
      <Text style={{fontSize:13}}>{category.name}</Text>
    </View>
  )
}