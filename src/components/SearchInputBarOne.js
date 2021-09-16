import React from 'react';

import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

export default function SearchInputBarOne({ placeholder, data }) {
  const [filteredData, setFilteredData] = React.useState([]);
  const [searchPhrase, setSearchPhrase] = React.useState('');

  const SEARCH_BOX_WIDTH = 330;
  const BORDER_RADIUS = 24;
  const INPUT_CONTAINER_HEIGHT = 40;
  const INPUT_PADDING = '0px 24px';
  const bgPrimary = '#fff';
  const bgSecondary = '#f2f2f2';

  // HANDLERS ---------------------------------------------------------
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setSearchPhrase(searchWord);
  };

  const handleClearInput = () => {
    setFilteredData([]);
    setSearchPhrase('');
  };

  const fetchData = async () => {
    const location = searchPhrase;
    const URL = 'https://maps.googleapis.com/maps/api/geocode/json';
    const API_KEY = 'AIzaSyBqK6x1Nj8GpbVCHEy1aicJAYN8Hf61iOE';
    const REQUEST_URL =
      URL + '?address=' + location.replace(/ /g, '+') + 'CA&key=' + API_KEY;

    try {
      // const response = await fetch(REQUEST_URL);
      // const data = await response.json();
      // const address = data.results[0].address_components;
      // const address = data.results[0].formatted_address;
      // console.log('address: ', address); //debug
      // setFilteredData(data);

      const newFilter = data.filter((value) => {
        return value.title.toLowerCase().includes(searchPhrase.toLowerCase());
      });
      if (searchPhrase === '') {
        setFilteredData([]);
      } else {
        setFilteredData(newFilter);
      }
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    setTimeout(() => {
      fetchData();
      console.log(filteredData);
    }, 1500);
  }, [searchPhrase]);

  // SERVERS ---------------------------------------------------------
  const FeedElement = ({ post }) => {
    const { title } = post;

    let titlePreview = `${title.substring(0, 35)}...`;
    if (title.length < 35) titlePreview = title;

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '10px 0',
        }}
      >
        <div>{titlePreview}</div>
      </div>
    );
  };

  const ServeFilterSelectionContainer = () => {
    return (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          position: 'absolute',
          zIndex: 99,
          width: SEARCH_BOX_WIDTH,
          borderBottomLeftRadius: BORDER_RADIUS,
          borderBottomRightRadius: BORDER_RADIUS,
          backgroundColor: bgPrimary,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            maxHeight: '20vh',
            borderTop: `1px solid ${bgSecondary}`,
            padding: INPUT_PADDING,
          }}
        >
          <div style={{ overflowY: 'auto' }}>
            {filteredData.map((post, index) => (
              <FeedElement post={post} key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  };

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
          {!searchPhrase && <SearchIcon />}
          {searchPhrase && <CloseIcon onClick={handleClearInput} />}
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
          borderBottomLeftRadius: !!filteredData.length ? '' : BORDER_RADIUS,
          borderBottomRightRadius: !!filteredData.length ? '' : BORDER_RADIUS,
          height: 50,
          width: SEARCH_BOX_WIDTH,
          backgroundColor: 'white',
          overflow: 'hidden',
        }}
      >
        <input
          type="text"
          placeholder={placeholder}
          value={searchPhrase}
          onChange={handleFilter}
          style={styles.input}
        />
        <ServeActions />
      </div>
      {!!filteredData.length && <ServeFilterSelectionContainer />}
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
