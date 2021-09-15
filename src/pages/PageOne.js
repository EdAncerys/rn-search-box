import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

import Data from '../../src/components/Data.json';
import SearchBar from '../components/SearchBar';

export default function PageOne({}) {
  const [value, setValue] = React.useState(null);
  console.log(value);

  return (
    <div style={styles.container}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <SearchBar placeholder="Search Bar" data={Data} />
      </div>
      <GooglePlacesAutocomplete
        apiKey="AIzaSyAhbjitpt0tYto-g0gj7LrUSuwxJz0-pXw"
        autocompletionRequest={{
          componentRestrictions: {
            country: ['uk'],
          },
        }}
        selectProps={{
          value,
          onChange: setValue,
        }}
      />
    </div>
  );
}

const styles = {
  container: {},
};
