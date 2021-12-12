import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, Text, Alert, FlatList, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProductModal from './ProductModal';
import {styles} from './style';
import {ROUTE} from '../../navigator/routes';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();
  useEffect(() => {
    getProduct();
    return () => {};
  }, []);

  const getProduct = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products?limit=5');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      Alert.alert('SERVER IS ERROR !');
    }
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(ROUTE.PRODUCT_DETAIL, {
            data: item,
          });
        }}
        activeOpacity={0.9}
        style={styles.productItem}>
        {!!item.title && <Text style={styles.productTitle}>{item.title}</Text>}
        {!!item.price && (
          <Text style={styles.productPrice}>
            Price: $<Text style={styles.productPriceNumber}>{item.price}</Text>
          </Text>
        )}
        {!!item.description && (
          <View style={styles.productDesc}>
            <Text>{item.description.split(' ').slice(0, 8)} ...</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };
  const renderKey = item => {
    return item.id + '';
  };
  const renderListEmpty = () => {
    return <Text style={styles.emptyList}>have no prduct !</Text>;
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setVisible(true);
        }}
        style={styles.addProduct}>
        <Text style={styles.addProductTxt}>+ Add new product</Text>
      </TouchableOpacity>
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        style={styles.list}
        renderItem={renderItem}
        keyExtractor={renderKey}
        data={products}
        ListEmptyComponent={renderListEmpty()}
      />
      <ProductModal visible={visible} setVisible={setVisible} />
    </SafeAreaView>
  );
};

export default Product;
