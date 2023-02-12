import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  
  textInput: {
    borderColor: '#fff',
    borderWidth: 1,
    height: 40,
    fontSize: 20,
    flex: 1,
    //color: '#fff',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: 150,
    borderRadius: 10,
    backgroundColor: 'black',
  },
  action: {
    flexDirection: 'row',
    //marginTop: 620,
    width: '100%',
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    textTransform: 'uppercase',
  },
  loginButtonSection: {
    width: '100%',
    justifyContent: 'center',
  },
  itemNotMe: {
    bottom: 0,
    backgroundColor: 'blue',
    marginBottom: 15,
  },

  flatList:{
    height: 500
  },

  userMessage:{
    fontSize: 15,
    lineHeight: 10,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    textTransform: 'uppercase',
  },

  itemMe:{
    bottom: 0,
    backgroundColor: 'green',
    marginBottom: 15,
  }
});

export default styles;
