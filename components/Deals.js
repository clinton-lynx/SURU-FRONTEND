import React from 'react';
import { View,Text, StyleSheet } from 'react-native';
import Category from './Category';
import Deal from './Deal';


const Categories = props => {
  return (
    <View>

    <View style={styles.sectionTitleWrapper}>

    <View style={styles.sectionTitle}>
        <Text style={styles.sectionTitleLeft}>
            Popular deals
        </Text>
        <Text style={styles.sectionTitleRight}>see all</Text>
    </View>
    </View>
    <View style={styles.categoryWrapper}>
      {/* <Category/>
      <Category/>
      <Category/>
      <Category/>
      <Category/> */}
      {/* <Deal /> */}
      <Deal />
      <Deal />
      <Deal />
    </View>
    </View>
  )
}

export default Categories;

const styles = StyleSheet.create({
  sectionTitleWrapper: {
    marginVertical: 20,
  },
  sectionTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionTitleLeft : {
    fontSize: 22,
    color: '#6D3805',
    fontWeight: '400',
    lineHeight: 26.4,
    textTransform: 'capitalize',
  },
  sectionTitleRight : {
    fontSize: 22,
    color: '#FF5E00',
    textTransform: 'capitalize',
    fontWeight: '400',
    lineHeight: 26.4
  },
  categoryWrapper: {
    flexDirection: 'row',
    // paddingHorizontal: 20,
    justifyContent: 'space-between',
   //  overflow: 'scroll', 
   }

})