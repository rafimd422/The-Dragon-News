import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from './../Pages/Home/Home';
import Login from "../Pages/LogIn/Login";
import Register from "../Pages/Register/Register";
import axios from 'axios';
import NewsDetail from "../Pages/NewsDetail/NewsDetail";
import PrivateRoute from "../contextProvider/PrivateRoute/PrivateRoute";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
path: '/',
element: <Home />,
loader: () => axios.get("/news.json")
      },
        {
path: '/news/:id',
element: <PrivateRoute><NewsDetail /></PrivateRoute>,
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