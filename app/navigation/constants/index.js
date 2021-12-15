import {
    TransitionSpecs,
    CardStyleInterpolators,
    TransitionPresets,
} from '@react-navigation/stack';

export const MAIN_STACK_SCREENS = {
    ROUTER: 'Main_Router',
    FULLSHEET: 'Main_FullSheet',
    BOTTOMSHEET: 'Main_BottomSheet',
    TABS: 'Main_Tabs',
};

export const TAB_SCREENS = {
    HOME: 'Tab_Home',
    MENU: 'Tab_Menu',
};

export const HOME_STACK_SCREENS = {
    MAIN: 'Home_Main',
};

export const MENU_STACK_SCREENS = {
    MAIN: 'Menu_Main',
    PROFILE: 'Menu_Profile',
};

export const STACK_OPTIONS = {
    FULLSHEET: {
        gestureEnabled: true,
        cardOverlayEnabled: true,
        transitionSpec: {
            open: TransitionSpecs.TransitionIOSSpec,
            close: TransitionSpecs.TransitionIOSSpec,
        },
        cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
        ...TransitionPresets.ModalPresentationIOS,
    },
    BOTTOMSHEET: {
        cardOverlayEnabled: true,
        transitionSpec: {
            open: TransitionSpecs.TransitionIOSSpec,
            close: TransitionSpecs.TransitionIOSSpec,
        },
        ...TransitionPresets.BottomSheetAndroid,
        presentation: 'transparentModal',
    },
    SCREEN: {
        gestureEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
    },
    ROOT_PAGE: {
        gestureEnabled: false,
    },
};
