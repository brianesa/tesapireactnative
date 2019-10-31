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
import observableTokenStore from '../tokenStore'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            sukses: 0
        }
    }
    
    br = () => {this.props.navigation.navigate('Profil')}

    tes = async () => {
        const { email, password } = this.state
        console.log('kepencet')
        try {
            let response = await fetch('http://192.168.43.211:3300/auth/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                }),
            });
            console.log('success')
            
            let responseJson = await response.json();
            if(responseJson.auth){
                observableTokenStore.updateToken(responseJson.accessToken)
                alert(responseJson.accessToken)
                alert(observableTokenStore.getToken())
                this.br()
            //     // Alert.alert(responseJson.accessToken)
                
            }
            else{
                Alert.alert('status','ga berhasil')
            }

            // Alert.alert(responseJson.status)
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        const { navigate } = this.props.navigation
        return (
            <View>
                <TextInput onChangeText={email => this.setState({ email })} placeholder='email' style={{ borderWidth: 1 }}></TextInput>
                <TextInput onChangeText={password => this.setState({ password })} placeholder='password' style={{ borderWidth: 1 }}></TextInput>
                <TouchableOpacity onPress={this.tes} style={{ backgroundColor: 'blue', width: '50%', height: '25%' }} ><Text style={{ color: 'white', alignSelf: 'center', marginVertical: '10%' }}>Login</Text></TouchableOpacity>
            </View>
        )
    }
}

export default Login;
