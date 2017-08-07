//import liraries
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native'
import { Header, Icon } from 'react-native-elements';

// create a component
class HeaderComponent extends Component {
    componentDidMount() {
        this.props.testFb()
    }

    renderRightComponent() {
        if(this.props.isModalOpen === false || this.props.isModalOpen === true) {
            return (
                <TouchableOpacity onPress={() => this.props.showModal(true)}>
                    <Icon
                        name='add'
                        type='materialicons'
                        color='#fff'
                        size= {26}
                    />
                </TouchableOpacity>
            )
        }
        return null
    }

    render() {
        return (
            <Header
                centerComponent={{ text: this.props.title, style: { color: '#fff', fontSize: 28 } }} 
                outerContainerStyles={{ backgroundColor: '#FFD740', height: 65 }}
                rightComponent={this.renderRightComponent.bind(this)()}
            />
        );
    }
}

//make this component available to the app
export default HeaderComponent;
