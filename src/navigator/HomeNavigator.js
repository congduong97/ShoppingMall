import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTE} from './routes';
import ProductDetail from '../screens/ProductDetail/ProductDetail';
import Product from '../screens/Product/Product';
import {STACK_CONFIG} from './configs';

const HomeStack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={STACK_CONFIG}>
      <HomeStack.Screen name={ROUTE.PRODUCT} component={Product} />
      <HomeStack.Screen name={ROUTE.PRODUCT_DETAIL} component={ProductDetail} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
