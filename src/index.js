import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import registerObserver from 'react-perf-devtool';

// let registerObserver = require('react-perf-devtool');

registerObserver();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
