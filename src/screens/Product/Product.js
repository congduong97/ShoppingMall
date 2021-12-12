import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  Alert,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProductModal from './ProductModal';
import {styles} from './style';
import {ROUTE} from '../../navigator/routes';
import database from '@react-native-firebase/database';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  useEffect(() => {
    const productRef = database().ref('/products');
    const loadingListener = productRef.on('value', snapshot => {
      setLoading(true);
      const list = [];
      snapshot.forEach(function (childSnapshot) {
        list.push(childSnapshot.val());
      });
      setProducts([...products, ...list]);
      setLoading(false);
    });
    return () => {
      productRef.off('value', loadingListener);
    };
  }, []);

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
        {!!item.name && <Text style={styles.productTitle}>{item.name}</Text>}
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
    if (!loading) {
      return <Text style={styles.emptyList}>have no prduct !</Text>;
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator size={'large'} color={'blue'} />
      ) : (
        <>
          <TouchableOpacity
            onPress={() => {
              setVisible(true);
            }}
            style={styles.addProduct}>
            <Text style={styles.addProductTxt}>+ Add new product</Text>
          </TouchableOpacity>
          <FlatList
            contentContainerStyle={styles.contentContainerStyle}
            showsVerticalScrollIndicator={false}
            style={styles.list}
            renderItem={renderItem}
            keyExtractor={renderKey}
            data={products}
            ListEmptyComponent={renderListEmpty()}
          />
        </>
      )}
      <ProductModal visible={visible} setVisible={setVisible} />
    </SafeAreaView>
  );
};

export default Product;
