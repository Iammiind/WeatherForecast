import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
        flexDirection: 'column'
    },
    searchWrapper: {
        flex: 1.5,
        flexDirection: 'column',
        alignItems: 'center'
    },
    inputWrapper: {
        flex: 1.5,
        flexDirection: 'row'
    },
    textInputWrapper: {
        flex: 1.5,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    textInputRainy: {
        height: 30,
        width: 160,
        borderWidth: 1,
        borderColor: '#607D8B',
        color: 'white'
    },
    textInputSunny: {
        height: 30,
        width: 160,
        borderWidth: 1,
        borderColor: '#607D8B'
    },
    buttonWrapper: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    searchButton: {
        backgroundColor: '#607D8B',
        width: 90,
        height: 30
    },
    textSearchButton: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 5
    },
    unitWrapper: {
        flex: 1,
        flexDirection: 'row'
    },
    unitButton: {
        width: 130,
        height: 25,
        borderWidth: 1,
        borderColor: '#607D8B'
    },
    textButton: {
        fontSize: 14,
        textAlign: 'center',
        marginTop: 2.5
    },
    unitSelected: {
        backgroundColor: '#607D8B',
    },
    unitUnselected: {
        backgroundColor: 'white'
    },
    textUnitSelected: {
        color: 'white'
    },
    textUnitUnselected: {
        color: 'black'
    },
    listWrapper: {
        flex: 4.2
    },
    todayWrapper: {
        flex: 1,
        alignItems: 'center'
    },
    cityNameSunny: {
        fontSize: 26,
        backgroundColor: 'rgba(0,0,0,0)'
    },
    descriptionSunny: {
        backgroundColor: 'rgba(0,0,0,0)'
    },
    temperatureSunny: {
        fontSize: 32,
        backgroundColor: 'rgba(0,0,0,0)'
    },
    cityNameRainy: {
        fontSize: 26,
        backgroundColor: 'rgba(0,0,0,0)',
        color: 'white'
    },
    descriptionRainy: {
        backgroundColor: 'rgba(0,0,0,0)',
        color: 'white'
    },
    temperatureRainy: {
        fontSize: 32,
        backgroundColor: 'rgba(0,0,0,0)',
        color: 'white'
    },
    iconWeather: {
        width: 50, 
        height: 30
    },
    otherDayWrapper: {
        flex: 2,
        // backgroundColor: 'green',
        borderTopWidth: 1,
        borderColor: '#607D8B'
    },
    bgWrapper: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})