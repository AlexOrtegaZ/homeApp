//import liraries
import React, { Component } from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements'
import styles from './styles'

// create a component
class AddItem extends Component {
    constructor() {
        super()

        this.state = {
            name: ""
        }
    }

    handledName(text) { 
        this.setState(text)
    }

    render() {
        return (
            <View style={styles.container}>

                <FormLabel>Name</FormLabel>
                <FormInput onChangeText={this.handledName.bind(this)}/>
            </View>
        );
    }
}

//make this component available to the app
export default AddItem;
