import React from 'react';

import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

let autoComplete;

// script to load google places API
const loadScript = (url, callback) => {
  let script = document.createElement('script');
  script.type = 'text/javascript';

  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState === 'loaded' || script.readyState === 'complete') {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
};

function handleScriptLoad(updateQuery, autoCompleteRef) {
  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    { types: ['(cities)'], componentRestrictions: { country: 'uk' } }
  );
  autoComplete.setFields(['address_components', 'formatted_address']);
  autoComplete.addListener('place_changed', () =>
    handlePlaceSelect(updateQuery)
  );
}

async function handlePlaceSelect(updateQuery) {
  const addressObject = autoComplete.getPlace();
  const query = addressObject.formatted_address;
  updateQuery(query);
  console.log(addressObject);
}

export default function SearchInputBarTwo({ props }) {
  const [query, setQuery] = React.useState(null);
  const autoCompleteRef = React.useRef(null);

  const SEARCH_BOX_WIDTH = 330;
  const BORDER_RADIUS = 24;
  const INPUT_HEIGHT = 50;

  const bgPrimary = '#fff';
  const bgSecondary = '#f2f2f2';

  // HANDLERS ---------------------------------------------------------
  const handleClearInput = () => {
    setQuery(null);
  };

  React.useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );
  }, []);

  // SERVERS ---------------------------------------------------------
  const ServeActions = () => {
    return (
      <div style={styles.iconContainer}>
        <div
          style={{
            display: 'flex',
            padding: 5,
            borderRadius: '50%',
            backgroundColor: bgSecondary,
          }}
        >
          {!query && <SearchIcon />}
          {query && <CloseIcon onClick={handleClearInput} />}
        </div>
      </div>
    );
  };

  // RETURN ---------------------------------------------------------
  return (
    <div>
      <div className="title-one">Stand alone component</div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'end',
          borderRadius: BORDER_RADIUS,
          borderBottomLeftRadius: BORDER_RADIUS,
          borderBottomRightRadius: BORDER_RADIUS,
          height: INPUT_HEIGHT,
          width: SEARCH_BOX_WIDTH,
          backgroundColor: 'white',
          overflow: 'hidden',
        }}
      >
        <input
          ref={autoCompleteRef}
          style={styles.input}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Enter a location"
          value={query}
        />
        {/* <ServeActions /> */}
      </div>
    </div>
  );
}

const styles = {
  input: {
    display: 'flex',
    flex: 1,
    fontSize: 18,
    padding: '0 20px',
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '0 10px',
  },
};
