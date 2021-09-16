import React from 'react';
import '../src/css/App.css';

import Header from '../src/components/Header';
import PageOne from '../src/pages/PageOne';
import SearchInputBarOne from './components/SearchInputBarOne';
import SearchInputBarTwo from './components/SearchInputBarTwo';

import DummyContent from './components/DummyContent';

export default function App({ props }) {
  return (
    <div style={styles.container}>
      <Header />
      <SearchInputBarOne />
      <SearchInputBarTwo />
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
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'pink',
    overflowY: 'auto',
  },
};
