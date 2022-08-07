import { StyleSheet } from 'react-native';
import { THEME } from '../../styles/theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        width: '100%',
        marginTop: 30,
    },
    text: {
        fontSize: 20,
        fontFamily: THEME.fonts.heading,
        textAlign: 'center',
        color: THEME.colors.gray[300]
    },
    welcomeText: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        width: '75%',
        height: 40,
        borderRadius: 5,
        backgroundColor: THEME.colors.primary[700]
    },
    btnTxt: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: THEME.fonts.body
    }
})