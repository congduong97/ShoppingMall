import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTE} from './routes';
import MapScreen from '../screens/MapScreen/MapScreen';
import ShopDetail from '../screens/ShopDetail/ShopDetail';
import {STACK_CONFIG} from './configs';

const ShopStack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <ShopStack.Navigator screenOptions={STACK_CONFIG}>
      <ShopStack.Screen name={ROUTE.MAP_SCREEN} component={MapScreen} />
      <ShopStack.Screen name={ROUTE.SHOP_DETAIL} component={ShopDetail} />
    </ShopStack.Navigator>
  );
};

export default ShopNavigator;
