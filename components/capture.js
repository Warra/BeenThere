import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Button, ActivityIndicator } from 'react-native-paper';
import axios from 'axios'
navigator.geolocation = require('@react-native-community/geolocation');

const Capture = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [isLoading, setLoading] = useState(null);

	const findCoordinates = () => {
		navigator.geolocation.getCurrentPosition(
			position => {
        // console.log(position.coords)
        const saved = saveLocation(position.coords)
        setLocation(saved);
        setLoading(true)

        setTimeout(() => {
          setLoading(false)
        }, 1000)
			},
			error => Alert.alert(error.message),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  const saveLocation = async (data) => {
    const { latitude, longitude } = data

    const saved = await axios.post('http://10.0.2.2:3333/location/save', {
      lat: latitude,
      lon: longitude
    })

    return saved.data
  }
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f95800' }}>
      {!location && 
        <Button style={{marginTop: 24, borderColor: '#fff', borderWidth: 2}} color="#fff" icon="map-marker-outline" mode="outlined" onPress={findCoordinates}>
          Capture Location
        </Button>}
      { isLoading && <ActivityIndicator animating={true} color={"#fff"} />}
      {!isLoading && location && (
        <>
          <Text style={{fontSize: 20, fontWeight: "bold", color: "#fff"}}>Location Captured Successfully</Text>
          <Button style={{marginTop: 24, borderColor: '#fff', borderWidth: 2}} color="#fff" icon="arrow-right-bold" mode="outlined" onPress={() => navigation.navigate('Details', {...location})}>
            Proceed
          </Button>
        </>
      )}
    </View>
  );
};

export { Capture }
