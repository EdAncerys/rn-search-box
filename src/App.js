import React from 'react';
import '../src/css/App.css';

import AirlineSeatReclineExtraSharpIcon from '@material-ui/icons/AirlineSeatReclineExtraSharp';
import SearchBar from './components/SearchBar';
import Data from '../src/components/Data.json';

export default function App({ props }) {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <AirlineSeatReclineExtraSharpIcon
          className="App-logo"
          alt="logo"
          style={{ fontSize: 60, color: 'red' }}
        />
        <div style={styles.title}>React Search Box Component</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <SearchBar placeholder="Search Bar" data={Data} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
        hello content
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
        hello content
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
        hello content
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'pink',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 36,
    padding: 20,
    fontWeight: 'bold',
  },
};
