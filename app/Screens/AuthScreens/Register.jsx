import { Image, ImageBackground, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native'
const Register = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground  source={{ uri: "https://img.freepik.com/premium-photo/set-tropical-fruits-kiwi-blood-orange-coconut-blueberry-lime-green-background-fropical-fruit-food-frame-flatlay-with-copyspace-immunity-concept-fruits-immunity-boosting-pop-art-food_186079-28.jpg?ga=GA1.1.1152868513.1723270778&semt=ais_hybrid" }} 
    blurRadius={4}
    style={styles.image} 
    resizeMode='fill'>
      <View style={styles.container1}>
        <Text style={{fontSize:30,color:"white", fontWeight:"900"}}>Sign up </Text>
        <Text style={{fontSize:17,color:"white", fontWeight:"900"}}>To get more advantages sign up Your account by filling in the information </Text>
      </View>
      <View style={styles.container2}>
        <View>
        <Text>user Name</Text>
        <TextInput placeholder='text' style={styles.inputs} />
          <Text>Email Address</Text>
          <TextInput placeholder='email' style={styles.inputs} />
          <Text>Password</Text>
          <View style={styles.inputIcons}>
            <TextInput placeholder='password' style={styles.passwordInputs} />
            <Ionicons name='eye' size={30}/>
         </View>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={{fontSize:20,color:"black", fontWeight:"900",color:"white"}}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
        <Text style={{textAlign:"center", color:"black", fontSize:22}}> Already have an account</Text>
        </TouchableOpacity>
        <Text style={{textAlign:"center",color:"black",}}>Other sign in Options</Text>
        <View style={styles.options}>
          <View style={styles.social} ><Image source={{uri:"https://cdn-icons-png.flaticon.com/128/20/20837.png"}} width={38} height={38}/></View>
          <View style={styles.social}><Image source={{uri:"https://cdn-icons-png.flaticon.com/128/281/281764.png"}} width={38} height={38}/></View>
          <View style={styles.social}><Image source={{uri:"https://cdn-icons-png.flaticon.com/128/0/747.png"}} width={38} height={38}/></View>
        </View>
      </View>
   </ImageBackground>
  )
}

export default Register

const styles = StyleSheet.create({
  image: {
  
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    
  },
  container2: {
    justifyContent:"center",
    flex: 3,
    margin:7,
    padding:20,
    backgroundColor: "white",
    borderRadius:15,
  },
  inputs: {
    borderBottomWidth:1,
    width:300,
    height: 50,
    borderColor: 'gray',
   borderWidth:1,
    borderRadius:15,
    marginBottom: 10,
    paddingLeft: 10,
   
    color:"black",
    
  },
  passwordInputs: {
    width:250,
  },
  inputIcons: {
    justifyContent: 'space-between',
    height: 55,
    padding:10,
    borderRadius: 15,
    borderColor: 'gray',
    width:300,
    borderWidth:1,
    width:300,
    alignItems:"center",
    flexDirection: 'row',
  },
  btn: {
    backgroundColor: '#4CAF50',
    borderRadius: 15,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
    width: 300,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  options: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 20,
    marginTop: 10,
    width: 300,
    marginLeft: 10,
  },
  social: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor:"grey",
    width: 50,
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    
    marginBottom: 10,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    shadowColor: '#000',
 
  },
})