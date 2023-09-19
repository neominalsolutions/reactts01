import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ClassComponent from './ClassComponent';
import ListSample from './List';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // uygulama dev modda iken component için hookları veya component yaşam döngüsü methodlarını 2 kare tetikler. Production build de kapalıdır.
  // <React.StrictMode>
  <>
    {/* <App /> */}
    {/* <ClassComponent name={'deneme'} /> */}
    <ListSample />
    </>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
