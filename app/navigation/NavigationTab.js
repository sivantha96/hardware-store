import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from './components/TabBar';
import { TAB_SCREENS } from './constants';
import HomeScreenStack from './HomeScreenStack';
import MenuScreenStack from './MenuScreenStack';

const TabNavigator = createBottomTabNavigator();

class NavigationTab extends Component {
    render() {
        return (
            <TabNavigator.Navigator
                tabBarPosition="bottom"
                swipeEnabled={false}
                screenOptions={{ headerShown: false }}
                tabBar={(props) => <TabBar {...props} />}>
                <TabNavigator.Screen name={TAB_SCREENS.HOME} component={HomeScreenStack} />
                <TabNavigator.Screen name={TAB_SCREENS.MENU} component={MenuScreenStack} />
            </TabNavigator.Navigator>
        );
    }
}

export default NavigationTab;
