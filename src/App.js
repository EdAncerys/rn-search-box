import React from 'react';
import '../src/css/App.css';

import { client } from './apollo/client';
import { ApolloProvider } from '@apollo/client';

import DummyData from './components/Data.json';
import Header from '../src/components/Header';
import PageOne from '../src/pages/PageOne';
import SearchInputBarOne from './components/SearchInputBarOne';
import SearchInputBarTwo from './components/SearchInputBarTwo';

import DummyContent from './components/DummyContent';

export default function App({ props }) {
  React.useEffect(() => {
    // logIn();
  });
  console.log('env: ', process.env.GRAPHQL_URI);

  return (
    <ApolloProvider client={client}>
      <div style={styles.container}>
        <Header />
        <SearchInputBarOne DummyData={DummyData} />
        <SearchInputBarTwo />
        <PageOne />
        <DummyContent />
      </div>
    </ApolloProvider>
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
