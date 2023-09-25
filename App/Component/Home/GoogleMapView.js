import { View, Text, Dimensions } from 'react-native'
import React, { useContext, useEffect, useState }  from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

export default function GoogleMapView() {
  const [mapRegion, setmapRegion] = useState({
    latitude: 37,
    longitude: -122,
    latitudeDelta: 0.0422,
    longitudeDelta: 0.0421,
  });

  return (
    <View style={{marginTop: 20, borderRadius:20, overflow:'hidden'}}>
      <MapView style={{ 
      width: Dimensions.get('screen').width,
      height: Dimensions.get('screen').height*0.23,

    }}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      showsMyLocationButton={true}
      region={mapRegion} >

        </MapView>
    </View>
  )
}