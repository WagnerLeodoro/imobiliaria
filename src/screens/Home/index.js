import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import { styles } from './styles'

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Header />
            </View>
            <View style={styles.welcomeText}>
                <Text style={styles.text}>
                    Bem Vindo {'\n'} Selecione uma opção:
                </Text>
                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("cadastro") }}>
                    <Text style={styles.btnTxt}>
                        Cadastrar Imóveis
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("listagem") }}>
                    <Text style={styles.btnTxt}>
                        Listar Imóveis
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}