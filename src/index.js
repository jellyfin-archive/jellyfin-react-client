/**
 * Web platform entry point
 */

import React from 'react';
import {render} from 'react-native';

import registerServiceWorker from './registerServiceWorker';

import App from './App'

render(<App/>, document.getElementById('root'));

registerServiceWorker();