import {
    TransitionSpecs,
    CardStyleInterpolators,
    TransitionPresets,
} from '@react-navigation/stack';

export const MAIN_STACK_SCREENS = {
    ROUTER: 'Router',
    FULLSHEET: 'FullSheet',
    BOTTOMSHEET: 'BottomSheet',
    TABS: 'Tabs',
};

export const TAB_SCREENS = {
    HOME: 'HomeTab',
    MENU: 'MenuTab',
};

export const HOME_STACK_SCREENS = {
    HOME: 'Home',
};

export const MENU_STACK_SCREENS = {
    MENU: 'Menu',
    PROFILE: 'Profile',
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
