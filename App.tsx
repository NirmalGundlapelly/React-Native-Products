import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductScreen from './src/screens/ProductScreen';
import ProductDetailScreen from './src/screens/ProductDetailScreen';

// import Home from './src/screens/Home';
// import ExpenceTracker from './src/screens/ExpenceTracker';

const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (
      // <Home />
      // <ExpenceTracker />
      <NavigationContainer> 
        <Stack.Navigator
          initialRouteName="ProductScreen"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="ProductScreen" component={ProductScreen} />
          <Stack.Screen
            name="ProductDetailScreen"
            component={ProductDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}