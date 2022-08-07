import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'

const RadioButton = ({ selected, options = [], onChangeSelect }) => {
    return (
        <View style={styles.taskForm}>
            <Text style={styles.label}>Finalidade: </Text>
            {options.map((opt, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.container}
                    onPress={() => onChangeSelect(opt, index)}>
                    <View style={styles.outLineCircle}>
                        {selected == index && <View style={styles.innerCircle} />}
                    </View>
                    <Text style={styles.text}>{opt}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default RadioButton