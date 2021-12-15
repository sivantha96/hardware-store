import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { FULLSHEET } from '../../../constants/FullSheetConstants';
import * as NavigationHelpers from '../../../navigation/NavigationHelpers';

export class HomeContainer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button
                    title="Open a bottomsheet"
                    onPress={() => NavigationHelpers.pushBottomSheet()}
                />
                <Button
                    title="Open a fullsheet"
                    onPress={() =>
                        NavigationHelpers.pushFullSheet({ type: FULLSHEET.GENERAL_DRAGGABLE })
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
