import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import ErrorBoundry from './components/errorBoundry';
import UneroService from './services/UneroService';
import UneroServiceContext from './components/uneroServiceContext';
import store from './store';

import './static/baseStyles/base.scss';
import './static/baseStyles/absoluteWrapper.scss';
import './static/baseStyles/mainWrapper.scss';
import './static/baseStyles/mixins.scss';
import './static/baseStyles/variables.scss';

const uneroService = new UneroService();

ReactDOM.render(
    <Provider store={store}>
		  <ErrorBoundry>
			  <UneroServiceContext.Provider value={uneroService}>
			 	  <Router>
					  <App/>
				  </Router>
			  </UneroServiceContext.Provider>
		  </ErrorBoundry>
	  </Provider>
    , document.getElementById(`root`)
);

