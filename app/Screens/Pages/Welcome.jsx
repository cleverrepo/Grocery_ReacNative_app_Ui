import React, { useEffect } from 'react';
import { View,Text, ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'
const App = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 5000);
    return ()=> clearTimeout(timer);
  },[navigation])
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={{ uri: "https://img.freepik.com/premium-photo/set-tropical-fruits-kiwi-blood-orange-coconut-blueberry-lime-green-background-fropical-fruit-food-frame-flatlay-with-copyspace-immunity-concept-fruits-immunity-boosting-pop-art-food_186079-28.jpg?ga=GA1.1.1152868513.1723270778&semt=ais_hybrid" }} 
        blurRadius={4}
        style={styles.image} 
        resizeMode='fill'
      >
        {/* You can add other content here */}
        <View><Text style={{fontSize:30,color:"white",fontWeight:"bold"}}>Eco Eat</Text></View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    alignItems: "center",
    justifyContent:"center",
    flex: 1,
    width: '100%',
    height: '100%',
  
   
  },
});

export default App;
