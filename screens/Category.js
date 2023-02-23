import React from 'react';
import Deals from '../components/CategoryListing';

import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { Arrow } from '../assets/icons/Icons';

const Category = () => {
  return ( 
  <ScrollView
    style={{
      backgroundColor: "#Fff",
      flex: 1,
      paddingTop: 40,
      paddingBottom: 50,
      paddingHorizontal: 16,
    }}
  >
         <View style={styles.arrowBackWrapper}>
        <Arrow />
    </View>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Fruits</Text>
      </View>
      <View style={styles.formWrapper}>
        <TextInput
          style={{
            minWidth: "100%",
            backgroundColor: "#F3F3F3",
            borderRadius: 5,
            paddingHorizontal: 20,
            paddingVertical: 14,
            fontSize: 16,
          }}
          placeholder="Search"
        />
      </View>
  <View style={styles.subNav}>
    <Text style={styles.subNavItem1}>fruits</Text>
    <Text style={styles.subNavItem}>beverages</Text>
    <Text style={styles.subNavItem}>meat</Text>
    <Text style={styles.subNavItem}>fish</Text>
    <Text style={styles.subNavItem}>vegetables</Text>
  </View>
  <View>
  <Deals />
  </View>

    </ScrollView>   
  )
}

export default Category;

const styles = StyleSheet.create({
  header: {
    paddingTop: 10,
    paddingBottom: 15,
    alignSelf: "center",
  },
  headerTitle: {
    fontSize: 24,
    color: "#2A4905",
    fontWeight: "700",
    lineHeight: 28.8,
  },
  formWrapper: {
    marginBottom: 10,
  },
  categoryWrapper: {
    // alignSelf: 'center',
    marginBottom: 10,
    flexDirection: "row",
    // paddingHorizontal: 20,
    width: '100%',
    flexWrap: "wrap",
    justifyContent: "space-between",
    //  overflow: 'scroll',
  },
  subNav: {
    flexDirection: 'row',
    marginVertical: 10,

  },
  subNavItem: {
    marginRight: 15,
    textTransform: 'capitalize',
    padding: 7,
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '500',
    color: '#804F1E',
  },
  subNavItem1 :{
    marginRight: 15,
    textTransform: 'capitalize',
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '500',
    padding: 8,
    borderBottomWidth: 2,
    borderBottomColor: '#FF5E00',
    borderTopLeftRadius: 93,
    borderBottomStartRadius:3306,
    borderTopightRadius: 29,
  }
});

