import React, {useState} from "react";
import {View, Text, Pressable, Image, TextInput, StyleSheet} from "react-native";

const EditProfile = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View
            style={styles.inputContainer}>
                <Text
                style={styles.inputName}>
                    First Name
                </Text>
                <TextInput
                placeholder="Dağkan"
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
                placeholder="Özyenilmez"
                style={styles.inputArea}
                />
                <View
                style={styles.inputBorderLine}></View>
            </View>
            <View
            style={styles.inputContainer}>
                <Text
                style={styles.inputName}>
                    Username
                </Text>
                <TextInput
                placeholder="@dagkanoz"
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
                        Save
                    </Text>
            </Pressable>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        marginTop: 100,
    },
    inputContainer:{
        marginLeft:50,
        marginBottom: 30,
    },
    inputName:{
        fontWeight:'600',
    },
    inputArea:{
        color:'#A5A5A5',
        marginTop:5,
        fontSize:16,
    },
    inputBorderLine:{
        width: 280,
        borderBottomWidth:1,
        borderBottomColor: '#A5A5A5',
        marginTop:5,
    },
    loginButtonContainer:{
        alignItems:'center',
        marginTop:60,
    },
    loginButton:{
        width: 160,
        height: 40,
        borderRadius:32,
        backgroundColor: '#10C500',
        alignItems: 'center',
    },
    loginText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 18,
        alignItems: 'center',
        marginTop: 8,
    }
})

export default EditProfile;