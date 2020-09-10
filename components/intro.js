import React from 'react';
import { View, Image } from 'react-native';
import { Text, Button } from 'react-native-paper';

const Intro = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f95800' }}>
      <Text style={{fontSize: 20, fontWeight: "bold", color: "#fff"}}>Been There</Text>
      <Image style={{width: 100, height: 150}} source={require("../assets/images/BT.png")} />
      <Button style={{marginTop: 24, borderColor: '#fff', borderWidth: 2}} color="#fff" icon="step-forward" mode="outlined" onPress={() => navigation.navigate('Capture')}>
        Proceed
      </Button>
    </View>
  );
};

export { Intro }
