import { StyleSheet } from 'react-native';
import { THEME } from '../../styles/theme';

export const styles = StyleSheet.create({
    list: {
        width: 350,
        height: 450,
        marginTop: 10,
        marginBottom: 15,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 15
    },
    title: {
        alignSelf: 'center',
        marginTop: 15,
        fontSize: 22,
        color: 'red',
        fontFamily: THEME.fonts.body,
        fontWeight: 'bold'
    },
    image: {
        alignSelf: 'center',
        marginTop: 10,
        height: 300,
        width: 300,
        borderRadius: 6,
    },
    details: {
        margin: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    price: {
        fontSize: 22,
        fontFamily: THEME.fonts.body,
        fontWeight: 'bold',
    },
    address: {
        fontSize: 18,
        fontFamily: THEME.fonts.body,
        marginLeft: 15,
        marginBottom: 15
    },
});