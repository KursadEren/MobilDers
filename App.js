import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ders01 from './src/Ders10';
import MySafeAreaView from './src/MySafeAreaView';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/HomeScreen';

import LoginScreen from './src/LoginScreen';
import Hafta5_3 from './src/Hafta5_3';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
    <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Ders01" component={Ders01} />
      <Stack.Screen name="MySafeAreaView" component={MySafeAreaView} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="hafta5_3" component={Hafta5_3} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}