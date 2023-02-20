import React from 'react';
import { ScrollBack, LightMode, Arrow } from "../assets/icons/Icons";

import { StyleSheet, Text, Image, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';

const SignPass = ({navigation}) => {
  return (
    <ScrollView style={styles.screenContainer} >

    <View style={styles.arrowBackWrapper}>
        <Arrow />
    </View>
    <View style={styles.screenTitleWrapper}>
        <Text style={styles.screenTitle}>Sign Up</Text>
    </View>
    <View style={styles.SignupImageWrapper}>
        <Image style={styles.SignupImage} resizeMode='contain' source={require('../assets/images/signpass.png')} />
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
        >Enter Verification Code</Text>
        <View style= {{
            marginVertical: 14,

        }}>

        <Text
              style={{
                fontSize: 18,
                fontWeight: '500',
                color: '#000',
                lineHeight: 21.6,
                }}
        >We have sent SMS to:</Text>
        <Text
              style={{
                fontSize: 18,
                fontWeight: '500',
                color: '#000',
                lineHeight: 21.6,
               
                }}
        > 081 XXX XXXX XXX</Text>
        </View>
    </View>
    <View style={styles.formWrapper}>
        <TextInput style={{
            minWidth: '100%',
            backgroundColor: '#F3F3F3',
            borderRadius: 5,
            paddingHorizontal: 20,
            paddingVertical: 14,
            fontSize: 16,
}} placeholder='PassCode' />
       
    </View>
   
    <View style={styles.buttonWrapper}>
    <TouchableOpacity style={styles.btnPrimaryWrapper} onPress={() =>
                    navigation.navigate('Login', { name: 'login' })
                }>
        <Text style={styles.button}>Sign Up</Text>
        </TouchableOpacity>
    </View>
  </ScrollView>
  )
}

export default SignPass



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
        marginBottom: 100,
        // marginBottom: 10,
        marginTop: 40,
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
