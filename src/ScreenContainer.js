import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Register from './Register';
import Home from './Home';
import Login from './Login';
import Profil from './Profil';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
        header: null
    }  
  },
  Login: { screen: Login },
  Register: { screen: Register, title: 'register' },
  Profil: { 
    screen: Profil, 
    navigationOptions: {
    headerTitle: 'profil'
} }
});

const Container = createAppContainer(AppNavigator)

export default Container;
