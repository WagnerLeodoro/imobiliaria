import { StyleSheet } from 'react-native';
import { THEME } from '../../styles/theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    logo: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    title: {
        fontSize: 22,
        fontFamily: THEME.fonts.body,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 5
    }
})