{// hafta 5 ikinci kod
}
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Constants from "expo-constants"

export default function MySafeAreaView() {
  return (
    <SafeAreaView style={styles.Container}>
       <Text style={styles.heading}>
          Sau Cs <Text style={styles.highLights1}> Hello</Text>
        </Text>
        <Text style={styles.heading}>
        Sau Cs <Text style={styles.highLights2}> Hello</Text>
        </Text>
        <Text style={styles.heading}>
        Sau Cs <Text style={styles.highLights3}> Hello</Text>
        </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  Container: {
    paddingTop:Constants.statusBarHeight
  },
  heading:{
    marginTop:50,
    textAlign:"center",
    fontSize:30,
    fontWeight:"bold",
    textTransform:"uppercase",


  },
  highLights1:{
    color:"red"
  },
  highLights2:{
    fontStyle:"italic"
  },
  highLights3:{

  }
})