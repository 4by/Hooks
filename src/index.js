import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

//  import App from './basic/1_useState';
// import App from './basic/2_useEffect';
//  import App from './basic/3_useContext';
// import App from './addit/1_useReducer';
// import App from './addit/2_useCallback';
//  import App from './addit/3_useMemo';
import App from './addit/4_useRef';

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
