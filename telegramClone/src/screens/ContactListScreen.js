import React from "react";
import {View, Text, StyleSheet, Pressable, ScrollView} from "react-native";
import ContactItem from "../components/ContactItem";

const ContactListScreen = ({ navigation }) => {
    return(
        <ScrollView>
            <ContactItem/>
            <ContactItem/>
            <ContactItem/>
            <ContactItem/>
            <ContactItem/>
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