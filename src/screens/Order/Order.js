import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const Order = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: '',
        language: 'en',
      }}
    />
  );
};

export default Order;