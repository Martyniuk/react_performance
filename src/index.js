// Core
import React from 'react';
import ReactDOM from 'react-dom';

// Instruments
import registerServiceWorker from './registerServiceWorker';
import registerObserver from 'react-perf-devtool';
import './theme/reset.css';
import './index.css';

// Components
import App from './containers/App/App';

registerObserver();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
