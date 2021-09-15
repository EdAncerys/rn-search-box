import React from 'react';
import '../src/css/App.css';

import Header from '../src/components/Header';
import PageOne from '../src/pages/PageOne';

import DummyContent from './components/DummyContent';

export default function App({ props }) {
  return (
    <div style={styles.container}>
      <Header />
      <PageOne />
      <DummyContent />
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
};
