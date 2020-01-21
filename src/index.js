import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './index.css';
import App from './App';

/**
 * Starting the application...
 */
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
