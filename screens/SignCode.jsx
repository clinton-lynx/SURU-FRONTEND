import React from 'react';
import { ScrollBack, LightMode, Arrow } from "../assets/icons/Icons";

import { StyleSheet, Text, Image, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';

const SignCode = ({navigation}) => {
  return (
    <ScrollView style={styles.screenContainer} >

    <View style={styles.arrowBackWrapper}>
        <Arrow />
    </View>
    <View style={styles.screenTitleWrapper}>
        <Text style={styles.screenTitle}>Sign Up</Text>
    </View>
    <View style={styles.SignupImageWrapper}>
        <Image style={styles.SignupImage} resizeMode='contain' source={require('../assets/images/signup_2.png')} />
    </View>
    <View>
        <Text 
        style={{
            fontSize: 20,
            fontWeight: '700',
            color: '#000',
            lineHeight: 24,
            // paddingHorizontal: 20,
            // marginVertical: 7,
            }}
        >Enter the password</Text>
        <Text
              style={{
                fontSize: 14,
                fontWeight: '400',
                color: 'rgba(0, 0, 0, 0.49)',
                lineHeight: 16.17,
                // paddingHorizontal: 20,
                marginVertical: 7,
                }}
        >It looks like you already have an account in this number. Please enter the password to proceed.</Text>
    </View>
    <View style={styles.formWrapper}>
        <TextInput style={{
            minWidth: 300,
            backgroundColor: '#F3F3F3',
            borderRadius: 5,
            paddingHorizontal: 20,
            paddingVertical: 14,
            fontSize: 16,
        }} placeholder='Password' />
        <TextInput
            style={{
                minWidth: 320,
                backgroundColor: '#F3F3F3',
                borderRadius: 5,
                paddingHorizontal: 20,
                marginVertical: 16,
                paddingVertical: 14,
                fontSize: 16,
            }}
            placeholder='Confirm Password' />
    </View>
       <View style={styles.buttonWrapper}>
    <TouchableOpacity style={styles.btnPrimaryWrapper} onPress={() =>
                    navigation.navigate('SignPass', { name: 'signpass' })
                }>
        <Text style={styles.button}>Next</Text>
        </TouchableOpacity>
    </View>
   
</ScrollView>
  )
}

export default SignCode

const styles = StyleSheet.create({
    screenContainer: {
        backgroundColor: '#Fff',
        flex: 1,
        paddingTop: 50,
        paddingBottom: 50,
        paddingHorizontal: 16,
    },
    arrowBackWrapper: {
        // marginBottom: 10,
    },
    screenTitleWrapper: {
        marginVertical: 18,
        alignSelf: 'center',
    },
    screenTitle: {
        fontSize: 28,
        fontWeight: '600',
        color: '#2A4905',
    },
    SignupImageWrapper: {
        alignSelf: 'center',

    },
    SignupImage: {
        // width: '100%',
        maxWidth: 300,
    },
    formWrapper: {
        alignSelf: 'center',
        marginTop: 10,

    },
    termsWrapper: {
    },
    terms: {
        color: '#7F4E1D',
        // maxWidth:270,
        fontSize: 16,
    }, buttonWrapper: {
        backgroundColor: '#2A4905',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginBottom: 10,
        marginTop: 20,
    },
    button: {
        borderRadius: 30,
        alignSelf: 'center',
        color: '#fff',
        fontSize: 24,
    },
    loginWrapper: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    login: {
        fontSize: 16,
        color: '#7F4E1D',
    },
    loginLink: {
        fontSize: 16,
        color: '#FF5E00',
    }
});
