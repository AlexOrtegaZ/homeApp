//import liraries
import React, { Component } from 'react';
import { View, Text, Modal, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Icon, List, ListItem  } from 'react-native-elements';
import styles from './styles'

import DoShopList from '../DoShopList'

// create a component
class ShopList extends Component {

    closeModal() {
        this.props.showModal(false);
    }

    render() {
        return (
            <View style={styles.container}>
             
                <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible={this.props.isModalOpen !== undefined ? this.props.isModalOpen : false}
                    onRequestClose={() => {alert("Modal has been closed.")}}
                    >
                    <DoShopList closeModal={this.closeModal.bind(this)}/>
                </Modal>
            </View>
        );
    }
}


//make this component available to the app
export default ShopList;
// <List>
//      {
//         this.props.shopList.map((item, i) => (
//             <TouchableOpacity key={i}>
//                 <ListItem
//                     key={i}
//                     title={item.title}
//                     subtitle={item.description}
//                     leftIcon={{name: 'done', size: 16}}
//                     hideChevron = {true}
//                 />
//             </TouchableOpacity>
//         ))
//     }
// </List>