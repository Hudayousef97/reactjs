import React from 'react';
import ReactDOM from 'react-dom';  
import App3 from './App3';
import App4 from './App4'
import App5 from './App5';

import reportWebVitals from './reportWebVitals';


//task1
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App3 />
//   </React.StrictMode>
// );

//-------------------------task2-----------------------



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App4 />
//   </React.StrictMode>
// );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



//------------------------------task3------------------------
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Counter from './Counter';

// ReactDOM.render(<Counter />, document.getElementById('root'));
//-------------------task4----------
// src/index.js


ReactDOM.render(
  <React.StrictMode>
    
    <App5 />
  </React.StrictMode>,
  document.getElementById('root')
);
