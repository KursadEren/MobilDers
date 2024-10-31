import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [buttons, setButtons] = useState([
    { id: '1', title: 'SafeAreaView', route: 'MySafeAreaView', color: '#FF7F50' },
    { id: '2', title: 'Ders01', route: 'Ders01', color: '#6A5ACD' },
    { id: '3', title: 'LoginScreen', route: 'LoginScreen', color: '#32CD32' },
    { id: '4', title: 'hafta5_3', route: 'hafta5_3', color: '#FF6347' },
  ]);

  const addButton = () => {
    const newId = (buttons.length + 1).toString();
    setButtons([
      ...buttons,
      { id: newId, title: `NewButton${newId}`, route: `Route${newId}`, color: getRandomColor() },
    ]);
  };

  const getRandomColor = () => {
    const colors = ['#FF4500', '#1E90FF', '#FFD700', '#FF69B4', '#8A2BE2'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: item.color }]}
      onPress={() => navigation.navigate(item.route)}
    >
      <Text style={styles.buttonText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={buttons}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  listContent: {
    paddingBottom: 100,
  },
  button: {
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
