import {useRoute} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './style';

const ProductDetail = () => {
  const route = useRoute();
  const {data} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {!!data.name && <Text style={styles.title}>{data.name}</Text>}
        {!!data.price && (
          <Text style={styles.price}>
            Price: $<Text style={styles.priceNumber}>{data.price}</Text>
          </Text>
        )}
        {!!data.description && (
          <Text style={styles.desc}>{data.description}</Text>
        )}
      </View>
    </View>
  );
};

export default ProductDetail;
