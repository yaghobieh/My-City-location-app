import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {v4 as uuid} from 'uuid';
import { colors } from '../theme';

export default class AddCity extends React.Component {
    state = {
        city: '',
        country: ''
    }

    onChangeText = (key, value) => {
        this.setState({
            [key] : [value]
        })
    }

    submit = () => {
        if(this.state.city === '' || this.state.country === '') return;
        let city = {
            city: this.state.city,
            country: this.state.country,
            location: [],
            id: uuid()
        }
        this.props.screenProps.addCity(city);
        this.setState({
            city: '',
            country: ''
        }, () => {
            this.props.navigation.navigate('Cities');
        });
    }

    render() {
        return (
            <View style={style.container}>
                <Text style={style.heading}>Cities app</Text>
                <TextInput 
                    placeholder='City name'
                    value={this.state.city ? String(this.state.city) : null}
                    onChangeText={val => this.onChangeText('city', val)}
                    style={style.input}
                />
                <TextInput 
                    placeholder='Country name'
                    value={this.state.country ? String(this.state.country) : null}
                    onChangeText={val => this.onChangeText('country', val)}
                    style={style.input}
                />
                <TouchableOpacity onPress={this.submit}>
                    <View style={style.button}>
                        <Text style={style.buttonText}>Add City</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const style = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        margin: 10,
        paddingHorizontal: 8,
        height: 50 
    },
    button: {
        height: 50,
        backgroundColor: '#666',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    buttonText: {
        color: 'white'
    },
    container: {
        backgroundColor: colors.primary,
        flex: 1,
        justifyContent: 'center'
    },
    heading: {
        fontSize: 30,
        textAlign: 'center',
        margin: 20,
        color: 'white'
    }
});