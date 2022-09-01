import React from "react";
import {Image, View, Text, StyleSheet} from "react-native";

const ContactItem = () => {
    return(
        <View style={styles.chatItemContainer}>
            <View style={styles.ImageUserNameText}>
                <Image style={styles.image} source={{
                    uri: 'https://picsum.photos/id/266/200/300'
                }}/>
                <View style={styles.userNameAndText}>
                    <Text style={styles.userName}>John Doe</Text>
                    <Text style={styles.text}>Last seen yesterday at 23:40 </Text>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    chatItemContainer :{
        borderBottomWidth: 0.3,
        borderColor: "#A5A5A5",
    },
    userNameAndText:{
        display: 'flex',
        flexDirection:'column',
        marginLeft: 10,
    },
    userName:{
        fontSize:16,
        fontWeight: '600',
    },
    text:{
        fontSize: 14,
        color:'#A5A5A5'
    },
    ImageUserNameText:{
        display: 'flex',
        flexDirection: 'row',
        margin:10,
    },
    image:{
        width:40,
        height:40,
        borderRadius:20,
    },
    date:{
        fontSize: 14,
        color:'#A5A5A5',
    },

})

export default ContactItem;