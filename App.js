import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigator/RootNavigator';
import firebase from '@react-native-firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC-B1HiExAO9dKGPh2rlFOpGKnedPS6rxM',
  authDomain: 'demofirebase-15091.firebaseapp.com',
  databaseURL: 'https://demofirebase-15091-default-rtdb.firebaseio.com',
  projectId: 'demofirebase-15091',
  storageBucket: 'demofirebase-15091.appspot.com',
  messagingSenderId: '864246396368',
  appId: '1:864246396368:web:52ad34f3dcd17cfbed75d5',
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export {firebase};

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
