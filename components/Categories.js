import React from 'react';
import { View,Text, StyleSheet, ScrollView } from 'react-native';
import Category from './Category';


const Categories = props => {
  return (
    <View>

     <View style={styles.sectionTitleWrapper}>

    <View style={styles.sectionTitle}>
        <Text style={styles.sectionTitleLeft}>
            Categories
        </Text>
        <Text style={styles.sectionTitleRight}>see all</Text>
    </View>
    </View> 
    {/* <ScrollView> */}
      
    <View style={styles.categoryWrapper}>
      <Category/>
     <Category />
      <Category/>
    </View>
    {/* </ScrollView> */}
    </View>
  )
}

export default Categories;

const styles = StyleSheet.create({
  sectionTitleWrapper: {
    marginTop: 15,
    marginBottom: 10,
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
   paddingHorizontal: 20,
   flexWrap: 'wrap',
   justifyContent: 'space-between',
  //  overflow: 'scroll', 
  }

})