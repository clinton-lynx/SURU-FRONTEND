import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { Arrow } from "../assets/icons/Icons";

const Cart = () => {
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
      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require("../assets/images/yam.png")}
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
