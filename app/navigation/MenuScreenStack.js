import React from 'react';
import { STACK_OPTIONS, MENU_STACK_SCREENS } from './constants';
import { createStackNavigator } from '@react-navigation/stack';
import MenuContainer from '../features/menu/containers/MenuContainer';
import ProfileContainer from '../features/profile/containers/ProfileContainer';

const Stack = createStackNavigator();

const MenuScreenStack = () => {
    return (
        <Stack.Navigator
            initialRouteName={MENU_STACK_SCREENS.MAIN}
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name={MENU_STACK_SCREENS.MAIN} component={MenuContainer} />
            <Stack.Screen
                name={MENU_STACK_SCREENS.PROFILE}
                component={ProfileContainer}
                options={STACK_OPTIONS.SCREEN}
            />
        </Stack.Navigator>
    );
};

export default MenuScreenStack;
