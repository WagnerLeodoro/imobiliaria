import { StyleSheet } from 'react-native';
import { THEME } from '../../styles/theme';

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    taskForm: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        padding: 5,
        width: 350,
        borderWidth: 2,
        borderColor: THEME.colors.primary[700],
        borderRadius: 5
    },
    label: {
        width: 140,
        margin: 5,
        color: 'black',
        fontFamily: THEME.fonts.body,
        fontSize: 16,
    },
    text: {
        fontSize: 16,
        fontFamily: THEME.fonts.body,
    },
    outLineCircle: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        width: 20,
        height: 20,
        borderRadius: 10,
        borderColor: '#777',
        borderWidth: 2
    },
    innerCircle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#444',
    }
});