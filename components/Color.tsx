import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, useColorScheme } from 'react-native'
import React, { useState } from 'react'

export default function Color() {
  const isDarkMode = useColorScheme() === 'dark'
  const [generate, setgenerate] = useState('')
  const [generate1, setgenerate1] = useState('')
  const generatecolor = () => {
    const hexcode = '0123456789ABCDEF'
    let color = '#'

    for (let i = 0; i < 6; i++) {
      color += hexcode[Math.floor(Math.random() * 16)]
    }
    generateshapecolor()
    console.log(color)
    setgenerate(color)
  }
  const generateshapecolor = () => {
    const hexcode = '0123456789ABCDEF'
    let shapecolor = '#'

    for (let i = 0; i < 6; i++) {
      shapecolor += hexcode[Math.floor(Math.random() * 16)]
    }
    console.log(shapecolor)
    setgenerate1(shapecolor)
  }
  return (
    <View style={[isDarkMode ? styles.whitebg : styles.darkbg, { backgroundColor: generate }]}>
      <SafeAreaView>
        <ScrollView>
          {/* <Text style={[isDarkMode ? styles.txtwhite : styles.txtdark]}>Color</Text> */}
          <View style={[styles.shape1, { backgroundColor: generate1 }]}></View>
          <View style={[styles.shape2, { borderBottomColor: generate1 }]} />
          <View style={styles.pos}>
            <TouchableOpacity
              onPress={generatecolor} >
              <View style={styles.button}>
                <Text style={[isDarkMode ? styles.txtwhite : styles.txtdark]}>Click Me to color change</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  shape2: {
    width:150,
    height: 100,
    borderLeftWidth: 100,
    borderRightWidth: 100, 
    borderBottomWidth: 100,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    marginHorizontal: 100,
  },
  shape1: {
    //backgroundColor: '#000000',
    height: 150,
    width: 150,
    borderRadius: 130,
    marginVertical: 100,
    marginHorizontal: 130,
    borderWidth: 2,
    borderColor: '#16213e',
  },
  pos: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  button: {
    backgroundColor: '#e5e510',
    height: 80,
    width: 200,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  whitebg: {
    backgroundColor: '#ffffff',
    height: '100%'

  },
  darkbg: {
    backgroundColor: '#000000',
    height: '100%'
  },
  txtwhite: {
    color: '#000000'
  },
  txtdark: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000000',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'

  }
})