import React, {useState} from "react";
import {View, Text, Pressable, Image, TextInput, StyleSheet} from "react-native";


import styles from "./LoginScreenStyles";

const LoginScreen = ({navigation}) => {
    return(
        <View>
            <View
            style={styles.logoContainer}>
                <Image
                style={styles.logo}
                source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/512px-Telegram_2019_Logo.svg.png'
                }}/>
            </View>
            <View
            style={styles.inputContainer}>
                <Text
                style={styles.inputName}>
                    Area code
                </Text>
                <Text
                style={styles.inputArea}>
                    Pick your area code
                </Text>
                <View
                style={styles.inputBorderLine}></View>
            </View>
            <View
            style={styles.inputContainer}>
                <Text
                style={styles.inputName}>
                    Phone number
                </Text>
                <TextInput
                placeholder="Type your number"
                style={styles.inputArea}
                />
                <View
                style={styles.inputBorderLine}></View>
            </View>
            <View
            style={styles.inputContainer}>
                <Text
                style={styles.inputName}>
                    First Name
                </Text>
                <TextInput
                placeholder="Type your first name"
                style={styles.inputArea}
                />
                <View
                style={styles.inputBorderLine}></View>
            </View>
            <View
            style={styles.inputContainer}>
                <Text
                style={styles.inputName}>
                    Last Name
                </Text>
                <TextInput
                placeholder="Type your last name"
                style={styles.inputArea}
                />
                <View
                style={styles.inputBorderLine}></View>
            </View>
            <View style={styles.loginButtonContainer}>  
                <Pressable
                style={styles.loginButton}
                onPress={() => navigation.navigate('MainScreen')}>
                    <Text
                    style={styles.loginText}>
                        Login
                    </Text>
            </Pressable>
            </View>
        </View>
    )
};

export default LoginScreen;