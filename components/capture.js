import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Text, Button, ActivityIndicator } from 'react-native-paper';
import axios from 'axios'
navigator.geolocation = require('@react-native-community/geolocation');

const Capture = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const run = async () => {
      navigator.geolocation.getCurrentPosition(
        position => {
          const saved = saveLocation(position.coords)
          setLocation(saved);
  
          setTimeout(() => {
            setLoading(false)
          }, 2000)
        },
        error => Alert.alert(error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    }
    if (!location) {
      run()
    }
  }, [location])

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
      { isLoading && (<>
          <Text style={{ marginBottom: 16, color: "#fff" }}>Capturing Location Details</Text>
          <ActivityIndicator animating={true} color={"#fff"} />
        </>)}
      {!isLoading && location && (
        <>
          <Text style={{fontSize: 20, fontWeight: "bold", color: "#fff"}}>Location Captured Successfully</Text>
          <Button style={{marginTop: 24, borderColor: '#fff', borderWidth: 2}} color="#fff" icon="arrow-right-bold" mode="outlined" onPress={() => navigation.navigate('Details', {
            city: location._W.city,
            country: location._W.country,
            streetName: location._W.streetName,
            zipcode: location._W.zipcode,
            lat: location._W.lat,
            lon: location._W.lon,
            dateTime: location._W.dateTime,
            imageURL: location._W.imageURL,
          })}>
            See Location Details
          </Button>
        </>
      )}
    </View>
  );
};

export { Capture }
