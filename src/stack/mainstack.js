import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Preload from '../pages/preloading'
import Login from '../pages/login';
import Preregister from '../pages/preregister'
import Registercandidate from '../pages/registercandidate'
import Registercompany from '../pages/registercompany'
import MainTab from './maintab';
const Stack = createNativeStackNavigator();

export default function MainStack() {

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Preload" component={Preload} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Preregister" component={Preregister} />
            <Stack.Screen name="Registercandidate" component={Registercandidate} />
            <Stack.Screen name="Registercompany" component={Registercompany} />
            <Stack.Screen name="MainTab" component={MainTab} />

        </Stack.Navigator>
    )
}