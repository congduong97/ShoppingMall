import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import HomeNavigator from './HomeNavigator';
import ShopNavigator from './ShopNavigator';
import {ROUTE} from './routes';

const Tab = createMaterialTopTabNavigator();

const RootNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={ROUTE.HOME} component={HomeNavigator} />
      <Tab.Screen name={ROUTE.SHOP} component={ShopNavigator} />
    </Tab.Navigator>
  );
};

export default RootNavigator;
