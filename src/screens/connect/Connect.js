import React, { Component } from "react";
import { Text, View } from "react-native";

import AppTitleHeader from '../../common/AppTitleHeader';


class Connect extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <AppTitleHeader
                    title='Connect'                    
                    bgColor='#3949ab'
                    textColor='white'
                />
                <Text>Hrer</Text>
            </View>
        )
    }
}

export default Connect;