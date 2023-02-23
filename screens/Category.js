import React from 'react';
import Deals from '../components/Deals';

import { ScrollView, StyleSheet, View } from 'react-native'

const Category = () => {
  return (
    <ScrollView>
         <View style={styles.arrowBackWrapper}>
        <Arrow />
    </View>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Fruits</Text>
      </View>
  <View>
    <Text>fruits</Text>
    <Text>beverages</Text>
    <Text>meat</Text>
    <Text>fish</Text>
    <Text>vegetables</Text>
  </View>
  <View>
  <Deals />
  </View>

    </ScrollView>   
  )
}

export default Category;


const styles = StyleSheet.create({

})
