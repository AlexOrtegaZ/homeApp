//import liraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Tabs, Tab, Icon } from 'react-native-elements'
import styles from './styles'

import ShopList from '../ShopList'
import Profile from '../Home'

// create a component
class Tabbar extends Component {
    constructor(props) {
        super(props)
        if(!this.props.selectedTab){
            this.changeTab.bind(this)('profile');
        }
    }

    changeTab (selectedTab) {
        let tab;
        switch (selectedTab) {
            case 'profile':
                tab = {
                    name: 'Perfil',
                    key: 'profile'
                }
                break;
            case 'shoplist':
            default:
                tab = {
                    name: 'Lista',
                    key: 'shoplist',
                    isModalOpen: false,
                }
        }
        this.props.selectTab(tab)
    }
    render() {
        let selectedTab = this.props.selectedTab.key;
        return (
            <Tabs>
                <Tab
                    titleStyle={{fontWeight: 'bold', fontSize: 10}}
                    selectedTitleStyle={{marginTop: -1, marginBottom: 6, color: '#FFC400'}}
                    selected={selectedTab === 'shoplist'}
                    title={selectedTab === 'shoplist' ? 'SHOPLIST' : null}
                    renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='whatshot' size={33} />}
                    renderSelectedIcon={() => <Icon color={'#FFD740'} name='whatshot' size={30} />}
                    onPress={() => this.changeTab('shoplist')}>
                    <ShopList />
                </Tab>
                <Tab
                    titleStyle={{fontWeight: 'bold', fontSize: 10}}
                    selectedTitleStyle={{marginTop: -1, marginBottom: 6, color: '#FFC400'}}
                    selected={selectedTab === 'profile'}
                    title={selectedTab === 'profile' ? 'PROFILE' : null}
                    renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='person' size={33} />}
                    renderSelectedIcon={() => <Icon color={'#FFC400'} name='person' size={30} />}
                    onPress={() => this.changeTab('profile')}>
                    <Profile />
                </Tab>
            </Tabs>
        );
    }
}



//make this component available to the app
export default Tabbar;
