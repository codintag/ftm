import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss';

// inject my App component into div element with id="root".
ReactDOM.render(  
  <React.StrictMode>
    {/* inject <App /> component into my div with id='root' html element */}
    <App /> {/* my App component */}
  </React.StrictMode>,
  document.getElementById('root') //get the div element with id root
);
