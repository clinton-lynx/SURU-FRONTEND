import React from 'react';
import { ScrollBack, LightMode, Arrow } from "../assets/icons/Icons";

import { StyleSheet, Text, Image, View, ScrollView, TextInput } from 'react-native';

const Signup = ({ navigation }) => {
    return (
        <ScrollView style={styles.screenContainer} >

            <View style={styles.arrowBackWrapper}>
                <Arrow />
            </View>
            <View style={styles.screenTitleWrapper}>
                <Text style={styles.screenTitle}>Sign Up</Text>
            </View>
            <View style={styles.SignupImageWrapper}>
                <Image style={styles.SignupImage} resizeMode='contain' source={require('../assets/images/signup_1.png')} />
            </View>
            <View style={styles.formWrapper}>
                <TextInput style={{
                    minWidth: 300,
                    backgroundColor: '#F3F3F3',
                    borderRadius: 5,
                    paddingHorizontal: 20,
                    paddingVertical: 14,
                    fontSize: 16,
                }} placeholder='Name Surname' />
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
            <View style={styles.termsWrapper}>
                <Text style={styles.terms}> We need to verify you. We will send you a one time verification code. </Text>
            </View>
            <View style={styles.buttonWrapper}>
                <Text style={styles.button}>Next</Text>
            </View>
            <View style={styles.loginWrapper} >
                <Text style={styles.login} >Already have an account?</Text>
                <Text style={styles.loginLink}> Login</Text>
            </View>
        </ScrollView>
    )
}

export default Signup;

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
