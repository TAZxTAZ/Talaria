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
  action: {
    flexDirection: 'row',
    marginTop: 10,
    paddingBottom: 5,
    width: '100%',
  },
  textInput: {
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    marginBottom: 50,
    height: 40,
    fontSize: 20,
    flex: 1,
    color: '#fff',
  },
});

export default styles;
