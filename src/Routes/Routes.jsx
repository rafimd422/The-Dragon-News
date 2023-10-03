import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from './../Pages/Home/Home';
import Login from "../Pages/LogIn/Login";
import Register from "../Pages/Register/Register";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
path: '/',
element: <Home />
      },
        {
path: '/login',
element: <Login />
      },
        {
path: '/register',
element: <Register />
      },
    ]
    },
  ]);


  export default routes