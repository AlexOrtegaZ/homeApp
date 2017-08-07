//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Header, Icon } from 'react-native-elements';

// create a component
class GenericHeader extends Component {
    renderLeftComponent() {
        return (
            <TouchableOpacity onPress={() => this.props.leftFunc(true)}>
                <Icon
                    name='arrow-back'
                    type='materialicons'
                    color='#fff'
                    size= {26}
                />
            </TouchableOpacity>
        )
    }
    renderRightComponent() {
        return (
            <TouchableOpacity onPress={() => this.props.rightFunc(true)}>
                <Icon
                    name='check'
                    type='materialicons'
                    color='#fff'
                    size= {26}
                />
            </TouchableOpacity>
        )
    }
    render() {
         
        return (
            <Header
                leftComponent={this.renderLeftComponent.bind(this)()}
                centerComponent={{ text: this.props.title, style: { color: '#fff', fontSize: 28 } }} 
                outerContainerStyles={{ backgroundColor: '#FFD740', height: 65 }}
                rightComponent={this.renderRightComponent.bind(this)()}
            />
        );
    }
}

//make this component available to the app
export default GenericHeader;
