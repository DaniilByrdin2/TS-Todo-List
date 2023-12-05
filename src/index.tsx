import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";

import App from './App';
import { Setting } from './Components/Setting/Setting';
import { Calendar } from './Components/Calendar/Calendar';
import { Today } from './Components/Today/Today';

import reportWebVitals from './reportWebVitals';
import { State } from './State/Redux/Redux'

import './index.css';


const Root = () => {
  return (
    <Provider store={State}><App /></Provider>
  )
}

const ErrorPage = () => {
  return (
    <div>Error page</div>
  )
}

// const router = createBrowserRouter([{
  // path: "/",
  // element: <Root />,
  // errorElement: <ErrorPage />,

  // children: [
  //   {
  //     path: "/Setting",
  //     element: <Setting />,
  //   },
  //   {
  //     path: "/Calendar",
  //     element: <Calendar />,
  //   },
  //   {
  //     path: "/Today",
  //     element: <Today />,
  //   },
  // ],

// }]);

const router = createBrowserRouter(
  // createRoutesFromElements(
  //   <Route path="/" element={<Root />}>
  //     <Route path="Calendar" element={<Calendar />} />
  //     <Route path="Today" element={<Today />} />
  //     <Route path="Setting" element={<Setting />} />
  //   </Route>
  // )
  [
    {
      path: "/",
      element: <Root/>,
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
