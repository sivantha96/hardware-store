import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, BackHandler } from 'react-native';
import PropTypes from 'prop-types';
import { handleAndroidBackButton } from './helpers/androidBackHandler';
import * as NavigationHelpers from './navigation/NavigationHelpers';
import * as appActions from './store/AppStore/actions';
import NavigationServices from './navigation/NavigationServices';
import { MAIN_STACK_SCREENS } from './navigation/constants';
import { BOTTOMSHEET } from './constants/BottomSheetContants';
import { FULLSHEET } from './constants/FullSheetConstants';

export class Router extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.initialize();
            this.startNavigation();
        }, 1000);
    }

    // initial setup
    initialize = () => {
        handleAndroidBackButton(this.onPressBackHandler);
    };

    // initial navigation logic
    startNavigation = () => {
        NavigationHelpers.navigateToTabs();
    };

    // global android back handler
    onPressBackHandler = () => {
        const currentRoute = NavigationServices.getCurrentRoute();
        switch (currentRoute.name) {
            case MAIN_STACK_SCREENS.FULLSHEET:
                this.fullSheetBackHandler(currentRoute.params?.type);
                break;

            case MAIN_STACK_SCREENS.BOTTOMSHEET:
                this.bottomSheetBackHandler(currentRoute.params?.type);
                break;

            case MAIN_STACK_SCREENS.ROUTER:
            case MAIN_STACK_SCREENS.HOME:
                BackHandler.exitApp();
                break;

            default:
                NavigationServices.goBack();
                break;
        }
    };

    // bottomsheet android back handler
    bottomSheetBackHandler = (bottomSheetType) => {
        switch (bottomSheetType) {
            case BOTTOMSHEET.GENERAL:
                break;

            default:
                NavigationServices.goBack();
                break;
        }
    };

    // fullsheet android back handler
    fullSheetBackHandler = (bottomSheetType) => {
        switch (bottomSheetType) {
            case FULLSHEET.GENERAL:
                break;

            default:
                NavigationServices.goBack();
                break;
        }
    };

    render() {
        return <View />;
    }
}

Router.propTypes = {
    setStatusBarHeight: PropTypes.func,
};

const mapStatesToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    setStatusBarHeight: (payload) => dispatch(appActions.setStatusBarHeight(payload)),
});

export default connect(mapStatesToProps, mapDispatchToProps)(Router);
