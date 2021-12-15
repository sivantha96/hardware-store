import React, { Component } from 'react';
import { Text as RNText } from 'react-native';
import ConnectStyle from './ConnectStyle';
import PropTypes from 'prop-types';

class StyledText extends Component {
    render() {
        return <RNText allowFontScaling={false} {...this.props} />;
    }
}

StyledText.propTypes = {
    ...RNText.propTypes,
    weight: PropTypes.oneOf([
        'ultra-light',
        'thin',
        'light',
        'regular',
        'medium',
        'semi-bold',
        'bold',
        'black',
        'heavy',
    ]),
    align: PropTypes.oneOf(['left', 'right', 'center']),
};

const XLDisplay = ConnectStyle('XLDisplay')(StyledText);
const TopHeading = ConnectStyle('TopHeading')(StyledText);
const Display = ConnectStyle('Display')(StyledText);
const Heading = ConnectStyle('Heading')(StyledText);
const SubHeading = ConnectStyle('SubHeading')(StyledText);
const Title = ConnectStyle('Title')(StyledText);
const Subtitle = ConnectStyle('Subtitle')(StyledText);
const Caption = ConnectStyle('Caption')(StyledText);
const Text = ConnectStyle('Text')(StyledText);
const SecondaryText = ConnectStyle('SecondaryText')(StyledText);

export {
    XLDisplay,
    TopHeading,
    Display,
    Heading,
    SubHeading,
    Title,
    Subtitle,
    Caption,
    Text,
    SecondaryText,
};
