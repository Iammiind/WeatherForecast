import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#607D8B',
        paddingLeft: 10,
        paddingRight: 10
    },
    dateWrapper: {
        flex: 2,
        // backgroundColor: 'orange',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    tempWrapper: {
        flex: 1,
        // backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    iconWrapper: {
        flex: 1,
        // backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    icon: {
        width: 40,
        height: 30
    },
    weatherDescription: {
        textAlign: 'center'
    },
    textRainy: {
        color: 'white'
    },
    textSunny: {
        color: 'black'
    }
})