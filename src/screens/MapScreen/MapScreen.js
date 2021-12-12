import React from 'react';
import {View, Text} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ROUTE} from '../../navigator/routes';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';

const MapScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mapWrapper}>
        <MapView
          style={styles.mapView}
          region={{
            latitude: 21.030653,
            longitude: 105.84713,
            latitudeDelta: 0.0922,
            longitudeDelta: 105.804817,
          }}>
          <Marker
            onPress={() => {
              navigation.jumpTo(ROUTE.HOME);
            }}
            coordinate={{latitude: 21.030653, longitude: 105.84713}}>
            <View style={styles.circle}>
              <Text style={styles.pinText}>+</Text>
            </View>
          </Marker>
        </MapView>
      </View>
    </SafeAreaView>
  );
};

export default MapScreen;
