import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, Image, ScrollView, Animated } from 'react-native';

export default function App() {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
 return (
   <SafeAreaView >
    
     <Animated.View 
     style={[
       styles.header,
       {
         height: scrollY.interpolate({
           inputRange:[10, 120, 145],
           outputRange:[100, 10, 0],
           extrapolate: 'clamp'
         }),
         opacity: scrollY.interpolate({
           inputRange:[1, 80, 170],
           outputRange: [1, 0.5,0],
           extrapolate: 'clamp'
         })
       }
      ]}
     >
     
      <Animated.Image
      source={require('./src/assets/logo.png')}
      style={{
        width: scrollY.interpolate({
          inputRange:[0, 120],
          outputRange:[230, 90],
          extrapolate: 'clamp'
        }),
        height: 50
      }}
      resizeMode="contain"
      /> 
      <Image
      source={require('./src/assets/add.png')}
      style={{width: 30, height: 30}}
      resizeMode="contain"
      />
      <Image
      source={require('./src/assets/like.png')}
      style={{width: 30, height: 30}}
      resizeMode="contain"
      />
      <Image
      source={require('./src/assets/direct_message.png')}
      style={{width: 30, height: 30}}
      resizeMode="contain"
      />
      
     </Animated.View>

     
     
     
     
     
     
     <ScrollView 
     scrollEventThrottle={16}
     onScroll={Animated.event([{
       nativeEvent: {
         contentOffset: { y: scrollY }
       },
     }],
     { useNativeDriver: false })}
     >

      <View style={styles.box}>

      <Image
      source={require('./src/assets/foto1.jpg')}
      style={{width: 450, height: 300}}
      resizeMode="contain"
      />

      </View>

      <View style={
       styles.header2 }>
       <Image
      source={require('./src/assets/like.png')}
      style={{width: 30, height: 30, marginLeft: 10}}
      resizeMode="contain"
      />
      <Image
      source={require('./src/assets/comment.png')}
      style={{width: 30, height: 30, margin: 20}}
      resizeMode="contain"
      />
      <Image
      source={require('./src/assets/send.png')}
      style={{width: 30, height: 30}}
      resizeMode="contain"
      />
     </View>


      <View style={styles.box}>
        
      <Image
      source={require('./src/assets/foto2.jpg')}
      style={{width: 450, height: 300}}
      resizeMode="contain"
      />
      </View>
      <View style={
       styles.header2 }>
       <Image
      source={require('./src/assets/like.png')}
      style={{width: 30, height: 30, marginLeft: 10}}
      resizeMode="contain"
      />
      <Image
      source={require('./src/assets/comment.png')}
      style={{width: 30, height: 30, margin: 20}}
      resizeMode="contain"
      />
      <Image
      source={require('./src/assets/send.png')}
      style={{width: 30, height: 30}}
      resizeMode="contain"
      />
     </View>
      <View style={styles.box}>
        
      <Image
      source={require('./src/assets/foto3.jpg')}
      style={{width: 450, height: 300}}
      resizeMode="contain"
      />
      </View>
      <View style={
       styles.header2 }>
       <Image
      source={require('./src/assets/like.png')}
      style={{width: 30, height: 30, marginLeft: 10}}
      resizeMode="contain"
      />
      <Image
      source={require('./src/assets/comment.png')}
      style={{width: 30, height: 30, margin: 20}}
      resizeMode="contain"
      />
      <Image
      source={require('./src/assets/send.png')}
      style={{width: 30, height: 30}}
      resizeMode="contain"
      />
     </View>


      <View style={styles.box}>
      <Image
      source={require('./src/assets/foto4.jpg')}
      style={{width: 450, height: 300}}
      resizeMode="contain"
      />
      </View>

      <View style={
       styles.header2 }>
       <Image
      source={require('./src/assets/like.png')}
      style={{width: 30, height: 30, marginLeft: 10}}
      resizeMode="contain"
      />
      <Image
      source={require('./src/assets/comment.png')}
      style={{width: 30, height: 30, margin: 20}}
      resizeMode="contain"
      />
      <Image
      source={require('./src/assets/send.png')}
      style={{width: 30, height: 30}}
      resizeMode="contain"
      />
     </View>

      <View style={styles.box}>
      <Image
      source={require('./src/assets/foto5.jpg')}
      style={{width: 450, height: 300}}
      resizeMode="contain"
      />
      </View>


      <View style={
       styles.header2 }>
       <Image
      source={require('./src/assets/like.png')}
      style={{width: 30, height: 30, marginLeft: 10}}
      resizeMode="contain"
      />
      <Image
      source={require('./src/assets/comment.png')}
      style={{width: 30, height: 30, margin: 20}}
      resizeMode="contain"
      />
      <Image
      source={require('./src/assets/send.png')}
      style={{width: 30, height: 30}}
      resizeMode="contain"
      />
     </View>

      <View style={styles.box}>
      <Image
      source={require('./src/assets/foto6.jpg')}
      style={{width: 450, height: 300}}
      resizeMode="contain"
      /></View>

<View style={
       styles.header2 }>
       <Image
      source={require('./src/assets/like.png')}
      style={{width: 30, height: 30, marginLeft: 10}}
      resizeMode="contain"
      />
      <Image
      source={require('./src/assets/comment.png')}
      style={{width: 30, height: 30, margin: 20}}
      resizeMode="contain"
      />
      <Image
      source={require('./src/assets/send.png')}
      style={{width: 30, height: 30}}
      resizeMode="contain"
      />
     </View>

     </ScrollView>

     
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: '#101010',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#FFF'
  },
  header2:{
    backgroundColor: '#909090',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: 10,
    paddingLeft: 10,
    
    borderBottomColor: '#FFF'
  },
 
  box:{
    height: 300,
    backgroundColor: '#DDD',
   
    borderRadius: 0
  }
});