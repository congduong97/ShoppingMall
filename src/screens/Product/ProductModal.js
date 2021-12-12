import React, {useState} from 'react';
import {View, Text, Modal, TouchableOpacity, TextInput} from 'react-native';
import {styles} from './style';
import database from '@react-native-firebase/database';

const ProductModal = ({visible, setVisible}) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = () => {
    setVisible(false);
    const key = database().ref().push().key;
    database()
      .ref('products/' + key)
      .update({key, name, price, description})
      .then(snapshot => {
        console.log(snapshot);
        setName('');
        setPrice('');
        setDescription('');
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <Modal animationType="slide" visible={visible} transparent={true}>
      <View style={styles.productModalContainer}>
        <View style={styles.productModalContent}>
          <Text style={styles.productModalTitle}>PRODUCT</Text>
          <Text style={styles.label}>Name</Text>
          <TextInput
            onChangeText={text => {
              setName(text);
            }}
            style={styles.input}
            value={name}
          />
          <Text style={styles.label}>Price</Text>

          <TextInput
            onChangeText={text => {
              setPrice(text);
            }}
            value={price}
            style={styles.input}
          />
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.textArea}
            onChangeText={text => {
              setDescription(text);
            }}
            value={description}
            multiline={true}
            underlineColorAndroid="transparent"
          />
          <View style={styles.productModalAction}>
            <TouchableOpacity
              style={styles.productModalCancel}
              onPress={() => {
                setVisible(false);
              }}>
              <Text style={styles.productModalCancelTxt}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.productModalSubmit}
              onPress={onSubmit}>
              <Text style={styles.productModalSubmitTxt}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ProductModal;
