import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { Arrow, Car, Line, Star } from "../assets/icons/Icons";

const Cart = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: "#Fff",
        flex: 1,
        paddingTop: 40,
        paddingBottom: 50,
        paddingHorizontal: 20,
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
      <View style={styles.itemNameWrapper}>
        <Text style={styles.itemName}>banana</Text>
      </View>
      <View style={styles.itemPriceWrapper}>
        <Text style={styles.itemPrice}>N600</Text>
      </View>
      <View style={styles.itemRatingsWrapper}>
        <View style={styles.itemRatingsLeft}>
          <View style={styles.starIcon}>
            <Star />
          </View>
          <View style={styles.itemRatingsRatioWrapper}>
            <Text style={styles.itemRatingsRatio}>4.5</Text>
          </View>
          <View style={styles.itemRatingsTotalWrapper}>
            <Text style={styles.itemRatingsTotal}>7.0 ratings</Text>
          </View>
        </View>
        <View style={styles.itemRatingsMiddle}>
          <View style={styles.dividerIcon}>
            <Line />
          </View>
        </View>
        <View style={styles.itemRatingsRight}>
          <View style={styles.carIcon}>
            <Car />
          </View>
          <View style={styles.itemDeliveryWrapper}>
            <Text style={styles.itemDelivery}>Free delivery</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  imageWrapper: {
    backgroundColor: "#FFD600",
    paddingHorizontal: 26,
    paddingVertical: 8,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 20,
  },
  image: {
    alignSelf: "center",
  },
  itemNameWrapper: {},
  itemName: {
    fontSize: 30,
    fontWeight: "600",
    color: "#000000",
    textTransform: "capitalize",
  },
  itemNameWrapper: {},
  itemName: {
    fontSize: 30,
    fontWeight: "600",
    color: "#000000",
    textTransform: "capitalize",
  },
  itemPriceWrapper: {},
  itemPrice: {
    fontSize: 30,
    fontWeight: "600",
    color: "#F47A0A",
    textTransform: "capitalize",
  },
});
