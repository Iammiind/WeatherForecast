import React, { Component } from 'react'
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native'
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
        forecast: {
                city: {
                    id: '--',
                    name: '--',
                    coord: {
                        lat: '--',
                        lon: '--'
                    },
                    country: '--'
                },
                cod: '--',
                message: '--',
                cnt: '--',
                list: [
                    {
                        dt: '--',
                        temp: {
                            day: '--',
                            min: '--',
                            max: '--',
                            night: '--',
                            eve: '--',
                            morn: '--'
                        },
                        pressure: '--',
                        humidity: '--',
                        weather: [
                            {
                                id: '--',
                                main: '--',
                                description: '--',
                                icon: '--'
                            }
                        ]
                    }
                ]
            },
            theme: {
                rainy: true,
                sunny: false
            }      
    }

    _addCity(value) {
        this.setState({
            city: value
        })
    }

    _forecast() {
        if(this.state.city == '') {
            alert('Please input the city name .')
        }
        else {
            if(this.state.unit.celcius == true) {
                // celcius unit
                fetch('http://api.openweathermap.org/data/2.5/forecast/daily?q='+ this.state.city +'&appid='+ this.state.appID +'&cnt=5&units=metric')
                .then((response) => response.json())
                .then((responseJSON) => {
                    this.setState({
                        forecast: responseJSON
                    })
                })
                .catch((error) => {
                    console.warn(error)
                })
            }
            else {
                // fahrenheit unit
                fetch('http://api.openweathermap.org/data/2.5/forecast/daily?q='+ this.state.city +'&appid='+ this.state.appID +'&cnt=5&units=imperial')
                .then((response) => response.json())
                .then((responseJSON) => {
                    this.setState({
                        forecast: responseJSON
                    })
                })
                .catch((error) => {
                    console.warn(error)
                })
            }
        }
    }

    render() {
        return(
            <Image source={ this.state.theme.rainy ? require('../../bg/rainy.jpg') : require('../../bg/sunny.jpg')} style={ styles.container }>

                {/* input part */}
                <View style={ styles.searchWrapper }>
                    <View style={ styles.inputWrapper }>
                        <View style={ styles.textInputWrapper }>
                            <TextInput style={ styles.textInput } 
                            onChangeText={ (value) => this._addCity(value) } />
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
                    {/* today weather */}
                    <View style={ styles.todayWrapper }>
                        {/* city name */}
                        <Text style={ this.state.theme.rainy ? styles.cityNameRainy : styles.cityNameSunny }>
                            { this.state.forecast.city.name }
                        </Text>
                        {/* weather description */}
                        <Text style={ this.state.theme.rainy ? styles.descriptionRainy : styles.descriptionSunny }>
                            { this.state.forecast.list[0].weather[0].description }
                        </Text>
                        {/* weather temperature */}
                        <Text style={ this.state.theme.rainy ? styles.temperatureRainy : styles.temperatureSunny }>
                            { this.state.forecast.list[0].temp.day + '°' }
                        </Text>
                        {/* weather icon */}
                        <Image source={{uri: 'http://openweathermap.org/img/w/'+ this.state.forecast.list[0].weather[0].icon +'.png'}} style={ styles.iconWeather } />
                    </View>
                    {/* other 4 days weather */}
                    <View style={ styles.otherDayWrapper }>
                        {
                            this.state.forecast.list.slice(1, 5).map( (day) => {
                                    dateTime = day.dt
                                    d = new Date(dateTime*1000);
                                    month = d.getMonth()+1
                                   
                                return (
                                    <DayList date={ d.getDate() +'/'+ month +'/'+ d.getFullYear() } temp={ day.temp.day }  
                                    description={ day.weather[0].description } icon={ day.weather[0].icon } key={day.dt}
                                    rainy = { this.state.theme.rainy }
                                    />
                                )
                            } )
                        }
                    </View>
                </View>

                {/* change bg button */}
                <View style={[ styles.unitWrapper, styles.bgWrapper ]}>
                        <TouchableOpacity style={[ styles.unitButton, this.state.theme.rainy? styles.unitSelected : styles.unitUnselected ]} 
                        onPress={ () => this.setState({
                                theme: {
                                    rainy: !this.state.theme.rainy,
                                    sunny: !this.state.theme.sunny
                                }
                            })
                        }>
                            <Text style={[ styles.textButton, this.state.theme.rainy? styles.textUnitSelected: styles.textUnitUnselected ]}>
                                Rainy Theme
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[ styles.unitButton, this.state.theme.sunny? styles.unitSelected : styles.unitUnselected ]} 
                        onPress={ () => this.setState({
                                theme: {
                                    rainy: !this.state.theme.rainy,
                                    sunny: !this.state.theme.sunny
                                }
                            }) 
                        }>
                            <Text style={[ styles.textButton, this.state.theme.sunny? styles.textUnitSelected: styles.textUnitUnselected ]}>
                                Sunny Theme
                            </Text>
                        </TouchableOpacity>
                </View>

            </Image>
        )
    }
}
export default WeatherForecast