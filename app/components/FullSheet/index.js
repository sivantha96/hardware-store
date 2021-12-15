import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FULLSHEET } from '../../constants/FullSheetConstants';
import GeneralFullSheet from './views/GeneralFullSheet';

export class FullSheet extends Component {
    onPressClose = () => {
        this.props.navigation.goBack();
    };

    render() {
        switch (this.props.route.params.type) {
            case FULLSHEET.GENERAL_DRAGGABLE:
                return <GeneralFullSheet onPressClose={this.onPressClose} />;

            default:
                return <View />;
        }
    }
}

FullSheet.propTypes = {
    route: PropTypes.object,
    navigation: PropTypes.object,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(FullSheet);
