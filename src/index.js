import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import Register from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Profile from './Components/Profile';
import Transactions from './Components/Transactions';
import Users from './Components/Users';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LoadingMobile from './Components/LoadingMobile';

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/LoadingMobile",
    element: <LoadingMobile />
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Nav",
    element: <Nav />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/Profile",
    element: <Profile />,
  },
  {
    path: "/Transactions",
    element: <Transactions />,
  },
  {
    path: "/Users",
    element: <Users />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client= { queryClient }>
    <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
