import React, {useState} from 'react';
import {View, Text, Modal, TouchableOpacity, TextInput} from 'react-native';
import {styles} from './style';

const ProductModal = ({visible, setVisible}) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

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
          />
          <Text style={styles.label}>Price</Text>

          <TextInput
            onChangeText={text => {
              setPrice(text);
            }}
            style={styles.input}
          />
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.textArea}
            onChangeText={text => {
              setDescription(text);
            }}
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
              onPress={() => {
                setVisible(false);
              }}>
              <Text style={styles.productModalSubmitTxt}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ProductModal;
