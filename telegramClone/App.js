// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './src/screens/Login/LoginScreenIndex';
import ChatListScreen from './src/screens/ChatListScreen';
import ChatDetailScreen from './src/screens/ChatDetailScreen';
import ContactListScreen from './src/screens/ContactListScreen';
import SettingScreen from './src/screens/SettingScreen';


const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const StackNavigator = () => {
  return(
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false}}/>
      <Stack.Screen name="MainScreen" component={NavigationScreen} options={{ headerShown: false}}/>
      <Stack.Screen name="ChatDetail" component={ChatDetailScreen} options={{headerBackTitleVisible: false}}/>
    </Stack.Navigator>
  )
  
};

const NavigationScreen = () => {
  return(
    <Tabs.Navigator>
      <Tabs.Screen name="Contacts" component={ContactListScreen}/>
      <Tabs.Screen name="ChatList" component={ChatListScreen}/>
      <Tabs.Screen name="Settings" component={SettingScreen}/>
    </Tabs.Navigator>
  )
}


function App() {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
}

export default App;