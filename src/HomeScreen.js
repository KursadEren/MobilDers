import { View, Text, Button } from 'react-native'
import React from 'react'

export default function HomeScreen({navigation}) {
  return (
    <View>
      <Button onPress={()=> navigation.navigate("MySafeAreaView")} title='SafeAreaView'>
        <Text>SafeAreaView</Text>
      </Button>
      <Button  onPress={()=>  navigation.navigate("Ders01")} title='Ders01'>
        <Text>Ders01</Text>
      </Button>
      <Button  onPress={()=>  navigation.navigate("LoginScreen")} title='LoginScreen'>
        <Text>LoginScreen</Text>
      </Button>
      <Button  onPress={()=>  navigation.navigate("hafta5_3")} title='hafta5_3'>
        <Text>hafta5_3</Text>
      </Button>
    </View>
  )
}