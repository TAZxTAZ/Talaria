// In App.js in a new project
import { StatusBar } from 'expo-status-bar';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Shoe from './components/Shoe';
import ShoePreview from './components/ShoePreview';
import ShoesList from './components/ShoesList';
import Home from './components/Home';
import Discussion from './components/Discussion';
import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 35, height: 35, margin: 'auto' }}
      source={require('./assets/logo.png')}
    />
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />
        <Stack.Screen
          name="ShoesList"
          component={ShoesList}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />
        <Stack.Screen
          name="ShoePreview"
          component={ShoePreview}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />
        <Stack.Screen
          name="Shoe"
          component={Shoe}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />
        <Stack.Screen
          name="Discussion"
          component={Discussion}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
