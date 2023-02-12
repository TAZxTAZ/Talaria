import React from 'react';
import 'localstorage-polyfill';

import {
  SafeAreaView,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './style';

export default class Shoe extends React.Component {
  userName = this.getUserName();
  getUser() {
    var user = localStorage.getItem('user');
    user = JSON.parse(user);
    return user;
  }

  getUserShoe() {
    var shoe = localStorage.getItem('shoe');
    shoe = JSON.parse(shoe);
    return shoe;
  }

  getUserName() {
    var user = this.getUser();
    return user['first_name'];
  }

  getShoeName() {
    var user = this.getUser();
    var idShoe = user['idShoe'];
    if (idShoe) {
      var headers = {
        Accept: 'application/json',
      };

      var Data = {
        idShoe: idShoe,
      };

      fetch('https://lysun.fr/signUp/getShoeById.php/', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data), //convert data to JSON
      })
        .then((response) => response.text()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
        .then((response) => {
          var shoe = JSON.parse(response);
          this.setState({ shoeName: shoe[0].shoe_name });
        })
        .catch((error) => {
          alert('Error Occured' + error);
        });
    } else {
      var userId = user['id'];
      var userShoe = this.getUserShoe();
      var newIdShoe = userShoe['id'];

      var headers = {
        Accept: 'application/json',
      };

      var Data = {
        idShoe: newIdShoe,
        userId: userId,
      };

      fetch('https://lysun.fr/signUp/updateUser.php/', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data), //convert data to JSON
      })
        .then((response) => response.text()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
        .then((response) => {
          if (response == 'true') {
            this.setState({ shoeName: userShoe['shoe_name'] });
          }
        })
        .catch((error) => {
          alert('Error Occured' + error);
        });
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      getShoes: this.getShoeName(),
      shoeName: '',
    };
  }

  disconnect() {
    localStorage.removeItem('user');
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <LinearGradient
          // Background Linear Gradient
          colors={['#31baee', '#1dbe6d']}
          style={styles.background}
        />

        <View style={styles.top}>
          <Text style={styles.title}>Bonjour {this.userName}</Text>
          <Text style={styles.title}>
            Tu es inscris au shoe de {this.state.shoeName}
          </Text>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Discussion')}
            style={styles.chat}
          >
            <Text style={styles.chatText}>Discussion</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.disconnect()}
            style={styles.disconnect}
          >
            <Text style={styles.disconnectText}>Déconnexion</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
