import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    searchWrapper: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        // backgroundColor: 'pink'
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
    textInput: {
        height: 30,
        width: 160,
        borderWidth: 1,
        borderColor: '#607D8B'
        // backgroundColor: 'white'
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
        flex: 4,
        // backgroundColor: 'yellow'
    }
})