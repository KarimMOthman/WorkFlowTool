import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import 'bootstrap';
import Footer from './components/footer';
import WorkFlowsSearchBar from './components/searchBar';

//import App from './components/app';
import StormTrial from './components/StormTrial';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div className='BackGround'>
    <WorkFlowsSearchBar />
    <StormTrial />
    <Footer/>
    </div>
  </Provider>
  , document.querySelector('.container'));
