import React from 'react';
import { STACK_OPTIONS, MAIN_STACK_SCREENS } from './constants';
import { createStackNavigator } from '@react-navigation/stack';
import Router from '../Router';
import FullSheet from '../components/FullSheet';
import BottomSheet from '../components/BottomSheet';
import NavigationTab from './NavigationTab';

const Stack = createStackNavigator();

const NavigationStack = () => {
    return (
        <Stack.Navigator
            initialRouteName={MAIN_STACK_SCREENS.ROUTER}
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name={MAIN_STACK_SCREENS.ROUTER} component={Router} />
            <Stack.Screen
                name={MAIN_STACK_SCREENS.TABS}
                component={NavigationTab}
                options={STACK_OPTIONS.ROOT_PAGE}
            />

            <Stack.Screen
                name={MAIN_STACK_SCREENS.FULLSHEET}
                component={FullSheet}
                options={STACK_OPTIONS.FULLSHEET}
            />

            <Stack.Screen
                name={MAIN_STACK_SCREENS.BOTTOMSHEET}
                component={BottomSheet}
                options={STACK_OPTIONS.BOTTOMSHEET}
            />
        </Stack.Navigator>
    );
};

export default NavigationStack;
