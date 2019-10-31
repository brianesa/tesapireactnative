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
    SectionList,
    TouchableOpacity
} from 'react-native';
import observableTokenStore from '../tokenStore'

class Profil extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            username: '',
            email: '',
            role: '',
        }
    }

    componentDidMount = async () => {
        try {
            console.log(observableTokenStore.getToken())
            let response = await fetch(
                'http://192.168.43.211:3300/users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': observableTokenStore.getToken(),
                }
            }
            );
            let responseJson = await response.json();
            this.setState({
                name: responseJson.users[0].name,
                username: responseJson.users[0].username,
                email: responseJson.users[0].email,
                role: responseJson.role,
                data: responseJson.users
            })
            console.log(responseJson)

        } catch (error) {
            console.error(error);
        }
    }

    render() {
        return (
            <View style={style.container}>

                <Text>{(this.state.role === 'ADMIN') ? 'welcome admin' : 'welcome user'}</Text>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => <View><Text style={style.name}>{item.name}</Text><Text style={style.username}>{item.username}</Text><Text style={style.email}>{item.email}</Text><View style={{ borderWidth: 1 }}></View></View>}
                    keyExtractor={({ id }, index) => id} />
            </View>
        )
    }
}

const style = StyleSheet.create({
    container:{
        flex: 1
    },
    name:{
        fontSize: 40
    },
    username:{
        fontSize: 30
    },
    email:{
        fontSize: 16
    }
})

export default Profil;
