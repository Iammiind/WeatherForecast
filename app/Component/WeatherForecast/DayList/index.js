import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

class DayList extends Component {
    
    render() {
        return(
            <View style={ styles.container } >
                <View style={ styles.dateWrapper }>
                    <Text style={ this.props.rainy ? styles.textRainy : styles.textSunny }>
                        { this.props.date }
                    </Text>
                </View>
                <View style={ styles.tempWrapper }>
                    <Text style={ this.props.rainy ? styles.textRainy : styles.textSunny }>
                        { this.props.temp + '°' }
                    </Text>
                </View>
                <View style={ styles.iconWrapper }>
                    <Text style={[ styles.weatherDescription, this.props.rainy ? styles.textRainy : styles.textSunny ]}>
                        { this.props.description }
                    </Text>
                    <Image source={{uri: 'http://openweathermap.org/img/w/'+ this.props.icon +'.png'}} style={ styles.icon } /> 
                </View>
            </View>
        )
    }
}
export default DayList