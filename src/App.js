import React from 'react';
import logo from '../src/assets/logo.svg';
import '../src/css/App.css';

export default function App({ props }) {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{ fontSize: 36, fontWeight: 'bold' }}>
          React Search Box Component
        </div>
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
  },
};
