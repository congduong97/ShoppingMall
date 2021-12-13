import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './navigator/RootNavigator';
import {SafeAreaView, StatusBar} from 'react-native';
import {styles} from './style';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle={"light-content"} />
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
