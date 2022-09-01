import React from "react";
import {View, Text, StyleSheet, Pressable, Settings, Image} from "react-native";

const SettingScreen = ({ navigation }) => {
    return(
        <View>
            <View
            style={styles.profileImageContainer}>
                <Image
                style={styles.profileImage}
                source={{
                    uri: 'https://media-exp1.licdn.com/dms/image/C4D03AQEsDc7rce1Nyw/profile-displayphoto-shrink_800_800/0/1646951278339?e=1667433600&v=beta&t=GiUDfKdrldRKkz69lIoHrTGjN5HA7ngtpfKQJFw2U4U'
                }}/>
            </View>
            <View 
            style={styles.profileInfoContainer}>
                <Text
                style={styles.profileName}>Dağkan Özyenilmez</Text>
                <Text
                style={styles.profileBio}>Trying to learn new things...</Text>
            </View>
            <View
            style={styles.buttonContainer}>
                <Pressable
                style={styles.button}>
                    <Text
                    style={styles.buttonText}>
                        Change Theme
                    </Text>
                </Pressable>
            </View>
            <View
            style={styles.buttonContainer}>
                <Pressable
                style={styles.button}>
                    <Text
                    style={styles.buttonText}>
                        Edit Profile
                    </Text>
                </Pressable>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    profileImageContainer:{
        alignItems: 'center',
    },
    profileImage:{
        width: 120,
        height: 120,
        marginBottom: 20,
        marginTop: 50,
        borderRadius:60,
    },
    profileInfoContainer:{
        alignItems:'center',
        marginLeft:40,
        marginRight:40,
    },
    profileName:{
        fontWeight:'700',
        fontSize: 22,
        marginBottom:5,
    },
    profileBio:{
        fontSize:16,
        color: '#A5A5A5',
        alignContent: 'center',
        marginBottom:30,
    },
    buttonContainer:{
        alignItems: 'center',
        marginBottom: 10,
    },
    button:{
        width: 300,
        height: 40,
        borderRadius:16,
        backgroundColor: '#25A3E1',
        alignItems: 'center',
    },
    buttonText:{
        color: 'white',
        fontWeight: '700',
        fontSize: 18,
        marginTop: 8,
    }
})

export default SettingScreen;


