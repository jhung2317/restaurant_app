import { View, Text, Dimensions } from 'react-native'
import React, { useContext, useEffect, useState }  from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { UserLocationContext } from "../../Context/UserLocationContext";

export default function GoogleMapView() {
  const [mapRegion, setMapRegion] = useState([]);
  const {location, setLocation} = useContext(UserLocationContext)
  useEffect(() => {
    if(location)
    {

      
        setMapRegion({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.04,
            longitudeDelta: 0.04,
        })
    }
  },[location])
  
  
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 20, 
        marginBottom: 10, fontWeight: "600" }}>
        Nearby Restaurants
      </Text>
      <View style={{ borderRadius:20, overflow:'hidden'}}>
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
    </View>
  )
}