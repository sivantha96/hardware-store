import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { scale } from '../helpers/scalingHelper';
import { Colors } from '../theme';

const Icon = ({ source, size, onPress, color, disabled }) => {
    return (
        <TouchableOpacity disabled={disabled} onPress={onPress} style={styles.iconContainer(size)}>
            <Image resizeMode="contain" source={source} style={styles.icon(color)} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    iconContainer: (size) => ({
        height: scale(size),
        width: scale(size),
    }),
    icon: (color) => ({
        tintColor: color || Colors.BLACK,
        width: '100%',
        height: '100%',
    }),
});

export default Icon;
