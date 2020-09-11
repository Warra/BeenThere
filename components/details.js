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
  } = route.params

  return (
    <Card>
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      <Card.Title title={`${city}, ${country}`} subtitle={`${streetName}, ${zipcode}`} />
      <Card.Content>
        <Paragraph style={{fontWeight: "bold"}}>Visited at: {dateTime}</Paragraph>
        <Paragraph>Latitude: {lat}</Paragraph>
        <Paragraph>Longitude: {lon}</Paragraph>
      </Card.Content>
    </Card>
  );
};

export { Details }
