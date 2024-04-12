import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router'
import { Image, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon
} from 'react-native-heroicons/outline'
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import { useState, useEffect } from 'react';
import sanityClient from '../sanity'

export default function App() {

  const [featuredCategory, setFeaturedCategory] = useState([])

  useEffect(() => {
     sanityClient.fetch(
       `*[_type == "featured"] {
         ...,
        restaurant[]->{
         ...,
         dishes[]->
        }
       }`
     ).then((data) => {
      setFeaturedCategory(data)
     })
  },[])

  return (
    <SafeAreaView className=" bg-white pt-10">
      <Stack.Screen options={{ headerShown: false }}></Stack.Screen>

      {/* Header */}
      <View className=" flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            source={{ uri: 'https://c4.wallpaperflare.com/wallpaper/1019/417/97/mcdonalds-burger-and-fries-hd-wallpaper-wallpaper-preview.jpg' }}
            className=" h-7 w-7 bg-gray-300 p-4 rounded-full"
          />

        <View className=" flex-1">
            <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
            <Text className=" font-bold text-xl">Current Location
              <ChevronDownIcon size={20} color="#00ccbb" />
            </Text>
        </View>

        <UserIcon size={35} color="#00ccbb" />
      </View>

      {/* Search*/}
      <View className="flex-row items-center space-x-2 mx-4 pb-2">
        <View className="flex-row items-center flex-1 space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon color="gray" size={20}/>
          <TextInput placeholder='Restaurant and cuisines' keyboardType='default'/>
        </View>

        <AdjustmentsVerticalIcon color="#00ccbb"/>
      </View>  

      {/* Body */}
      <ScrollView 
        className=" bg-gray-100"
        contentContainerStyle={{paddingBottom: 100}}
      >

        {/* Categories */}
        <Categories />

        {/* Featured*/}
        {
          featuredCategory.map((category) => {
            return (
              <FeaturedRow
                key={category._id}
                id={category._id}
                title={category.name}
                description={category.short_description}
              />
            )
          })
        }
        
        {/* Taste Discount*/}
        <FeaturedRow 
          id="2"
          title="Featured"
          description="Paid of placements form our partners"
        />

        {/* Offers near you*/}
        <FeaturedRow 
          id="3"
          title="Featured"
          description="Paid of placements form our partners"
        />
      </ScrollView>

      <StatusBar style="auto" />
    </SafeAreaView>
  )
}
