import React from "react";
import {View, Text, StyleSheet, Pressable} from "react-native";

const ChangeThemeScreen = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <Pressable style={styles.lightContainer}>
                <Text style={styles.lightThemeText}>Light Theme</Text>
            </Pressable>
            <Pressable style={styles.darkContainer}>
                <Text style={styles.darkThemeText}>Dark Theme</Text>
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'space-evenly'
    },
    lightContainer:{
        width: 160,
        height: 160,
        borderRadius: 20,
        backgroundColor: '#E4E4E4',
    },
    darkContainer:{
        width: 160,
        height: 160,
        borderRadius: 20,
        backgroundColor: '#414141',
    },
    lightThemeText:{
        fontSize: 32,
        fontWeight: '600',
        marginTop: 40,
        marginLeft: 20,
        color: '#414141'
    },
    darkThemeText:{
        fontSize: 32,
        fontWeight: '600',
        marginTop: 40,
        marginLeft: 20,
        color: '#E4E4E4',
    },
})

export default ChangeThemeScreen;