import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Category from "./Category";
import RelatedProduct from "./RelatedProduct";

const RelatedProducts = () => {
  return (
    <>
      <View style={styles.sectionTitleWrapper}>
        <View style={styles.sectionTitle}>
          <Text style={styles.sectionTitleLeft}>Related Products</Text>
        </View>
      </View>
      <View style={styles.listWrapper}>
        <RelatedProduct />
        <RelatedProduct />
        <RelatedProduct />
        <RelatedProduct />
        <RelatedProduct />
      </View>
    </>
  );
};

export default RelatedProducts;

const styles = StyleSheet.create({
    sectionTitleLeft: {
    fontSize: 20,
        fontWeight: '700',
        textTransform: 'capitalize',
    },
    listWrapper: {
        marginBottom: 60,
        flexDirection: 'row',
        // paddingHorizontal: 20,
        // flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
       //  overflow: 'scroll', 
    }
});
