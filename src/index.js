import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './features/home/Home';

const title = process.env.REACT_APP_TITLE;
const footer_desc = process.env.REACT_APP_FOOTER;

ReactDOM.render(
  <Home title={title} footer_desc={footer_desc} />,
  document.getElementById('root')
);
