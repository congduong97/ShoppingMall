import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
  title: {fontSize: 18, fontWeight: 'bold', textAlign: 'center'},
  price: {
    color: 'black',
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 20,
  },
  priceNumber: {
    fontSize: 13,
    color: 'blue',
  },
  desc: {textAlign: 'center', lineHeight: 16},
});
