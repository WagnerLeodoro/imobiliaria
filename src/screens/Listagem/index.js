import { FlatList, ScrollView, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { CaretLeft } from 'phosphor-react-native'

import AnuncioItem from '../../components/AnuncioItem'
import Header from '../../components/Header'
import Select from '../../components/Select'
import Database from '../../services/database'

import { styles } from './styles'
import { THEME } from '../../styles/theme'

export default class Listagem extends Component {
    constructor(props) {
        super(props)
        this.db = new Database()
        this.types = [
            { label: 'Todos', value: -1 },
            { label: 'Casa', value: 1 },
            { label: 'Camércio', value: 2 },
            { label: 'Apartamento', value: 3 },
        ]
        this.navigation = props.navigation
        this.state = {
            anuncios: [],
            filter: -1,
        }
        this.refresh()
    }

    refresh = () => {
        let filter = this.state.filter
        if (filter > 0) setTimeout(() => {
            this.setState({ anuncios: [], carregando: true })
            this.db.loadAnunciosWithTypeFilter(filter).then(anuncios => this.setState({ anuncios: anuncios, carregando: false }))
        }, 1000)
        else setTimeout(() => {
            this.setState({ anuncios: [], carregando: true })
            this.db.loadAnuncios().then(anuncios => this.setState({ anuncios: anuncios, carregando: false }))
        }, 1000)
    }

    renderItem = ({ item }) => <AnuncioItem anuncio={item} />

    keyExtractor = (item) => item.id.toString()

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.navigation.goBack()} style={styles.icon}>
                        <CaretLeft size={22} color={THEME.colors.gray[300]} />
                    </TouchableOpacity>
                    <Header />
                </View>
                <View style={styles.pageTitle}>
                    <Text style={styles.text}>Lista de Imóveis</Text>
                </View>
                <View style={styles.filterField}>
                    <Text style={styles.bodyText}>Filtrar por:</Text>
                    <Select values={this.types} onChange={(value) => this.setState({ filter: value }, () => this.refresh())} />
                </View>

                <View style={styles.card}>
                    {this.state.carregando ?
                        <Text>Carregando...</Text> :
                        this.state.anuncios.length > 0 ?
                            <FlatList
                                data={this.state.anuncios}
                                renderItem={this.renderItem}
                                keyExtractor={this.keyExtractor}
                                showsVerticalScrollIndicator={false}
                            /> :
                            <Text>Não há anúncios no momento</Text>
                    }
                </View>
            </View>
        )
    }
}