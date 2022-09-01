import React from "react";
import {View, Text, StyleSheet, Pressable} from "react-native";

const EditProfileScreen = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <Text>
                Edit Profile Screen
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

export default EditProfileScreen;