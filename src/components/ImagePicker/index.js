import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as MediaLibrary from 'expo-media-library'


export default function IP(
    { title = {},
        icon = {},
        iconStyle = {},
        buttonStyle = {},
        contentStyle = {},
        usePhotoFromLibrary = false,
        saveCameraImage = false,
        onTakePhoto = (_uri) => { }
    }) {

    const obterPermissao = () => {
        ImagePicker.requestCameraPermissionsAsync()
        ImagePicker.requestMediaLibraryPermissionsAsync()
    }

    const obterImagem = async () => {
        let result
        if (usePhotoFromLibrary) result = await ImagePicker.launchImageLibraryAsync()
        else result = await ImagePicker.launchCameraAsync()
        if (result) {
            if (!result.cancelled) {
                let uri = result.uri
                if (saveCameraImage && !usePhotoFromLibrary) uri = (await MediaLibrary.createAssetAsync(uri)).uri
                if (onTakePhoto) onTakePhoto(uri)
                console.log(uri)
            }
        }
    }

    React.useEffect(() => {
        obterPermissao()
    }, [])

    return (
        <TouchableOpacity
            style={buttonStyle}
            onPress={obterImagem}>
            <View style={iconStyle}>
                {icon}
            </View>
            <Text style={contentStyle}>{title}</Text>
        </TouchableOpacity>
    )
}
