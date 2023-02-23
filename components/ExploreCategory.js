import React from 'react';
import { View,Text, StyleSheet, Image } from 'react-native';

const exploreCategory = () => {
  return (
  
    <View style={styles.foodItem}>
      <View style={styles.foodItemImageWrapper}>
      <Image 
      style={styles.foodItemImage}
      resizeMode='contain'
      source={require('../assets/images/rice.png')}
      />
      </View>
      <View style={styles.foodItemTitleWrapper}>
      <Text style={styles.foodItemTitle}>Food</Text>
      </View>
 
</View>
  )
}

export default exploreCategory;



const styles = StyleSheet.create({
  foodItem: {
    flexDirection: 'column',
    // maxWidth: 150,
    marginVertical: 10,
    width: '50%',

  },
  foodItemImageWrapper: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginVertical: 6,
    borderRadius: 50,
    alignSelf: 'center',
    backgroundColor: '#EDD0FF',
   
  },
  foodItemTitleWrapper: {
    alignSelf: 'center',

  },
  foodItemTitle: {
    fontSize: 20,
    fontWeight: '400',
    color: '#000',

  }
})