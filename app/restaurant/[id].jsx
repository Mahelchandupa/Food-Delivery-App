import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link, Stack } from 'expo-router'
import { useLocalSearchParams } from 'expo-router'
import { urlFor } from '../../sanity'
import { ArrowLeftIcon, ChevronRightIcon, MapPinIcon, QuestionMarkCircleIcon, StarIcon } from 'react-native-heroicons/outline'

const Restaurant = () => {

  const params = useLocalSearchParams()

  const { id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat } = params

  return (
    <ScrollView>
      <Stack.Screen options={{ headerShown: false }}></Stack.Screen>
      <View className=" relative">

        <Image
          source={{
            uri: "https://c4.wallpaperflare.com/wallpaper/1017/647/742/food-pizza-cheese-tomatoes-olives-hd-wallpaper-preview.jpg",
          }}
          className="h-56 w-full bg-gray-300 p-4"
        />
        <TouchableOpacity className=" absolute top-14 left-5 p-2 bg-gray-100 rounded-full">
          <Link href="/">
            <ArrowLeftIcon size={20} color="#00ccbb" />
          </Link>
        </TouchableOpacity>
      </View>

      <View className=" bg-white">
        <View className=" px-4 pt-4">
          <Text className=" text-xl font-bold">{title}</Text>
          <View className=" flex-row space-x-2 my-1">

            <View className=" flex-row items-center space-x-1">
              <StarIcon color="green" opacity={0.5} size={22} />
              <Text className="text-xs text-gray-500">
                <Text className=" text-gray-500">{params.rating}</Text> . {genre}
              </Text>
            </View>

            <View className=" flex-row items-center space-x-1">
              <MapPinIcon color="green" opacity={0.4} size={22} />
              <Text className="text-xs text-gray-500">Nearby . {address}</Text>
            </View>
          </View>

          <Text className=" text-gray-500 mt-2 pb-4">{short_description}</Text>

        <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
          <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
          <Text>Have a food allergy?</Text>
          <ChevronRightIcon color="#00ccdd" />
        </TouchableOpacity>
      </View>
      </View>

      <View>
        <Text>Menu</Text>
      </View>
    </ScrollView>
  )
}

export default Restaurant