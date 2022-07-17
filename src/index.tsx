import { ApolloClient,ApolloProvider, from, HttpLink, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Web3ReactProvider } from "@web3-react/core";
import MetamaskProvider from "./providers/metamask";
import { Web3Provider } from "@ethersproject/providers";

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

const api_url="https://moonking.herokuapp.com/graphql"
const local="http://localhost:4000/graphql"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const errorLink = onError(({ graphQLErrors, networkError }) => {
  graphQLErrors?.length &&
    graphQLErrors.map(({ message, path }) => {
      console.log(`Graphql error ${message} at location ${path}`);
    });
});

const link = from([
  errorLink,
  new HttpLink({
    uri: api_url,
  }),
]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});


root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <MetamaskProvider>
          <App />
        </MetamaskProvider>
      </Web3ReactProvider>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
