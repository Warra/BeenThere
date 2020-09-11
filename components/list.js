import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { ActivityIndicator, List, Surface } from 'react-native-paper';
import axios from 'axios'

const styles = StyleSheet.create({
  surface: {
    padding: 8,
    elevation: 4,
    marginBottom: 2,
  },
});

const LocationList = ({ navigation }) => {
  const [list, setList] = useState(null);

  useEffect(() => {
    const run = async () => {
      const response = await axios.get(`http://10.0.2.2:3333/location`)
      setList(response.data)
    }
    if (!list) {
      run()
    }
  }, [list])
  
  return (
    <>
      {!list && (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
          <ActivityIndicator animating={true} color={"#f95800"} />
        </View>
      )}
    {list && (<ScrollView>
      {list.map(({ city, country, streetName, zipcode, created_at, lat, lon }, index) => (
          <Surface key={`${city}-${country}-${lat}-${index}`} style={styles.surface}>
            <List.Item
              title={`${city}, ${country}`}
              titleStyle={{ color: '#f95800' }}
              description={created_at}
              left={props => <List.Icon {...props} color={"#f95800"} icon="map-marker" />}
              onPress={() => navigation.navigate('Details', {
                city,
                country,
                streetName,
                zipcode,
                lat,
                lon,
                dateTime: created_at
              })}
            />
          </Surface>
          )
        )}
      </ScrollView>
    )}
    </>
  );
};

export { LocationList }
