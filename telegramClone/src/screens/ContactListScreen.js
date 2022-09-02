import React, { useContext } from "react";
import {View, Text, StyleSheet, Pressable, ScrollView} from "react-native";
import ContactItem from "../components/ContactItem";
import { UserContext } from "../components/context/user";

const ContactListScreen = ({ navigation }) => {
    const {user, setUser} = useContext(UserContext);
    return(
        <ScrollView>
            <ContactItem
            userName={user.user1.name}
            imageUrl={user.user1.imageUrl}/>
            <ContactItem
            userName={user.user2.name}
            imageUrl={user.user2.imageUrl}/>
            <ContactItem
            userName={user.user3.name}
            imageUrl={user.user3.imageUrl}/>
            <ContactItem
            userName={user.user4.name}
            imageUrl={user.user4.imageUrl}/>
            <ContactItem
            userName={user.user5.name}
            imageUrl={user.user5.imageUrl}/>
            <ContactItem
            userName={user.user6.name}
            imageUrl={user.user6.imageUrl}/>
            <ContactItem
            userName={user.user7.name}
            imageUrl={user.user7.imageUrl}/>
            <ContactItem
            userName={user.user8.name}
            imageUrl={user.user8.imageUrl}/>
            <ContactItem
            userName={user.user9.name}
            imageUrl={user.user9.imageUrl}/>
            <ContactItem
            userName={user.user10.name}
            imageUrl={user.user10.imageUrl}/>
            <ContactItem
            userName={user.user11.name}
            imageUrl={user.user11.imageUrl}/>
            <ContactItem
            userName={user.user12.name}
            imageUrl={user.user12.imageUrl}/>
            
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 50,
    }
})

export default ContactListScreen;