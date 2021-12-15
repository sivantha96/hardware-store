import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import NavigationHeader from '../../../navigation/NavigationHeader';

export class ProfileContainer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <NavigationHeader title={'Profile'} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
