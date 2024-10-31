
import { StyleSheet, Text, View } from 'react-native';

export default function Ders01() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>
       mobil uygulama geliştirme
      </Text>
    

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#0e0e0e",
    alignItems: 'center',
    justifyContent: "center",
  },
  Text:{
    color:"white",
    fontSize:30,
    fontWeight:"bold",
    textTransform:"uppercase"

  }
});
