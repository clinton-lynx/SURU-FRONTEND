import React from 'react';
import { ScrollBack, LightMode, Arrow } from "../assets/icons/Icons";

import { StyleSheet, Text, Image, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';

const Login = ({navigation}) => {
  return (
    <ScrollView style={styles.screenContainer} >

    <View style={styles.arrowBackWrapper}>
        <Arrow />
    </View>
    <View style={styles.screenTitleWrapper}>
        <Text style={styles.screenTitle}>Sign In</Text>
    </View>
    <View style={styles.SignupImageWrapper}>
        <Image style={styles.SignupImage} resizeMode='contain' source={require('../assets/images/signup_1.png')} />
    </View>
    <View>
        <Text 
        style={{
            fontSize: 18,
            fontWeight: '400',
            color: '#000',
            marginTop: 0,
            
            lineHeight: 26,
            // paddingHorizontal: 20,
            // marginVertical: 7,
            }}
        >Enter your phone number and 
        password to access your account</Text>

        </View>
    <View style={styles.formWrapper}>
        <TextInput style={{
            minWidth: 300,
            backgroundColor: '#F3F3F3',
            borderRadius: 5,
            paddingHorizontal: 20,
            paddingVertical: 14,
            fontSize: 16,
        }} placeholder='Phone Number' />
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
            placeholder='Phone Number' />
    </View>
     <View style={styles.buttonWrapper}>
    <TouchableOpacity style={styles.btnPrimaryWrapper} onPress={() =>
                    navigation.navigate('SignUp', { name: 'signup' })
                }>
        <Text style={styles.button}>Sign In</Text>
        </TouchableOpacity>
    </View>
    <View style={styles.loginWrapper} >
        <Text style={styles.login} >Don’t have an account?</Text>
        <Text style={styles.loginLink}> Sign up</Text>
    </View>
</ScrollView>
  )
}

export default Login



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
        marginVertical: 16,
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
     buttonWrapper: {
        backgroundColor: '#2A4905',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginBottom: 10,
        marginTop: 30,
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
