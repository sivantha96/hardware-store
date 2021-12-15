import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import Icon from '../components/Icon';
import { Images } from '../theme';
import NavigationServices from '../navigation/NavigationServices';
import Constants from 'expo-constants';
import { Heading } from '../components/Typography';

const NavigationHeader = ({ title, onPressBack }) => {
    const onPressBackHandler = () => {
        if (onPressBack) {
            return onPressBack();
        }
        NavigationServices.goBack();
    };

    return (
        <View style={styles.container}>
            <StatusBar translucent />
            <View style={styles.row}>
                <View style={styles.wrapperLeft}>
                    <Icon
                        onPress={onPressBackHandler}
                        size={25}
                        source={Images.icons.general.back}
                    />
                    <View>
                        <Heading weight="semi-bold">{title}</Heading>
                    </View>
                </View>
                <View style={styles.wrapperRight}>
                    <Icon size={25} source={Images.icons.filled.profile} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        paddingTop: Constants.statusBarHeight + 20,
        paddingBottom: 20,
    },
    row: {
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    wrapperLeft: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    wrapperRight: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
    },
});

export default NavigationHeader;
