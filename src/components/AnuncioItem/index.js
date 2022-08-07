import React from 'react'
import { Text, View, Image } from 'react-native'
import Anuncio from '../../models/anuncio'
import { styles } from './styles'

export default function AnuncioItem(props) {
    const anuncio = new Anuncio(props.anuncio)
    return (
        <View style={styles.list}>
            <View>
                <Text style={styles.title}>{anuncio.final == 0 ? 'Aluga-se' : anuncio.final == 1 ? 'Vende-se' : '?'}</Text>
            </View>
            <Image style={styles.image} source={{ uri: anuncio.image }} />

            <View style={styles.details}>
                <Text style={{ fontSize: anuncio.name.length > 12 ? 16 : 20, }}>{anuncio.name}</Text>
                <Text style={styles.price}>R${anuncio.price.toFixed(0)}</Text>
            </View>
            <Text style={styles.address}>Endereço: {anuncio.address}</Text>
        </View>
    )
}