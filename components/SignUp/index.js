import React, { Component, useState } from 'react';
import { View, TextInput, Button, TouchableOpacity } from 'react-native';
import styles from './style';
import Feather from 'react-native-vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import 'localstorage-polyfill';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      last_name: '',
      first_name: '',
      birth: 'Votre date de naissance',
      nick_name: '',
      email: '',
      password: '',
      confirmPw: '',
      check_textInputChange: false,
      secureTextEntry: true,
      confirmSecureTextEntry: true,
    };
  }

  InsertRecord = () => {
    var LastName = this.state.last_name;
    var FirstName = this.state.first_name;
    var Birth = this.state.birth;
    var Email = this.state.email;
    var Password = this.state.password;
    var ConfirmPw = this.state.confirmPw;
    var checkEmail = RegExp(
      /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i
    );

    if (Email.length == 0 || Password.length == 0 || ConfirmPw.length == 0) {
      alert('Required Field Is Missing!!!');
    } else if (!checkEmail.test(Email)) {
      alert('invalid email!!!');
    }
    // Password validations
    else if (Password.length < 8) {
      alert('Minimum 08 characters required!!!');
    } else if (!/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(Password)) {
      alert('Use atleast 01 special character!!!');
    } else if (/[ ]/.test(Password)) {
      alert("Don't include space in password!!!");
    } else if (Password !== ConfirmPw) {
      alert('Password doesnot match!!!');
    } else {
      var InsertAPIURL = 'https://lysun.fr/signUp/signUp.php/'; //API to render signup

      var headers = {
        Accept: 'application/json',
      };

      var Data = {
        last_name: LastName,
        first_name: FirstName,
        birthdate: Birth,
        email: Email,
        password: Password,
      };

      fetch(InsertAPIURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data), //convert data to JSON
      })
        .then((response) => response.text()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
        .then((response) => {
          if (response.startsWith('true')) {
            var user = response.slice(4, response.length);
            localStorage.setItem('user', user);
            this.props.navigation.navigate('ShoesList'); //Navigate to next screen if authentications are valid
          } else {
            alert('La requête a echouée, vous êtes sûrement déjà inscrit.');
          }
        })
        .catch((error) => {
          alert('Error Occured' + error);
        });
    }
  };

  updateSecureTextEntry() {
    this.setState({
      ...this.state,
      secureTextEntry: !this.state.secureTextEntry,
    });
  }

  updateConfirmSecureTextEntry() {
    this.setState({
      ...this.state,
      confirmSecureTextEntry: !this.state.confirmSecureTextEntry,
    });
  }

  updateDisplayDate() {
    this.setState({
      ...this.state,
      displayDate: !this.state.displayDate,
    });
  }

  returnDate(date) {
    this.updateDisplayDate();
    var birth = date.toISOString().split('T')[0];
    this.setState({
      birth: birth,
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
            placeholder="Enter Nom"
            placeholderTextColor="#fff"
            style={styles.textInput}
            onChangeText={(last_name) => this.setState({ last_name })}
          />
        </View>
        <View style={styles.action}>
          <TextInput
            placeholder="Enter Prénom"
            placeholderTextColor="#fff"
            style={styles.textInput}
            onChangeText={(first_name) => this.setState({ first_name })}
          />
        </View>

        <Button
          title={this.state.birth}
          onPress={() => this.updateDisplayDate()}
        />
        <DateTimePickerModal
          isVisible={this.state.displayDate}
          mode="date"
          onConfirm={(date) => this.returnDate(date)}
          onCancel={() => this.updateDisplayDate()}
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
            secureTextEntry={this.state.secureTextEntry ? true : false}
            style={styles.textInput}
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

        <View style={styles.action}>
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor="#fff"
            style={styles.textInput}
            onChangeText={(confirmPw) => this.setState({ confirmPw })}
            secureTextEntry={this.state.confirmSecureTextEntry ? true : false}
          />
          <TouchableOpacity
            onPress={this.updateConfirmSecureTextEntry.bind(this)}
          >
            {this.state.confirmSecureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="white" size={20} />
            )}
          </TouchableOpacity>
        </View>

        <Button
          title="Register"
          onPress={() => {
            //console.log(this.state.first_name);
            this.InsertRecord();
          }}
        />
      </View>
    );
  }
}
