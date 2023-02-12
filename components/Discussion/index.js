import React, { Component, useState } from 'react';
import {
  View,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  FlatList,
  RefreshControl,
} from 'react-native';
import styles from './style';
import Feather from 'react-native-vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';
import 'localstorage-polyfill';

export default class Discussion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      getChats: this.fetchData(),
      allChats: '',
      idUser: '',
      userName: '',
    };
  }

  fetchData = async () => {
    var user = localStorage.getItem('user');
    user = JSON.parse(user);
    var idShoe = user['idShoe'];
    var headers = {
      Accept: 'application/json',
    };

    var Data = {
      idShoe: idShoe,
    };

    fetch('https://lysun.fr/signUp/getChatById.php', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(Data),
    })
      .then((response) => response.text())
      .then((response) => {
        var data = JSON.parse(response);
        const chats = [];
        data.forEach((item) => {
          const dict = {
            id: item.id,
            message_text: item.message_text,
            idUser: item.idUser,
            idShoe: item.idShoe,
            userName: item.first_name,
          };
          chats.push(dict);
        });

        this.setState({ allChats: chats.reverse() });
        this.setState({ idUser: user['id'] });
      })
      .catch((error) => {
        console.error('ERROR FOUND' + error);
      });
  };

  insertChat = async (message) => {
    var user = localStorage.getItem('user');
    user = JSON.parse(user);
    var idUser = user['id'];
    var idShoe = user['idShoe'];
    var headers = {
      Accept: 'application/json',
    };

    var Data = {
      message: message,
      idUser: idUser,
      idShoe: idShoe,
    };

    fetch('https://lysun.fr/signUp/insertChat.php', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(Data),
    })
      .then((response) => response.text())
      .then((response) => {
        this.fetchData();
      })
      .catch((error) => {
        console.error('ERROR FOUND' + error);
      });
  };

  render() {
    return (
      <View style={styles.viewStyle}>
        <LinearGradient
          // Background Linear Gradient
          colors={['#31baee', '#1dbe6d']}
          style={styles.background}
        />
        <View style={styles.flatList}>
          <FlatList
            data={this.state.allChats}
            keyExtractor={({ id }) => id}
            renderItem={({ item, index }) => {
              if (this.state.allChats[index]) {
                var string = JSON.stringify(this.state.allChats[index]);
                var data = JSON.parse(string);
                if (data['idUser'] == this.state.idUser) {
                  return (
                    <View>
                      <TouchableOpacity
                        onPress={() => console.log('test')}
                        style={styles.itemMe}
                      >
                        <Text style={styles.text}>MOI</Text>
                        <Text style={styles.text}>{item.message_text}</Text>
                      </TouchableOpacity>
                    </View>
                  );
                } else {
                  return (
                    <View>
                      <TouchableOpacity
                        onPress={() => console.log(item)}
                        style={styles.itemNotMe}
                      >
                        <Text style={styles.text}>{item.userName}</Text>
                        <Text style={styles.text}>{item.message_text}</Text>
                      </TouchableOpacity>
                    </View>
                  );
                }
              }
            }}
          />
        </View>
        <View style={styles.action}>
          <TextInput
            placeholder="Votre Message"
            placeholderTextColor="#fff"
            style={styles.textInput}
            onChangeText={(message) => this.setState({ message })}
          />
        </View>

        <View style={styles.loginButtonSection}>
          <Button
            title="Envoyer"
            onPress={() => {
              this.insertChat(this.state.message);
            }}
          />
        </View>
      </View>
    );
  }
}
