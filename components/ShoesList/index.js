import React from 'react';
import 'localstorage-polyfill';

import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Button,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';

import styles from './style';

export default class Shoe extends React.Component {
  fetchData = async () => {
    fetch('https://lysun.fr/signUp/getShoes.php', {
      method: 'GET',
    })
      .then((response) => response.text())
      .then((response) => {
        var data = JSON.parse(response);
        const shoes = [];
        data.forEach((item) => {
          const dict = {
            id: item.id,
            shoe_name: item.shoe_name,
            price: item.shoe_price,
          };
          shoes.push(dict);
        });
        this.setState({ allShoes: shoes });
      })
      .catch((error) => {
        console.error('ERROR FOUND' + error);
      });
  };

  constructor(props) {
    super(props);
    this.state = {
      getShoes: this.fetchData(),
      allShoes: '',
    };
  }

  selectingShoe(item) {
    Alert.alert(
      'Attention !',
      'Êtes-vous sur de choisir le shoe ' + item.shoe_name.toLowerCase() + ' ?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => this.userShoe(item) },
      ]
    );
  }
  userShoe(item) {
    var shoe = JSON.stringify(item);
    localStorage.setItem('shoe', shoe);
    this.props.navigation.navigate('Shoe');
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.title}>Choisis ta Basket</Text>
        </View>
        <View style={styles.scrollView}>
          <FlatList
            data={this.state.allShoes}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => this.selectingShoe(item)}
                style={styles.item}
              >
                <Text style={styles.text}>
                  {item.shoe_name} {item.price}€
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity style={styles.validation}>
            <Text style={styles.validationText}>Valider</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
