import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

// import App from './examples/1_useState';
// import App from './examples/2_useEffect';
// import App from './examples/3_useRef';
//  import App from './examples/4_useMemo';
// import App from './examples/5_useCallback';
//  import App from './examples/6_useContext';
import App from './examples/7_useReducer';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
