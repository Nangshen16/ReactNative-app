import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
   
    return ( 
    <View style = { {padding: 50} } >
        <View>
            <TextInput placeholder="Course Goal" style={{borderBottomColor: 'black', borderBottomWidth:1}} />
            <Button title="ADD"/>
        </View>
           
       
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});