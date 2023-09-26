import { View, Text } from 'react-native'
import React from 'react'
import Header from '../Component/Home/Header'
import GoogleMapView from '../Component/Home/GoogleMapView'
import CategoryList from '../Component/Home/CategoryList'

export default function Home() {
  return (
    <View style={{ padding:10 }}>
      <Header/>
      <GoogleMapView/>
      <CategoryList/>
    </View>
  )
}