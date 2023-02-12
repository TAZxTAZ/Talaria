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

  opacity: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  top: {
    justifyContent: 'flex-start',
    paddingTop: 30,
    alignItems: 'center',
    flex: 1,
  },

  descripiton: {
    fontSize: 18,
    textAlign: 'center',
    padding: 10,
  },

  middle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottom: {
    flex: 1,
    paddingBottom: 30,
    justifyContent: 'center',
  },

  title: {
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold',
    color: '',
  },
  validation: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    padding: 10,
    backgroundColor: '#32CD32',
  },
  validationText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default styles;
