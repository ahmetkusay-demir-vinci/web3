import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App/App.jsx';
import 'components/App/App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

// Configuration d’Apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // URL du serveur GraphQL
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
);