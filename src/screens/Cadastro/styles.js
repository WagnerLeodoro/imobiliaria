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
    text: {
        color: THEME.colors.gray[300],
        fontSize: 22,
        fontFamily: THEME.fonts.heading,
        fontWeight: 'bold'
    },
    formContainer: {
        flex: 1,
        marginTop: 10,
        bottom: 30,
        minWidth: 350,
        justifyContent: 'center',
        alignItems: 'center'
    },
    formTitle: {
        alignItems: 'center',
    },
    form: {
        width: '100%',
        height: 530,
        marginTop: 5,
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 15
    },
    inputBox: {
        width: 350,
        height: 40,
        margin: 10,
        padding: 5,
        borderWidth: 2,
        borderColor: THEME.colors.primary[700],
        borderRadius: 5,
        fontSize: 14,
        fontFamily: THEME.fonts.body
    },
    selectBox: {
        width: 350,
        height: 60,
        margin: 10,
        padding: 5,
        borderWidth: 2,
        borderColor: THEME.colors.primary[700],
        borderRadius: 5,
        fontSize: 14,
    },
    label: {
        marginTop: 5,
    },
    select: {
        color: THEME.colors.gray[300]
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 350,
        marginTop: 10,
    },
    imagePicker: {
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: 10,
        width: 150,
        height: 60,
        borderRadius: 5,
        backgroundColor: THEME.colors.primary[700]
    },
    iconBtn: {
        marginLeft: 8,
        marginRight: 8
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        width: '75%',
        height: 50,
        borderRadius: 5,
        backgroundColor: THEME.colors.green[700]
    },
    btnTxt: {
        fontSize: 16,
        textAlign: 'center',
        color: 'white',
        fontFamily: THEME.fonts.body,
        fontWeight: 'bold'
    }
});