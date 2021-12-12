import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addProduct: {
    paddingHorizontal: 20,
    paddingTop: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    alignSelf: 'flex-end',
  },
  addProductTxt: {
    textAlign: 'right',
    fontSize: 16,
  },
  contentContainerStyle: {
    padding: 16,
  },
  list: {
    marginTop: 16,
  },
  productItem: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  productTitle: {
    fontSize: 16,
    color: 'black',
    lineHeight: 20,
  },
  productPrice: {
    color: 'black',
    fontSize: 14,
  },
  productPriceNumber: {
    fontSize: 13,
    color: 'blue',
  },
  productDesc: {
    paddingVertical: 8,
  },
  emptyList: {
    fontSize: 16,
    color: 'grey',
    textAlign: 'center',
  },
  productModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productModalContent: {
    backgroundColor: 'white',
    height: '60%',
    width: '70%',
    borderRadius: 10,
  },
  productModalTitle: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  productModalAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    marginTop: 10,
  },
  productModalCancel: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: 'black',
    padding: 6,
  },
  productModalCancelTxt: {
    fontSize: 14,
  },
  productModalSubmit: {
    borderRadius: 6,
    padding: 6,
    backgroundColor: '#346eeb',
  },
  productModalSubmitTxt: {
    fontSize: 14,
    color: 'white',
  },
  input: {
    fontSize: 14,
    borderWidth: 1,
    borderColor: 'black',
    padding: 6,
    borderRadius: 6,
    marginTop: 10,
    marginHorizontal: 16,
  },
  textArea: {
    fontSize: 14,
    borderWidth: 1,
    borderColor: 'black',
    padding: 6,
    borderRadius: 6,
    marginTop: 20,
    marginHorizontal: 16,
    minHeight: 100,
    textAlignVertical: 'top',
  },
  label: {
    fontSize: 14,
    marginLeft: 10,
    marginTop: 6,
  },
});
