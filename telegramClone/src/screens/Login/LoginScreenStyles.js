import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    logoContainer: {
        alignItems: 'center',
    },
    logo:{
        width:100,
        height:100,
        marginBottom:60,
        marginTop:100,
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
        backgroundColor: '#28A8E9',
        alignItems: 'center',
    },
    loginText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 18,
        alignItems: 'center',
        marginTop: 8,
    }
});

export default styles;