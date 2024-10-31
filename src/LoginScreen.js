import { View, Text, SafeAreaView,StyleSheet,TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import Constants from "expo-constants"

 export default function LoginScreen() {
  return (
   <SafeAreaView style={styles.SafeContainer}>
     <View style={styles.Container}>
        <View style={styles.UpContainer}>
            <Text style={styles.hiText}> Merhaba ! </Text>
            <Text style={styles.userText}> ahmet</Text>
        </View>
        <View style={styles.Form}>
          <TextInput style={styles.TextInput}
          keyboardType="numeric"
          secureTextEntry={true}
          placeholder='Şifrenizi Giriniz'
          placeholderTextColor="white"
          autoFocus={true}
          />
      

          <TouchableOpacity style={styles.Button}>
            <Text style={styles.TextButton}> Giriş</Text>
          </TouchableOpacity>
          <View style={styles.Action}>
            <TouchableOpacity>
                <Text style={styles.Natification}>
                    Parolamı unuttum
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.Natification}>
                   Yeni kayıt
                </Text>
            </TouchableOpacity>
          </View>
          
        
        </View>
     </View>
   </SafeAreaView>
  )
}
const TEXT = {
    color:'#fff',
    textAlign:"center"
}

const styles = StyleSheet.create({
    SafeContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        paddingTop: Constants.statusBarHeight,
        backgroundColor:"#F34"
        
    },
    Container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        marginTop:50,

    },
    UpContainer:{
        marginTop:100
    },
    hiText:{
        ...TEXT,
        fontSize:40,
        lineHeight:50,
        fontWeight:"bold"

    },
    userText:{
        ...TEXT,
        fontSize:20,
        lineHeight:50,
        fontWeight:"bold",
        textAlign:"center"
    },
    Form:{
        flex:1,
        
       
    },
    TextInput:{
        height: 40,
    margin: 30,
    width:300,
    borderWidth: 1,
    padding: 10,
    borderRadius:10,
    borderColor:"white"
    },
    Button:{
        margin:30,
        borderWidth:1,
        textAlign:"center",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        borderColor:"white",
        backgroundColor:"white",
        padding:10

    },
    Action:{
      flex:1,
      flexDirection:"row",
      justifyContent:"space-around"
    },
    TextButton:{

    },
    Natification:{
     fontSize:15,
     marginTop:10,
    }

})