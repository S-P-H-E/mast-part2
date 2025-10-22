import { Text, TextInput, View } from "react-native"
import { Image } from 'expo-image';
import { Link } from "expo-router";
import { IoArrowForwardOutline } from "react-icons/io5";
import { create } from 'zustand'
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState('')

  return (
    <View className="bg-black flex-1 items-center">
      <View className="flex-1 justify-end items-center z-20 bg-transparent px-10 pb-10 w-full max-w-lg">
        <View className="flex flex-col mb-7 items-center">
          <Text className="text-white font-semibold text-4xl">Get Started</Text>
          <Text className="text-[var(--description)] text-lg">Enter your username</Text>
        </View>

        <TextInput onChangeText={setUsername} value={username} placeholderTextColor={"#969696"} placeholder="Enter your username" style={{ backgroundColor: '#262626' }} className="rounded-xl h-fit w-full px-6 py-3 mb-7"/>

        <Link href={"/"} className="bg-white text-black px-6 py-3 rounded-xl flex gap-1 justify-center items-center font-semibold w-full mb-6">
          Continue
          {/* <IoArrowForwardOutline className="translate-y-[0.5px]"/> */}
        </Link>
        <Text style={{ fontSize: 10 }} className="text-[var(--description)]">By continuing you agree to the{' '}<Text className="text-white font-semibold">terms and conditions</Text></Text>
      </View>

      <View className="bg-gradient-to-t from-20% from-black to-transparent flex-1 size-full z-10 absolute"/>

      <Image source={require('../../assets/images/02.jpg')} className="absolute size-full"  style={{ transform: [{ translateY: -200 }] }}/>
    </View>
  )
}