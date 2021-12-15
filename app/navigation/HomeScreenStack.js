import React from 'react';
import { HOME_STACK_SCREENS } from './constants';
import { createStackNavigator } from '@react-navigation/stack';
import HomeContainer from '../features/home/containers/HomeContainer';

const Stack = createStackNavigator();

const HomeScreenStack = () => {
    return (
        <Stack.Navigator
            initialRouteName={HOME_STACK_SCREENS.MAIN}
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name={HOME_STACK_SCREENS.MAIN} component={HomeContainer} />
        </Stack.Navigator>
    );
};

export default HomeScreenStack;
