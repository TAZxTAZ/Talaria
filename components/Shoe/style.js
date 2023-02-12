import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
    flex: 1,
  },

  bottom: {
    flex: 1,
    width: '100%',
    textAlign: 'center',
    justifyContent: 'flex-start',
    paddingBottom: 100,
  },

  chat: {
    alignSelf: 'center',
    height: 50,
    width: '100%',
    padding: 10,
    margin: 10,
    backgroundColor: '#31baee',
    maxWidth: '80%',
  },

  chatText: {
    fontSize: 22,
    textAlign: 'center',
    color: 'white',
  },

  title: {
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold',
    color: '#fff',
  },
  disconnect: {
    alignSelf: 'center',
    height: 50,
    width: '100%',
    padding: 10,
    margin: 10,
    backgroundColor: 'red',
    maxWidth: '80%',
  },
  disconnectText: {
    fontSize: 22,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
