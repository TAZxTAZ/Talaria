import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },

  top: {
    justifyContent: 'flex-start',
    paddingTop: 30,
    alignItems: 'center',
  },

  bottom: {
    flex: 1,
    paddingBottom: 30,
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  button: {
    margin: 10,
  },
});

export default styles;
