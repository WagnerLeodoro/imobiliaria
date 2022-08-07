import { View, Text } from 'react-native'
import React from 'react'

import { House } from 'phosphor-react-native'
import { THEME } from '../../styles/theme'
import { styles } from './styles'

export default function Header() {
  return (
    <View style={styles.container}>
      <House size={30} color={THEME.colors.gray[300]} weight='bold' />
      <Text style={styles.title}>Imobiliária Real</Text>
    </View>
  )
}