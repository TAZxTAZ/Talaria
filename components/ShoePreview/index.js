import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './style';

export default class ShoePreview extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={
            'https://static8.depositphotos.com/1176848/894/i/600/depositphotos_8945283-stock-photo-checkerboard-chess-background.jpg'
          }
          style={styles.background}
        />

        <View style={styles.opacity} />

        <View style={styles.top}>
          <Text style={styles.title}>Confirmer ce choix ?</Text>
          <Text style={styles.title}>Shoe d'echec</Text>
          <Text style={styles.descripiton}>
            Dans ce shoe vous apprendrez à jouer aux échec et vous participerez,
            si vous le souhaitez, à des tournois régionnaux et internationnaux
          </Text>
        </View>
        <View style={styles.middle}>
          <Text style={styles.title}>Membres: 125</Text>
          <Text style={styles.title}>Prix: 50$</Text>
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
