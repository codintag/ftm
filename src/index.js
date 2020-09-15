import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss';


ReactDOM.render(
  <React.StrictMode>
    {/* inject <App /> component into my div with id='root' html element */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
