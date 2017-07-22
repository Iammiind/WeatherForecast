import React, { Component } from 'react'
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native'
import styles from './styles'
import DayList from './DayList/index'

class WeatherForecast extends Component {

    // define initial state
    state= {
        city: '',
        appID: '0f659addab75598d0378a6321b1984fe',
        unit: {
            celcius: true,
            fahrenheit: false
        },
        weather: [
            {
                dt: '',
                main: {
                    temp: '',
                    temp_min: '',
                    temp_max: '',
                    pressure: '',
                    sea_level: '',
                    grnd_level: '',
                    humidity: '',
                    temp_kf: ''
                },
                weather: {
                    id: '',
                    main: '',
                    description: '',
                    icon: ''
                },
                clouds: {
                    all: ''
                },
                wind: {
                    speed: '',
                    deg: ''
                },
                rain: {
                    "3h": ''
                },
                snow: {
                    "3h": ''
                },
                dt_txt: ''
            }
        ]
    }

    _addCity(value) {
        this.setState({
            city: value
        })
    }

    _clear() {
        this.setState({
            city: ''
        })
    }

    _forecast() {
        if(this.state.city == '') {
            alert('Please input the city name .')
        }
        else {
            if(this.state.unit.celcius == true) {
                // celcius unit
                fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + this.state.city + '&appid=' + this.state.appID + '&units=metric')
                .then((response) => response.json())
                .then((responseJSON) => {
                    console.log(responseJSON.list)
                    this.setState({
                        weather: responseJSON.list
                    })
                    console.log(this.state.weather)
                })
                .catch((error) => {
                    console.warn(error)
                })
            }
            else {
                // fahrenheit unit
                fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + this.state.city + '&appid=' + this.state.appID + '&units=imperial')
                .then((response) => response.json())
                .then((responseJSON) => {
                    console.log(responseJSON.list)
                    this.setState({
                        weather: responseJSON.list
                    })
                    console.log(this.state.weather)
                    // console.log('http://openweathermap.org/img/w/'+ this.state.weather.icon +'.png')
                })
                .catch((error) => {
                    console.warn(error)
                })
            }
        }
    }

    render() {
        return(
            <View style={ styles.container }>

                {/* input part */}
                <View style={ styles.searchWrapper }>
                    <View style={ styles.inputWrapper }>
                        <View style={ styles.textInputWrapper }>
                            <TextInput style={ styles.textInput } onChangeText={ (value) => this._addCity(value) } />
                        </View>
                        <View style={ styles.buttonWrapper }>
                            <TouchableOpacity style={ styles.searchButton } onPress={ () => this._forecast() } >
                                <Text style={ styles.textSearchButton }> Search </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={ styles.unitWrapper }>
                        <TouchableOpacity style={[ styles.unitButton, this.state.unit.celcius? styles.unitSelected: styles.unitUnselected ]} onPress={ () => this.setState({
                            unit: {
                                celcius: !this.state.unit.celcius,
                                fahrenheit: !this.state.unit.fahrenheit
                            }
                        }, () => this._forecast() )}>
                            <Text style={[ styles.textButton, this.state.unit.celcius? styles.textUnitSelected: styles.textUnitUnselected ]}>
                                Celcius
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[ styles.unitButton, this.state.unit.fahrenheit? styles.unitSelected: styles.unitUnselected ]} onPress={ () => this.setState({
                                unit: {
                                    celcius: !this.state.unit.celcius,
                                    fahrenheit: !this.state.unit.fahrenheit
                                }
                            }, () => this._forecast() )}>
                            <Text style={[ styles.textButton, this.state.unit.fahrenheit? styles.textUnitSelected: styles.textUnitUnselected ]}>
                                Fahrenheit
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* list part */}
                <View style={ styles.listWrapper }>
                    <DayList />
                </View>

            </View>
        )
    }
}
export default WeatherForecast