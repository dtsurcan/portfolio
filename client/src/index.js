import React from 'react';
import ReactDOM from 'react-dom';

import './styles/css/bootstrap.css';
import './styles/css/index.css';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import './i18n';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
