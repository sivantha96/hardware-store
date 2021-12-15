import React from 'react';
import { Platform } from 'react-native';
import Styles from './Styles';

export const translateProps = (props, componentDisplayName) => {
    const { weight, align, style } = props;
    let styles = {};
    if (Array.isArray(style)) {
        style.forEach((item) => {
            styles = {
                ...styles,
                ...item,
            };
        });
    } else {
        styles = style;
    }

    const changeStyleOnFly = {
        ...styles,
        textAlign: align || 'left',
        fontFamily: Platform.OS === 'ios' ? setFamilyiOS(weight) : setFamilyAndroid(weight),
    };

    switch (componentDisplayName) {
        case 'XLDisplay':
            return { ...props, style: [Styles.xlDisplay, changeStyleOnFly] };
        case 'TopHeading':
            return { ...props, style: [Styles.topHeading, changeStyleOnFly] };
        case 'Display':
            return { ...props, style: [Styles.display, changeStyleOnFly] };
        case 'Heading':
            return { ...props, style: [Styles.heading, changeStyleOnFly] };
        case 'SubHeading':
            return { ...props, style: [Styles.subHeading, changeStyleOnFly] };
        case 'Title':
            return { ...props, style: [Styles.title, changeStyleOnFly] };
        case 'Subtitle':
            return { ...props, style: [Styles.subtitle, changeStyleOnFly] };
        case 'Caption':
            return { ...props, style: [Styles.caption, changeStyleOnFly] };
        case 'Text':
            return { ...props, style: [Styles.text, changeStyleOnFly] };
        case 'Link':
            return { ...props, style: [Styles.link, changeStyleOnFly] };
        case 'SecondaryText':
            return { ...props, style: [Styles.secondaryText, changeStyleOnFly] };
        default:
            return props;
    }
};

export const setFamilyiOS = (weight) => {
    switch (weight) {
        case 'ultra-light':
            return 'SF Pro Rounded Utralight';
        case 'thin':
            return 'SF Pro Rounded Thin';
        case 'semi-bold':
            return 'SF Pro Rounded Semibold';
        case 'regular':
            return 'SF Pro Rounded Regular';
        case 'medium':
            return 'SF Pro Rounded Medium';
        case 'light':
            return 'SF Pro Rounded Light';
        case 'heavy':
            return 'SF Pro Rounded Heavy';
        case 'bold':
            return 'SF Pro Rounded Bold';
        case 'black':
            return 'SF Pro Rounded Black';
        default:
            return 'SF Pro Rounded Regular';
    }
};

export const setFamilyAndroid = (weight) => {
    switch (weight) {
        case 'ultra-light':
            return 'SF-Pro-Rounded-Utralight';
        case 'thin':
            return 'SF-Pro-Rounded-Thin';
        case 'semi-bold':
            return 'SF-Pro-Rounded-Semibold';
        case 'regular':
            return 'SF-Pro-Rounded-Regular';
        case 'medium':
            return 'SF-Pro-Rounded-Medium';
        case 'light':
            return 'SF-Pro-Rounded-Light';
        case 'heavy':
            return 'SF-Pro-Rounded-Heavy';
        case 'bold':
            return 'SF-Pro-Rounded-Bold';
        case 'black':
            return 'SF-Pro-Rounded-Black';
        default:
            return 'SF-Pro-Rounded-Regular';
    }
};

export default (componentStyleName) => {
    return function wrapWithStyledComponent(WrappedComponent) {
        return function wrappedRender(args) {
            return <WrappedComponent {...translateProps(args, componentStyleName)} />;
        };
    };
};
