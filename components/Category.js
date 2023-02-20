import React from 'react';
import { View,Text, StyleSheet, Image } from 'react-native';

const Category = () => {
  return (
<View>
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
</View>
  )
}

export default Category



const styles = StyleSheet.create({
  foodItem: {
    flexDirection: 'column',
    maxWidth: 50,
  },
  foodItemImageWrapper: {
    paddingVertical: 3,
    marginVertical: 4,
    borderRadius: 50,
    alignSelf: 'center',
    backgroundColor: '#EDD0FF',
   
  },
  foodItemTitleWrapper: {
    alignSelf: 'center',

  },
  foodItemTitle: {
    fontSize: 15,
    color: '#000',

  }
})