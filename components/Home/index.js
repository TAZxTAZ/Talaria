// Importation de react afin de pouvoir coder en react
import React from 'react';
// Importation des composants react native pour construire la page
import { Text, View, Button, SafeAreaView } from 'react-native';
// Importation d'un composant de librairie qui permet de faire un dégradé de couleur car react native ne supporte pas encore les dégradés.
import { LinearGradient } from 'expo-linear-gradient';
// Importation du style de la page depuis le fichier style.js du même dossier
import styles from './style';

// Création de la classe Home qui hérite de la classe React.Component
export default class Home extends React.Component {
  render() {
    return (
      <SafeAreaView
        // Permet de définir la classe de l'élément dans le fichier style.js
        style={styles.container}
      >
        <LinearGradient
          // Background Linear Gradient
          colors={['#31baee', '#1dbe6d']}
          style={styles.background}
        />

        <View style={styles.top}>
          <Text style={styles.text}>Bienvenue</Text>
        </View>

        <View style={styles.bottom}>
          <View style={styles.button}>
            <Button
              title="Inscription"
              // Lorsqu'on appuisur sur le bouton, on va vers la page Inscription
              onPress={() => this.props.navigation.navigate('SignUp')}
            />
          </View>

          <View style={styles.button}>
            <Button
              title="Connexion"
              // Lorsqu'on appuisur sur le bouton, on va vers la page Connexion
              onPress={() => this.props.navigation.navigate('SignIn')}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
