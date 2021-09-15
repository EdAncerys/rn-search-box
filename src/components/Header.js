import React from 'react';

import AirlineSeatReclineExtraSharpIcon from '@material-ui/icons/AirlineSeatReclineExtraSharp';

export default function Header({ props }) {
  return (
    <div style={styles.container}>
      <AirlineSeatReclineExtraSharpIcon
        className="App-logo"
        alt="logo"
        style={{ fontSize: 60, color: 'red' }}
      />
      <div style={styles.title}>React Search Box Component</div>
    </div>
  );
}

const styles = {
  container: {
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
