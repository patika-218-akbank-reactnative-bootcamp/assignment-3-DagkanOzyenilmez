import React from "react";
import {View, Text, StyleSheet, Pressable} from "react-native";

const ContactListScreen = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <Text>
                Contact Lists Page
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

export default ContactListScreen;