//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native'

import Header from './routes/Header'
import TabBar from './routes/TabBar'

// create a component
class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Header /> 
                </View> 
                <View style={styles.viewContainer}>
                    <TabBar />
                </View> 
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        flex: 1,
        maxHeight: 65
    },
    viewContainer: {
        flex: 1,
    },
});

export default App
// <View style={styles.container}>
//                 <View style={styles.headerContainer}>
//                     <Header /> 
//                 </View> 
//                 <View style={styles.viewContainer}>
//                     <TabBar />
//                 </View> 
//             </View>