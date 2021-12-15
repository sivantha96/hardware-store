import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from '../../components/Icon';
import { verticalScale } from '../../helpers/scalingHelper';
import { Colors, CommonStyles, Images } from '../../theme';
import { TAB_SCREENS } from '../constants';

const TabBar = ({ state, navigation }) => {
    const getIcon = (isFocused, route) => {
        switch (route) {
            case TAB_SCREENS.HOME:
                if (isFocused) {
                    return Images.icons.filled.home;
                }

                return Images.icons.stroke.home;

            case TAB_SCREENS.MENU:
                return Images.icons.general.hamburger;

            default:
                return Images.icons.general.close;
        }
    };
    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                return (
                    <Icon
                        key={route.key}
                        size={20}
                        color={isFocused ? Colors.PRIMARY : Colors.INACTIVE}
                        source={getIcon(isFocused, route.name)}
                        onPress={onPress}
                    />
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: verticalScale(80),
        backgroundColor: Colors.WHITE,
        ...CommonStyles.SHADOW,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingBottom: verticalScale(10),
    },
    tab: {
        flex: 1,
    },
});

export default TabBar;
