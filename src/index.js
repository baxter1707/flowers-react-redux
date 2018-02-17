import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import  {Home}  from './components/Home'
import  ViewFlowers from './components/ViewFlowers'
import {AddFlower} from './components/AddFlower'
import { BaseLayout } from './components/BaseLayout'

import { createStore, applyMiddleware, compose} from 'redux'
import { Provider } from 'react-redux'
import reducer from './store/reducer'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));


ReactDOM.render(
  <BrowserRouter>
  <Provider store = {store}>
  <BaseLayout>
    <Switch>
      <Route path = '/ViewFlowers' component = {ViewFlowers} />
      <Route path = '/AddFlower' component = {AddFlower} />
      <Route path = '/' component = {Home} />
    </Switch>
  </BaseLayout>
  </Provider>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
