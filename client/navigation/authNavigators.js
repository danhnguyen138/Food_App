/*
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInWelcomeScreen from '../screens/authScreens/SignInWelcomeScreen';
import SignInScreen from '../screens/authScreens/SignInScreen';

const Stack = createNativeStackNavigator();

export default function AuthStack(){
    return (
        <Stack.Navigator initialRouteName="SignInWelcome">
            <Stack.Screen 
                name="SignInWelcome"
                component={SignInWelcomeScreen}
                options={{
                    headerShown: false
                }}
            />
             <Stack.Screen 
                name="SignIn"
                component={SignInScreen}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
} */
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInWelcomeScreen from '../screens/authScreens/SignInWelcomeScreen';
import SignInScreen from '../screens/authScreens/SignInScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName="SignInWelcome">
            <Stack.Screen
                name="SignInWelcome"
                component={SignInWelcomeScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="SignIn"
                component={SignInScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default AuthStack