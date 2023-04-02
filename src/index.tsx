import React from 'react';
import { RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import router from './routes/routes'
import { GlobalStyle} from './styles/global';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
