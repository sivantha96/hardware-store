// Provides universal fonts used in the app.
import { StyleSheet } from 'react-native';
import { FontSize, Colors } from '../../theme';

const Styles = StyleSheet.create({
    xlDisplay: {
        color: Colors.TEXT.PRIMARY,
        fontSize: FontSize.xlDisplay,
    },
    topHeading: {
        color: Colors.TEXT.PRIMARY,
        fontSize: FontSize.topHeading,
    },
    display: {
        color: Colors.TEXT.PRIMARY,
        fontSize: FontSize.display,
    },
    heading: {
        color: Colors.TEXT.PRIMARY,
        fontSize: FontSize.heading,
    },
    subHeading: {
        color: Colors.TEXT.PRIMARY,
        fontSize: FontSize.subHeading,
    },
    title: {
        color: Colors.TEXT.PRIMARY,
        fontSize: FontSize.title,
    },
    subtitle: {
        color: Colors.TEXT.PRIMARY,
        fontSize: FontSize.subtitle,
    },
    caption: {
        color: Colors.TEXT.PRIMARY,
        fontSize: FontSize.caption,
    },
    text: {
        color: Colors.TEXT.PRIMARY,
        fontSize: FontSize.text,
    },
    secondaryText: {
        color: Colors.TEXT.PRIMARY,
        fontSize: FontSize.secondaryText,
    },
});

export default Styles;
