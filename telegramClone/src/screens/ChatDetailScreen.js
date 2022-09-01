import React from "react";
import {View, Text, StyleSheet, Pressable} from "react-native";

const ChatDetailScreen = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <Text>
                Chat detail page
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

export default ChatDetailScreen;