import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';

import 'animate.css/animate.min.css';
import './styles/css/bootstrap.css';
import './styles/css/index.css';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import './i18n';

WebFont.load({
  google: {
    families: ['Roboto Condensed:300,400,700&amp;subset=cyrillic', '-apple-system']
  },
  custom: {
    families: ['FontAwesome'],
    // integrity: 'sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN',
    // crossorigin: 'anonymous',
    urls: ['https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css']
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
