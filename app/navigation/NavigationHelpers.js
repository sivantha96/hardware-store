/*
 * actions related with navigation
 * every navigation action should be defined here
 * avoid using this.props.navigation inside the code
 */
import { HOME_STACK_SCREENS, MAIN_STACK_SCREENS, MENU_STACK_SCREENS } from './constants';
import NavigationServices from './NavigationServices';

export function pushFullSheet(params) {
    NavigationServices.push(MAIN_STACK_SCREENS.FULLSHEET, params);
}

export function pushBottomSheet(params) {
    NavigationServices.push(MAIN_STACK_SCREENS.BOTTOMSHEET, params);
}

export function navigateToTabs(params) {
    NavigationServices.navigate(MAIN_STACK_SCREENS.TABS, params);
}

export function navigateToHome(params) {
    NavigationServices.navigate(HOME_STACK_SCREENS.HOME, params);
}

export function navigateToProfile(params) {
    NavigationServices.navigate(MENU_STACK_SCREENS.PROFILE, params);
}
