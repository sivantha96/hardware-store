import React, { Component } from 'react';
import { View, Button, Pressable, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as NavigationHelpers from '../../navigation/NavigationHelpers';
import NavigationServices from '../../navigation/NavigationServices';
export class BottomSheet extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Pressable
                    onPress={() => {
                        NavigationServices.goBack();
                    }}
                    style={styles.pressableWrapper}>
                    <View style={styles.content}>
                        <Button
                            title="Open another bottomsheet"
                            onPress={() => NavigationHelpers.pushBottomSheet()}
                        />
                    </View>
                </Pressable>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    pressableWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    content: {
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'white',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        paddingVertical: 30,
    },
});

BottomSheet.propTypes = {
    route: PropTypes.object,
    navigation: PropTypes.object,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(BottomSheet);
