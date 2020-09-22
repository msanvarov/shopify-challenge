import React from 'react';
import ReactDOM from 'react-dom';
import { Store } from 'redux';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory, History } from 'history';
import 'react-toastify/dist/ReactToastify.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'react-modal-video/css/modal-video.min.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import LandingPage from 'pages/index';
import MoviesPage from 'pages/movies';
import NotFound from 'pages/404';
import AppLayout from 'components/app-layout/AppLayout';
import { IApplicationState } from 'store';

import * as serviceWorker from './serviceWorker';
import configureStore from './configure-store';
import NominationsPage from 'pages/nominations';

const history = createBrowserHistory();
const storeConfiguration = configureStore(history, window.INITIAL_REDUX_STATE);

type AppProps = {
  store: Store<IApplicationState>;
  history: History;
};

const App: React.FC<AppProps> = ({ store }) => (
  <Provider {...{ store }}>
    <ConnectedRouter history={history}>
      <Router>
        <Route
          render={() => (
            <AppLayout>
              <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/movies" component={MoviesPage} />
                <Route exact path="/nominations" component={NominationsPage} />
                <Route component={NotFound} />
              </Switch>
            </AppLayout>
          )}
        />
      </Router>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(
  <App store={storeConfiguration} history={history} />,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
