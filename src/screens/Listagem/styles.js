import { StyleSheet } from 'react-native';
import { THEME } from '../../styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        width: '100%',
        marginTop: 30,
    },
    icon: {
        marginLeft: 15,
        alignItems: 'center'
    },
    pageTitle: {
        alignItems: 'center',
    },
    text: {
        color: THEME.colors.gray[300],
        fontSize: 20,
        fontFamily: THEME.fonts.heading,
        fontWeight: 'bold'
    },
    bodyText: {
        color: THEME.colors.gray[300],
        fontSize: 14,
        fontFamily: THEME.fonts.body,
        fontWeight: 'bold'
    },
    filterField: {
        marginTop: 10,
        width: 320,
        margin: 10,
        padding: 5,
        borderWidth: 2,
        borderColor: THEME.colors.primary[700],
        borderRadius: 5,
        fontSize: 14,
        backgroundColor: 'white'
    },
    card: {
        height: 480,
    },
});