import React from "react";
import {View, Text, StyleSheet, Pressable} from "react-native";

const ChangeThemeScreen = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <Text>
                Change Theme Screen
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 50,
    }
})

export default ChangeThemeScreen;