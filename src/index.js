import React from 'react';
import ReactDOM from 'react-dom';
import App, {TODOS} from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App todoItems={TODOS} />, document.getElementById('root'));
registerServiceWorker();
