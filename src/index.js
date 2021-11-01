import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Invoice from './modals/Invoice'
import { onPatch } from 'mobx-state-tree';

const invoice = Invoice.create({currency: 'CAD'})
onPatch(invoice, patch=>{
    console.log(patch)
})
ReactDOM.render(
  <React.StrictMode>
    <App invoice={invoice} />
  </React.StrictMode>,
  document.getElementById('root')
);  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
