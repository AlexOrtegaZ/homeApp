//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { StyledView, StyledText } from './styles'

import Rx from 'rxjs/Rx';


// create a component
class Home extends Component {
    constructor() {
        super()

        this.state = {
            data: [{name: "Eduardo M", age: 23}, {name: "Julian O", age: 24}, {name: "Martin C", age: 22}]
        }
    }
    componentDidMount() {
        this.testRx()
    }
    renderList({ item }) {
        return (<StyledText title>{item.name}</StyledText>)
    }

    testRx() {
        var foo = ""
        var myObservable = Rx.Observable.of(foo)

        myObservable.subscribe(value => console.log(value))
        foo += "H" 
        foo += "E" 
        
    }
    
    render() {
        return (
            <StyledView>
                <Text>----</Text>
                     <FlatList 
                        data={this.state.data}
                        keyExtractor={item => item.name}
                        renderItem={this.renderList}
                     />
                <Text>----</Text>
            </StyledView>
        );
    }
}

//make this component available to the app
export default Home;
