import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App';
import { Setting } from './Components/Setting/Setting';
import { Calendar } from './Components/Calendar/Calendar';
import { Today } from './Components/Today/Today';

import reportWebVitals from './reportWebVitals';
import { store } from './State/Redux/Redux'

import './index.css';


import ContainerLoginForm from './Components/LoginForm/LoginForm'





const StoreForLogin = store.getState().LoginData

const Root = () => {
  return (
    <Provider store={ store }>
      <App />
    </Provider>
  )
}

const ErrorPage = () => {
  return (
    <div>Error page</div>
  )
}


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root/>,
    },
    {
      path: "/Login",
      element: <Provider store={ store }><ContainerLoginForm/></Provider>,
    },
    {
      path: "/Calendar",
      element: <Calendar />,
    },
    {
      path: "/Today",
      element: <Today />,
    },
    {
      path: "/Setting",
      element: <Setting />,
    }
  ]
);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>
);

reportWebVitals();
