import React from 'react';
import { View, Image } from 'react-native';
import { Text, Button, Card, Title, Paragraph } from 'react-native-paper';

const Details = ({ navigation, route }) => {
  const {
    city,
    country,
    streetName,
    zipcode,
    lat,
    lon,
    dateTime,
    imageURL
  } = route.params

  const cityName = city ? `${city}, ` : ''
  return (
    <>
      <Card>
        <Card.Cover source={{ uri: imageURL }} />
        <Card.Title title={`${cityName}${country}`} subtitle={`${streetName}, ${zipcode}`} subtitleStyle={{fontSize: 14}} />
        <Card.Content>
          <Paragraph style={{fontWeight: "bold"}}>Visited at: {dateTime}</Paragraph>
          <Paragraph>Latitude: {lat}</Paragraph>
          <Paragraph>Longitude: {lon}</Paragraph>
        </Card.Content>
      </Card>
      <Button style={{marginTop: 8, borderColor: '#f95800', borderWidth: 2}} color="#f95800" icon="format-list-bulleted" mode="contained" onPress={() => navigation.navigate('LocationList')}>
        Back to location list
      </Button>
      <Button style={{marginTop: 8, borderColor: '#f95800', borderWidth: 2}} color="#f95800" icon="arrow-right-drop-circle" mode="contained" onPress={() => navigation.navigate('Intro')}>
        Back to start
      </Button>
    </>
  );
};

export { Details }
