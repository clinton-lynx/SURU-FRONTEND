import React from 'react';
import { View,Text, StyleSheet, ScrollView } from 'react-native';


const Wrapper = ({props}) => {
  return (
    <ScrollView style={{
        backgroundColor: '#Fff',
        flex: 1,
        paddingTop: 50,
        paddingBottom: 50,
        paddingHorizontal: 16,
    }} >
     {props}
    </ScrollView>
  )
}

export default Wrapper;
