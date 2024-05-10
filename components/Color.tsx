import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'

export default function Color() {
    const isDarkMode = useColorScheme() === 'dark'
  return (
    <View>
      <Text>Color</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    whitebg:{
        
    },
    darkbg:{
        
    }
})