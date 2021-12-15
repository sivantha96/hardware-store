import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { BlurView } from 'expo-blur';
import { Images } from '../../../theme';
import Icon from '../../Icon';
import { ScrollView } from 'react-native-gesture-handler';
import { Heading } from '../../Typography';

const GeneralFullSheet = ({ onPressClose }) => {
    return (
        <View style={styles.container}>
            <BlurView intensity={100} tint="light" style={styles.sheetHeader}>
                <Heading weight="semi-bold">Filter</Heading>
                <Icon size={15} source={Images.icons.general.close} onPress={onPressClose} />
            </BlurView>
            <ScrollView>
                <View style={styles.content}></View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 0 : 80,
    },
    sheetHeader: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        height: 80,
        width: '100%',
        zIndex: 2,
    },
    content: {
        zIndex: 1,
    },
});

export default GeneralFullSheet;
