import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Example } from './Example';
import { WindowResize } from './WindowResize';
import FoodishApi from './FoodishApi';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<Example/>*/}
   {/* <WindowResize/>*/}
   <FoodishApi/>
  </React.StrictMode>
);

