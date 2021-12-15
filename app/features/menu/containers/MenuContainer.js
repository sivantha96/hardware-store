import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import * as NavigationHelpers from '../../../navigation/NavigationHelpers';

export class MenuContainer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button
                    title="Go to profile"
                    onPress={() => NavigationHelpers.navigateToProfile()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
});

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
