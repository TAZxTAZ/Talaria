import React, { Component } from 'react';
import 'localstorage-polyfill';

import {
  View,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import styles from './style';
import Feather from 'react-native-vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      check_textInputChange: false,
      secureTextEntry: true,
    };
  }

  InsertRecord = () => {
    var Email = this.state.email;
    var Password = this.state.password;

    if (Email.length == 0 || Password.length == 0) {
      alert('Required Field Is Missing!!!');
    } else {
      var APIURL = 'https://lysun.fr/signUp/login.php/';

      var headers = {
        Accept: 'application/json',
      };

      var Data = {
        email: Email,
        password: Password,
      };

      fetch(APIURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data),
      })
        .then((response) => response.text())
        .then((response) => {
          if (response.startsWith('true')) {
            var user = response.slice(4, response.length);
            localStorage.setItem('user', user);
            this.props.navigation.navigate('Shoe');
          } else {
            alert('Aucun utilisateur');
          }
        })
        .catch((error) => {
          console.error('ERROR FOUND' + error);
        });
    }
  };

  updateSecureTextEntry() {
    this.setState({
      ...this.state,
      secureTextEntry: !this.state.secureTextEntry,
    });
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <LinearGradient
          // Background Linear Gradient
          colors={['#31baee', '#1dbe6d']}
          style={styles.background}
        />
        <View style={styles.action}>
          <TextInput
            placeholder="Enter Email"
            placeholderTextColor="#fff"
            style={styles.textInput}
            onChangeText={(email) => this.setState({ email })}
          />
        </View>

        <View style={styles.action}>
          <TextInput
            placeholder="Enter Password"
            placeholderTextColor="#fff"
            style={styles.textInput}
            secureTextEntry={this.state.secureTextEntry ? true : false}
            onChangeText={(password) => this.setState({ password })}
          />
          <TouchableOpacity onPress={this.updateSecureTextEntry.bind(this)}>
            {this.state.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="white" size={20} />
            )}
          </TouchableOpacity>
        </View>

        {/* Button */}

        <View style={styles.loginButtonSection}>
          <Button
            title="Connexion"
            onPress={() => {
              this.InsertRecord();
            }}
          />
        </View>

        <View style={styles.loginButtonSection}>
          <Button
            title="Créer mon compte"
            onPress={() => {
              this.props.navigation.navigate('SignUp');
            }}
          />
        </View>
      </View>
    );
  }
}
