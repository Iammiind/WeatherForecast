import React, { Component } from 'react'
import { FlatList, Text } from 'react-native'

class DayList extends Component {
    render() {
        return(
            <FlatList
                data={[{key: 'a'}, {key: 'b'}]}
                renderItem={({item}) => <Text>{item.key}</Text>}
            />
        )
    }
}
export default DayList