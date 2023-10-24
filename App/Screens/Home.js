import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Header from '../Component/Home/Header'
import GoogleMapView from '../Component/Home/GoogleMapView'
import CategoryList from '../Component/Home/CategoryList'
import GlobalApi from '../Services/GlobalApi'

export default function Home() {
  useEffect(()=>{
    GetNearBySearchPlace();
  },[])
  
  const GetNearBySearchPlace=()=>{
    GlobalApi.nearByPlace().then(res=>{
      console.log(res.data);
      
    })
  }
  return (
    <View style={{ padding:10,flex:1 }}>
      <Header/>
      <GoogleMapView/>

      <CategoryList/>
    </View>
  )
}