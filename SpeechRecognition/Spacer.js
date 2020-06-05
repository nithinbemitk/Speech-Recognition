import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export default class Spacer extends Component {
    render() {
        return (
            <Text style={styles.space}/>
        );
    }
}

const styles = StyleSheet.create({
    space: {
        height: 20
    },
});