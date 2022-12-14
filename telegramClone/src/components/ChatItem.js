import React from "react";
import {Image, View, Text, StyleSheet} from "react-native";

const ChatItem = ({userName, imageUrl}) => {
    return(
        <View style={styles.chatItemContainer}>
            <View style={styles.ImageUserNameText}>
                <Image style={styles.image} source={{
                    uri: 'https://picsum.photos/id/266/200/300'
                }}/>
                <View style={styles.userNameAndText}>
                    <View style={styles.userNameAndDate}>
                        <Text style={styles.userName}>John Doe</Text>
                        <View style={styles.dateContainer}>
                            <Text style={styles.date}>13.08</Text>
                        </View>
                    </View>
                    <Text style={styles.text}>Lorem ipsum dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet.</Text>
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
        marginRight: 20,
    },
    userName:{
        fontSize:16,
        fontWeight: '600',
    },
    userNameAndDate:{
        display: 'flex',
        flexDirection: 'row',
        marginRight: 20,
    },
    text:{
        fontSize: 14,
        color:'#A5A5A5',
        flex: 1, 
        flexWrap: 'wrap',
        marginRight: 20, 
    },
    ImageUserNameText:{
        display: 'flex',
        flexDirection: 'row',
        margin:10,
        marginRight: 20,
    },
    image:{
        width:60,
        height:60,
        borderRadius:30,
    },
    dateContainer:{
        display: 'flex',
        flex: 1,
        flexDirection: 'row-reverse',
    },
    date:{
        fontSize: 14,
        color:'#A5A5A5',
    },

})

export default ChatItem;