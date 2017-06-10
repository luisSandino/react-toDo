import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

var tasksList = ["Learn ReactJS", "Learn react-native", "Learn ECMAScript 6"];

ReactDOM.render(<App tasks={tasksList} />, document.getElementById('root'));
registerServiceWorker();
