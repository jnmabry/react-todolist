import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import TODOS from './components/App';

ReactDOM.render(<App todoItems={TODOS} />, document.getElementById('root'));
registerServiceWorker();
