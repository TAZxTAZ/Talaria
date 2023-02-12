import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1dbe6d',
  },

  top: {
    justifyContent: 'flex-start',
    height: 50,
    width: '100%',
  },

  title: {
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
  },

  scrollView: {
    height: 400,
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#1dbe6d',
  },

  item: {
    alignSelf: 'center',
    height: 50,
    width: '100%',
    padding: 10,
    margin: 10,
    backgroundColor: '#31baee',
    maxWidth: '80%',
  },

  text: {
    fontSize: 22,
    textAlign: 'center',
    textTransform: 'uppercase',
  },

  bottom: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: 100,
    backgroundColor: '#1dbe6d',
  },

  validation: {
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#32CD32',
    height: 50,
    width: '80%',
    padding: 10,
    margin: 10,
  },
  validationText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default styles;
