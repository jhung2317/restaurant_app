import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import CategoryItem from './CategoryItem'

export default function CategoryList() {
  const categoryList=[
    {
      id:1,
      name:'酒樓',
      value:'gas_station',
      icon:require('./../../../assets/dim-sum.png')
    },
    {
      id:2,
      name:'Restaurants',
      value:'restaurant',
      icon:require('./../../../assets/food.png')
    },
    {
      id:3,
      name:'Cafe',
      value:'cafe',
      icon:require('./../../../assets/cafe.png')
    },
    {
      id:3,
      name:'Cafe',
      value:'cafe',
      icon:require('./../../../assets/cafe.png')
    },
  ]
  
  return (
    <View>
      <Text style={{
        fontSize:20,
        fontWeight: "600"
      }}>Select Top Category</Text>

      <FlatList 
        data={categoryList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{marginTop:5}}

        renderItem={({item}) => (
          <TouchableOpacity onPress={()=>console.log(item.name)}>
            <CategoryItem category={item} />
          </TouchableOpacity>
        )}
      />

    </View>
  )
}