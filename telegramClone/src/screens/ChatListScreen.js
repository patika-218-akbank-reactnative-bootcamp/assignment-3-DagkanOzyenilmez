import React from "react";
import {View, Text, StyleSheet, Pressable, ScrollView} from "react-native";
import ChatItem from "../components/ChatItem";



const ChatListScreen = ({ navigation }) => {
    return(
        <ScrollView>
            <Pressable
            onPress={() => navigation.navigate('ChatDetail') }>
                <ChatItem/>
            </Pressable>
            <Pressable
            onPress={() => navigation.navigate('ChatDetail') }>
                <ChatItem/>
            </Pressable>
            <Pressable
            onPress={() => navigation.navigate('ChatDetail') }>
                <ChatItem/>
            </Pressable>
            <Pressable
            onPress={() => navigation.navigate('ChatDetail') }>
                <ChatItem/>
            </Pressable>
            <Pressable
            onPress={() => navigation.navigate('ChatDetail') }>
                <ChatItem/>
            </Pressable>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 50,
    }
})

export default ChatListScreen;