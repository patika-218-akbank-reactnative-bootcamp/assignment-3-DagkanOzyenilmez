import React from "react";
import {View, Text, StyleSheet, Pressable, Button, Image} from "react-native";
import { UserContext } from "../components/context/user";


const ChatDetailScreen = ({ navigation, userName }) => {
    return(
        <View>
            <View style={styles.headerContainer}>
                <View style={styles.headerComponents}>
                    <Button style={styles.backButton} title={'Back'} onPress={()=>navigation.navigate('Chats')}/>
                    <Image style={styles.profileImage}></Image>
                    <View style={styles.receiverInfoContainer}>
                        <Text style={styles.receiverName}></Text>
                        <Text style={styles.receiverLastSeen}></Text>
                    </View>
                </View>
            </View>
            <View style={styles.messageContainer}></View>
            <View style={styles.bottomContainer}></View>

        </View>
    )
};

const styles = StyleSheet.create({
    headerContainer:{
        marginTop: 40,
        display: 'flex',
        flexDirection: 'row',
    }
})

export default ChatDetailScreen;