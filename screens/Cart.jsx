import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Arrow } from "../assets/icons/Icons";

const Cart = () => {
  return (
    <ScrollView>
      <View style={styles.arrowBackWrapper}>
        <Arrow />
      </View>
      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require("../assets/images/orange.png")}
        />
      </View>
      <View>
        <Text>banana</Text>
      </View>
      <View>
        <Text>N600</Text>
      </View>
      <View>
       <Text>delivery and ratings</Text>
      </View>
    </ScrollView>
  );
};

export default Cart;

const styles = StyleSheet.create({});
