import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import Categories from "../components/Categories";
import Deals from "../components/CategoryListing";
import Navigator from "../components/Navigator";
import Partner from "../components/Partner";
import Wrapper from "../components/Wrapper";

const Home = ({ props }) => {
  return (
    //    <Wrapper>

    <ScrollView
      style={{
        backgroundColor: "#Fff",
        flex: 1,
        paddingTop: 40,
        paddingBottom: 50,
        // paddingHorizontal: 16,
      }}
    >
      <View style={styles.headerWrapper}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerLeftLocation}>ikeja</Text>
        </View>
        <View style={styles.headerRight}>
          <Image
            style={styles.logo}
            resizeMode="contain"
            source={require("../assets/images/suru-logo.png")}
          />
        </View>
      </View>
      <View>
        <Image
          style={styles.heroImage}
          resizeMode="contain"
          source={require("../assets/images/eat.jpg")}
        />
      </View>
      <View style={styles.mainWrapper}>
        <Partner />
        <Categories />
        <Deals />
      </View>
      <Navigator />
    </ScrollView>

    //    </Wrapper>
  );
};

export default Home;

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginVertical: 5,
  },
  headerLeftLocation: {
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 21.6,
    color: "#3AA14C",
    textTransform: "capitalize",
  },
  mainWrapper: {
    paddingHorizontal: 24,
  },
});
