import React from 'react';
import { View, Image } from 'react-native';
import { Text, Button } from 'react-native-paper';

const Intro = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f95800' }}>
      <Text style={{fontSize: 20, fontWeight: "bold", color: "#fff"}}>Been There</Text>
      <Image style={{width: 100, height: 150}} source={require("../assets/images/BT.png")} />
      <Button style={{marginTop: 24, borderColor: '#fff', borderWidth: 2}} color="#fff" icon="map-marker-outline" mode="outlined" onPress={() => navigation.navigate('Capture')}>
        Capture Location
      </Button>
      <Button style={{marginTop: 24, borderColor: '#fff', borderWidth: 2}} color="#fff" icon="format-list-bulleted" mode="outlined" onPress={() => navigation.navigate('LocationList')}>
        Location List
      </Button>
    </View>
  );
};

export { Intro }
