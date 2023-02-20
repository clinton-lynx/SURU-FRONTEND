import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Deal = () => {
    return (
        <View>
            <View style={styles.foodItem}>
                <View style={styles.foodItemImageWrapper}>
                    <Image
                        style={styles.foodItemImage}
                        width= {10}
                        resizeMode='contain'
                        source={require('../assets/images/orange.png')}
                    />
                </View>
                <View style={styles.foodItemTitleWrapper}>
                    <Text style={styles.foodItemTitle}>oranges</Text>
                </View>
            </View>
        </View>
    )
}

export default Deal;

const styles =  StyleSheet.create({

    foodItem: {
        paddingVertical: 14,
        paddingHorizontal: 8,
        marginHorizontal: 6,
        borderRadius: 20,
        maxWidth: 190,
                backgroundColor: 'white',
        shadowColor: "black",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 1.22,
        shadowRadius: 35.22,
        elevation: 50,
    },
    foodItemImageWrapper: {

    },
    foodItemImage :{
        width: 120,
    },
    foodItemTitleWrapper: {
    alignSelf: 'center',
        
    },
    foodItemTitle: {
        fontSize: 20,
        fontWeight: '400',
        textTransform: 'capitalize',
        color: '#6D3805'
    }

}) 