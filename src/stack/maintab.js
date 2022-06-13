import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CutomTabBar from '../components/CutomTabBar'
import Home from '../pages/home'
import Profile from '../pages/profile'
import Jobinformation from '../pages/jobinformation'
const Tab = createBottomTabNavigator()

export default function MainTab() {
    return (
        <>
            <Tab.Navigator screenOptions={{
                headerShown: false
            }} tabBar={props => <CutomTabBar {...props} />}>

                <Tab.Screen name='Home' component={Home}></Tab.Screen>
                <Tab.Screen name='Profile' component={Profile}></Tab.Screen>
                <Tab.Screen name='Jobinformation' component={Jobinformation}></Tab.Screen>
    
            </Tab.Navigator>
        </>
    )
}