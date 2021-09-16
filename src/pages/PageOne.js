import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

import Data from '../../src/components/Data.json';

export default function PageOne({}) {
  const [value, setValue] = React.useState(null);
  console.log('Selected search value: ', value); //debug

  return (
    <div style={styles.container}>
      <div className="title-one">@react-google-places-autocomplete library</div>

      <GooglePlacesAutocomplete
        apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
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
  container: {
    minWidth: 330,
  },
};
