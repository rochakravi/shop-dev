import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ScheduleTripScreen from '../screens/ScheduleTripScreen';
import TestScreen from '../screens/TestScreen';
import EditProfile from '../screens/editProfile';



import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

export default function StackNavigator(){

    return(
        <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} />
            <Stack.Screen name="schdleTrip" component={ScheduleTripScreen} />
            <Stack.Screen name="editProfile" component={EditProfile} />


        </Stack.Navigator>
    )
}