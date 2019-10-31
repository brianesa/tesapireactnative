/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    TouchableHighlight,
    TouchableHighlightProps,
    FlatList,
    Alert,
    TouchableOpacity
} from 'react-native';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            username: '',
            email: '',
            password: ''
        }
    }

    tes = async () => {
        const { name, username, email, password } = this.state
        console.log('kepencet')
        try {
            let response = await fetch('http://192.168.43.211:3300/auth/register', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    username: username,
                    email: email,
                    password: password
                }),
            });
            console.log('success')
            let responseJson = await response.json();
            
            Alert.alert(responseJson.status)
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <View>
                <TextInput onChangeText={name => this.setState({ name })} placeholder='name' style={{ borderWidth: 1 }}></TextInput>
                <TextInput onChangeText={username => this.setState({ username })} placeholder='username' style={{ borderWidth: 1 }}></TextInput>
                <TextInput onChangeText={email => this.setState({ email })} placeholder='email' style={{ borderWidth: 1 }}></TextInput>
                <TextInput onChangeText={password => this.setState({ password })} placeholder='password' style={{ borderWidth: 1 }}></TextInput>
                <TouchableOpacity onPress={this.tes} style={{ backgroundColor: 'blue', width: '50%', height: '20%' }} ><Text style={{ color: 'white', alignSelf: 'center', marginVertical: '10%' }}>Register</Text></TouchableOpacity>
            </View>
        )
    }
}

export default Register;
