import React from 'react';
import { ScrollBack, LightMode, Arrow } from "../assets/icons/Icons";

import { StyleSheet, Text, Image, View, TextInput } from 'react-native';

const Signup = ({ navigation }) => {
    return (
        <View style={styles.screenContainer} >

            <View style={styles.arrowBackWrapper}>
                <Arrow />
            </View>
            <View style={styles.screenTitleWrapper}>
                <Text style={styles.screenTitle}>Sign Up</Text>
            </View>
            <View style={styles.SignupImageWrapper}>
                <Image style={styles.SignupImage} source={require('../assets/images/sign_up1.jpg')} />
            </View>
            <View style={styles.formWrapper}>
                <TextInput placeholder='Name' />
                <TextInput placeholder='Phone Number' />
            </View>
            <View style={styles.termsWrapper}>
                <Text style={styles.terms}> We need to verify you. We will send you a one time verification code. </Text>
            </View>
            <View style={styles.buttonWrapper}>
                <Text style={styles.button}>Next</Text>
            </View>
            <View style={styles.loginWrapper} >
                <Text style={styles.login} >Already have an account?</Text>
                <Text style={styles.loginWrapper}> Login</Text>
            </View>
        </View>
    )
}

export default Signup;

const styles = StyleSheet.create({
    screenContainer: {
        backgroundColor: '#F5F5F5',
        flex: 1,
        paddingTop: 60,
        paddingHorizontal: 16,
    },
    arrowBackWrapper: {
        // marginBottom: 10,
    },
    screenTitleWrapper: {
        marginVertical: 20,
        alignSelf: 'center',
    },
    screenTitle: {
        fontSize: 28,
        fontWeight: '600',
        color: '#2A4905',
    },
    SignupImageWrapper: {
        alignSelf: 'center',
        width: '80%',
    },
    SignupImage: {
        maxWidth: '100%',
    }



});
