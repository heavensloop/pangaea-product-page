import React from 'react';
import ReactDOM from 'react-dom';
import 'index.scss';
import App from 'App';
import reportWebVitals from 'reportWebVitals';
import 'fonts/Karla-Italic-VariableFont_wght.ttf';
import 'fonts/Karla-VariableFont_wght.ttf';
import 'fonts/Montserrat-Regular.ttf';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import { configureStore } from 'store/config';

const client = new ApolloClient({
  uri: 'https://pangaea-interviews.now.sh/api/graphql',
  cache: new InMemoryCache(),
});

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
