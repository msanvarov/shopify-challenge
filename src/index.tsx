import React from 'react';
import ReactDOM from 'react-dom';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'react-modal-video/css/modal-video.min.css';

import Home from 'pages/index';
import About from 'pages/about';
import NotFound from 'pages/404';
import AppLayout from 'components/app-layout/AppLayout';
import { RootAppState } from 'store';

import * as serviceWorker from './serviceWorker';
import configureStore from './configure-store';

const storeConfiguration = configureStore(window.INITIAL_REDUX_STATE);

type AppProps = {
  store: Store<RootAppState>;
};

const App: React.FC<AppProps> = ({ store }) => (
  <Router>
    <Route
      render={() => (
        <Provider {...{ store }}>
          <AppLayout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
          </AppLayout>
        </Provider>
      )}
    />
  </Router>
);

ReactDOM.render(<App store={storeConfiguration} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
