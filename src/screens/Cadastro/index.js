import { View, Text, TouchableOpacity, TouchableWithoutFeedback, TextInput, KeyboardAvoidingView, Keyboard } from 'react-native'
import React, { Component } from 'react'

import { THEME } from '../../styles/theme'
import { styles } from './styles'
import { Camera, CaretLeft, MagnifyingGlass } from 'phosphor-react-native'

import DatabaseClass from '../../services/database'
import Anuncio from '../../models/anuncio'
import Header from '../../components/Header'
import Select from '../../components/Select'
import RadioButton from '../../components/RadioButton'
import ImagePicker from '../../components/ImagePicker'

export default class Cadastro extends Component {
	constructor(props) {
		super(props)
		this.db = new DatabaseClass()
		this.navigation = props.navigation
		this.types = [
			{ label: 'Casa', value: 1, },
			{ label: 'Comércio', value: 2, },
			{ label: 'Apartamento', value: 3, },
		]
		this.final = [
			{ label: 'Alugar', value: 0, },
			{ label: 'Vender', value: 1, },
		]
		this.state = {
			anuncio_name: '',
			anuncio_price: 0.0,
			anuncio_address: '',
			anuncio_final: 1,
			anuncio_type: 1,
			anuncio_image: '',
			prioridade: "",
			selected: 0,
		}
	}

	handleGoBack = (() => {
		this.navigation.goBack();
	}).bind(this);

	handleNewAnuncio = (() => {
		let anuncio = new Anuncio({
			name: this.state.anuncio_name,
			image: this.state.anuncio_image,
			price: this.state.anuncio_price,
			address: this.state.anuncio_address,
			final: this.state.anuncio_final,
			type: this.state.anuncio_type,
		})
		console.log(anuncio)
		if (!anuncio.isValidWithOutId()) {
			alert('Por favor preencha todos os campos!')
			return
		}
		this.db.addNewAnuncio(anuncio).then(result => {
			if (result) {
				this.navigation.pop()
			} else alert("Erro ao cadastrar anúncio " + anuncio.name)
		})
	}).bind(this)

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<TouchableOpacity onPress={this.handleGoBack} style={styles.icon}>
						<CaretLeft size={22} color={THEME.colors.gray[300]} />
					</TouchableOpacity>
					<Header />
				</View>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<KeyboardAvoidingView behavior="padding" enabled>
						<View style={styles.formContainer}>
							<View style={styles.formTitle}>
								<Text style={styles.text}>Cadastro de Anúncios</Text>
							</View>
							<View style={styles.form}>

								<TextInput
									onChangeText={(text) => this.setState({ anuncio_name: text })}
									style={styles.inputBox}
									placeholder="Título do Anúncio"
									maxLength={20}
								/>

								<TextInput
									onChangeText={(text) => this.setState({ anuncio_address: text })}
									style={styles.inputBox}
									placeholder="Endereço"
									maxLength={60}
								/>

								<Text style={styles.label}>Selecione o tipo de Imóvel</Text>

								<View style={styles.selectBox}>
									<Select
										onChange={(text) => this.setState({ anuncio_type: text })} values={this.types}
									/>
								</View>

								<TextInput
									onChangeText={(text) => this.setState({ anuncio_price: text })}
									style={styles.inputBox}
									placeholder="Preço"
									keyboardType='numeric'
									maxLength={12}
								/>

								<RadioButton
									selected={this.state.selected}
									options={['Aluguel', 'Venda']}
									onChangeSelect={(opt, i) => {
										this.setState({ prioridade: opt });
										this.setState({ selected: i });
										this.setState({ anuncio_final: i })
										console.log(opt, i);
									}}
								/>
								<View style={styles.buttonContainer}>
									<ImagePicker buttonStyle={styles.imagePicker} iconStyle={styles.iconBtn} icon={<Camera size={32} color='white' />} contentStyle={styles.btnTxt} title="Tirar Foto" saveCameraImage={true} onTakePhoto={(uri) => this.setState({ anuncio_image: uri })} />

									<ImagePicker buttonStyle={styles.imagePicker} iconStyle={styles.iconBtn} icon={<MagnifyingGlass size={32} color='white' />} contentStyle={styles.btnTxt} title="Pesquisar Imagem" usePhotoFromLibrary={true} onTakePhoto={(uri) => this.setState({ anuncio_image: uri })} />
								</View>

								<TouchableOpacity style={styles.button} onPress={this.handleNewAnuncio}>
									<Text style={styles.btnTxt}>
										Cadastrar
									</Text>
								</TouchableOpacity>
							</View>

						</View>
					</KeyboardAvoidingView>
				</TouchableWithoutFeedback>
			</View>
		)
	}
}