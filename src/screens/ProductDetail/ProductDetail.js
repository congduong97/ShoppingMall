import {useRoute} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './style';

const ProductDetail = () => {
  const route = useRoute();
  console.log('route', route);
  const {data} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {!!data.title && <Text style={styles.title}>{data.title}</Text>}
        {!!data.price && (
          <Text style={styles.price}>
            Price: $<Text style={styles.priceNumber}>{data.price}</Text>
          </Text>
        )}
        {!!data.description && (
          <Text style={styles.desc}>{data.description}</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ProductDetail;
