import React from 'react';
import {View, Text, Image} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ROUTE} from '../../navigator/routes';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import {MarkerImg} from '../../utils/images';

const REGION = {
  latitude: 21.030653,
  longitude: 105.84713,
  latitudeDelta: 0.0922,
  longitudeDelta: 105.804817,
};
const COORD = {
  latitude: 21.030653, longitude: 105.84713
} 

const MapScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mapWrapper}>
      <MapView style={styles.mapView} region={REGION}>
        <Marker
          onPress={() => {
            navigation.jumpTo(ROUTE.HOME);
          }}
          coordinate={COORD}>
          <Image source={MarkerImg} style={styles.marker} />
        </Marker>
      </MapView>
    </View>
  );
};

export default MapScreen;
