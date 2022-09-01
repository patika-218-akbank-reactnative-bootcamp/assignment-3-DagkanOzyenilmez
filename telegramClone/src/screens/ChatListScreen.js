import React from "react";
import {View, Text, StyleSheet, Pressable} from "react-native";



const ChatListScreen = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <Pressable
            onPress={() => navigation.navigate('ChatDetail') }>
                <Text>
                    Go to chat !!
                </Text>
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 50,
    }
})

export default ChatListScreen;