//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { List, ListItem  } from 'react-native-elements';
import { connect } from 'react-redux'
import styles from './styles'

import Header from '../../components/GenericHeader';

// create a component
class DoShopList extends Component {
    componentWillMount() {
        this.props.getItems()
    }

    // Build Items list if items exist and are loaded
    renderMessage() {
        if(this.props.isLoading) {
            return (<Text>Loading</Text>)
        }else if(!this.props.error) {
            if(this.props.items.length == 0){
                return (<Text>Sin Agregar</Text>)
            }else {
                return null
            }
        }

        return (<Text>Error</Text>)
    }
    renderItemsList() {
        if(this.props.items.length > 0){
            return (
                <List>
                    {
                        this.props.items.map((item, i) => (
                            <TouchableOpacity key={i}>
                                <ListItem
                                    key={i}
                                    title={item.name}
                                    leftIcon={{name: 'done', size: 20}}
                                    hideChevron = {true}
                                />
                            </TouchableOpacity>
                        ))
                    }
                </List>
            )
            
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Header leftFunc={this.props.closeModal} title={'Agregar items'}/>
                </View>
                <View style={this.renderMessage() ? styles.bodyContainer : {}}>
                    {this.renderMessage()}
                </View>
                 {this.renderItemsList()}
            </View>
        );
    }
}

export default DoShopList

