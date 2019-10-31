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

class Home extends React.Component {
    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => navigate('Register')} style={{ backgroundColor: 'blue', width: '50%', height: '40%', borderRightWidth: 0.5 }} ><Text style={{ color: 'white', alignSelf: 'center', marginVertical: '50%' }}>Register</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('Login')} style={{ backgroundColor: 'blue', width: '50%', height: '40%', borderLeftWidth: 0.5 }} ><Text style={{ color: 'white', alignSelf: 'center', marginVertical: '50%' }}>Login</Text></TouchableOpacity>
            </View>
        )
    }

}

export default Home